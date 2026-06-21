#!/usr/bin/env python3
"""Build the static EnterpriseClawBench leaderboard data bundle.

Source lookup order is intentional:
1. Paper-copied docs/bundle artifacts.
2. Original frontis-bench outputs/report_data artifacts.
3. Original frontis-bench outputs/matrix_runs artifacts.
"""

from __future__ import annotations

import csv
import json
import shutil
from collections import defaultdict
from datetime import datetime
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_FRONTIS = Path("/hpc_data/jczhong/frontis-bench")
PAPER_DOCS = DEFAULT_FRONTIS / "docs"
PAPER_BUNDLE = PAPER_DOCS / "emnlp_industry_outline_bundle"
REPORT_DATA = DEFAULT_FRONTIS / "outputs" / "report_data"
MATRIX_RUNS = DEFAULT_FRONTIS / "outputs" / "matrix_runs"
PAPER_FIGURES = Path("/hpc_data/jczhong/FrontisBench/assets/figures")


def read_json(path: Path) -> dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8-sig"))


def read_csv(path: Path) -> list[dict[str, str]]:
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle))


def first_existing(candidates: list[tuple[str, Path]]) -> tuple[str, Path]:
    for tier, path in candidates:
        if path.exists():
            return tier, path
    searched = "\n".join(f"- [{tier}] {path}" for tier, path in candidates)
    raise FileNotFoundError(f"No source file found. Searched:\n{searched}")


def to_float(value: Any, default: float | None = None) -> float | None:
    if value is None or value == "":
        return default
    try:
        return float(value)
    except (TypeError, ValueError):
        return default


def to_int(value: Any, default: int = 0) -> int:
    parsed = to_float(value)
    return default if parsed is None else int(parsed)


def model_label(combo: str) -> str:
    return combo.split("/", 1)[1] if "/" in combo else combo


def harness_label(harness: str) -> str:
    labels = {
        "claudecode": "Claude Code",
        "codex": "Codex",
        "deepagents": "DeepAgents",
        "hermes": "Hermes",
        "openclaw": "OpenClaw",
    }
    return labels.get(harness, harness)


def class_label(class_id: str) -> str:
    labels = {
        "data_business_analysis": "Data & Business Analysis",
        "knowledge_document_collaboration": "Knowledge & Document Work",
        "management_reporting_org_support": "Management Reporting",
        "product_design_digital_delivery": "Product & Digital Delivery",
        "project_operations_sales_customer": "Project / Sales / Customer Ops",
        "research_intelligence_decision": "Research & Decision Support",
        "technical_system_tooling": "Technical Tooling",
    }
    return labels.get(class_id, class_id.replace("_", " ").title())


def load_leaderboard() -> tuple[dict[str, Any], dict[str, str]]:
    tier, path = first_existing(
        [
            (
                "paper_copied",
                PAPER_DOCS / "nonstateful_hard120_29combo_leaderboard_scatter.summary.json",
            ),
            (
                "paper_copied",
                PAPER_BUNDLE / "nonstateful_hard120_29combo_leaderboard_scatter.summary.json",
            ),
            (
                "report_data",
                REPORT_DATA / "report_inputs" / "hard120_29combo_current.html_data.json",
            ),
            (
                "raw_run",
                MATRIX_RUNS / "nonstateful_hard120_29combo_20260601" / "matrix_run_status_summary.json",
            ),
        ]
    )
    if path.suffix == ".json":
        data = read_json(path)
        if "combos" in data and "meta" not in data:
            data = {
                "meta": {
                    "generated_at": data.get("generated_at"),
                    "board_id": Path(data.get("run_dir", path.parent)).name,
                    "source": data.get("run_dir", str(path)),
                    "score_policy": "Raw matrix-run fallback: primary_attr_fail0 if present; otherwise primary_avg.",
                    "cost_policy": data.get("cost_summary", {}).get("currency", "RMB"),
                },
                "combos": data.get("combos", []),
            }
        return data, {"leaderboard": tier, "leaderboard_path": str(path)}
    raise RuntimeError(f"Unsupported leaderboard source: {path}")


def load_task_matrix() -> tuple[list[dict[str, str]], dict[str, str]]:
    tier, path = first_existing(
        [
            (
                "paper_copied",
                PAPER_DOCS / "nonstateful_hard120_29combo_task_score_matrix_20260603.csv",
            ),
            (
                "paper_copied",
                PAPER_BUNDLE / "nonstateful_hard120_29combo_task_score_matrix_20260603.csv",
            ),
            (
                "report_data",
                REPORT_DATA / "reports" / "hard120_29combo_category_artifact_analysis.data.json",
            ),
            (
                "raw_run",
                MATRIX_RUNS / "nonstateful_hard120_29combo_20260601" / "eval_tasks.from_task_pack.jsonl",
            ),
        ]
    )
    if path.suffix == ".csv":
        return read_csv(path), {"task_matrix": tier, "task_matrix_path": str(path)}
    if path.suffix == ".json":
        data = read_json(path)
        rows = [
            {
                "task_id": row["big_class"],
                "big_class": row["big_class"],
                "subclass_name": class_label(row["big_class"]),
                "primary_attr_fail0_avg": str(row.get("primary_avg", "")),
                "primary_valid_avg": str(row.get("primary_avg", "")),
                "score_std": "",
                "failed_n": str(row.get("failed", 0)),
                "sandbox_infra_excluded_n": "",
                "score_max_combo": row.get("top_combo", ""),
                "score_max": str(row.get("primary_avg", "")),
            }
            for row in data.get("class_overall", [])
        ]
        return rows, {"task_matrix": tier, "task_matrix_path": str(path)}
    if path.suffix == ".jsonl":
        rows = []
        with path.open("r", encoding="utf-8") as handle:
            for line in handle:
                if not line.strip():
                    continue
                item = json.loads(line)
                rows.append(
                    {
                        "task_id": item.get("task_id", ""),
                        "instance_id": item.get("instance_id", ""),
                        "big_class": item.get("big_class", "unknown"),
                        "subclass_id": item.get("subclass_id", ""),
                        "subclass_name": item.get("subclass_name", ""),
                        "business_task": item.get("business_task", ""),
                        "fixture_count": str(len(item.get("fixtures", []) or item.get("input_fixture_paths", []))),
                        "primary_attr_fail0_avg": "",
                        "primary_valid_avg": "",
                        "score_std": "",
                        "failed_n": "",
                        "sandbox_infra_excluded_n": "",
                        "score_max_combo": "",
                        "score_max": "",
                    }
                )
        return rows, {"task_matrix": tier, "task_matrix_path": str(path)}
    raise RuntimeError(f"Unsupported task matrix fallback: {path}")


def load_figure_json(name: str) -> tuple[dict[str, Any], dict[str, str]]:
    tier, path = first_existing(
        [
            ("paper_copied", PAPER_FIGURES / name / "data.json"),
            ("paper_copied", PAPER_DOCS / "assets" / name / "data.json"),
            ("report_data", REPORT_DATA / "reports" / f"{name}.json"),
        ]
    )
    return read_json(path), {name: tier, f"{name}_path": str(path)}


def build_combo_rows(leaderboard: dict[str, Any]) -> list[dict[str, Any]]:
    rows = []
    for item in leaderboard.get("combos", []):
        score = to_float(
            item.get("primary_attr_fail0"),
            to_float(item.get("primary_failed0"), to_float(item.get("primary_avg"), 0.0)),
        ) or 0.0
        completed_score = to_float(
            item.get("primary_completed_avg"),
            to_float(item.get("primary_avg"), 0.0),
        ) or 0.0
        completion = to_float(item.get("completion_rate"), 0.0) or 0.0
        cost = to_float(item.get("total_cost_rmb"), 0.0) or 0.0
        elapsed = to_float(item.get("elapsed_median_sec"), to_float(item.get("elapsed_median"), 0.0)) or 0.0
        raw_harness = str(item.get("harness", ""))
        harness = raw_harness.replace("open-sandbox__", "")
        model = item.get("model", model_label(str(item.get("combo", ""))))
        combo = item.get("combo") or f"{harness}/{model}"
        planned = to_int(item.get("planned"))
        completed = to_int(item.get("completed"))
        if item.get("completion_rate") is None and planned:
            completion = completed / planned
        cost_per_completed = to_float(item.get("cost_per_completed"), None)
        if cost_per_completed is None and completed:
            cost_per_completed = cost / completed
        total_tokens = to_int(item.get("total_tokens"))
        if not total_tokens and isinstance(item.get("agent_usage"), dict):
            total_tokens += to_int(item["agent_usage"].get("totals", {}).get("total_tokens"))
        if isinstance(item.get("judge_usage"), dict):
            total_tokens += to_int(item["judge_usage"].get("totals", {}).get("total_tokens"))
        rows.append(
            {
                "combo": combo,
                "harness": harness,
                "harnessLabel": harness_label(harness),
                "model": model,
                "planned": planned,
                "completed": completed,
                "failed": to_int(item.get("failed")),
                "completionRate": completion,
                "primaryScore": score,
                "completedScore": completed_score,
                "ruleAvg": to_float(item.get("rule_avg"), 0.0),
                "visualAvg": to_float(item.get("visual_best_avg"), None),
                "visualN": to_int(item.get("primary_visual_n")),
                "textN": to_int(item.get("primary_sonnet_n"), to_int(item.get("primary_text_n"))),
                "missingN": to_int(item.get("primary_missing_n")),
                "attributableFail0N": to_int(item.get("attributable_failed_zero_n")),
                "sandboxExcludedN": to_int(item.get("sandbox_failure_excluded_n")),
                "costRmb": cost,
                "costPerCompleted": cost_per_completed,
                "medianSec": elapsed,
                "avgSec": to_float(item.get("elapsed_avg_sec"), to_float(item.get("elapsed_avg"), None)),
                "toolCallAvg": to_float(item.get("tool_call_avg"), None),
                "turnAvg": to_float(item.get("assistant_turn_avg"), None),
                "totalTokens": total_tokens,
                "evidenceWarnings": to_int(item.get("evidence_warnings"), to_int(item.get("evidence_warning_count"))),
            }
        )
    rows.sort(key=lambda row: (row["primaryScore"], row["completionRate"]), reverse=True)
    for idx, row in enumerate(rows, start=1):
        row["rank"] = idx
    return rows


def combo_columns(rows: list[dict[str, str]]) -> list[str]:
    if not rows:
        return []
    known = {
        "task_id",
        "instance_id",
        "big_class",
        "subclass_id",
        "subclass_name",
        "business_task",
        "fixture_count",
        "source_display_name",
        "source_duration_sec",
        "source_n_turns",
        "source_tool_call_count",
        "score_n",
        "valid_completed_score_n",
        "completed_n",
        "failed_n",
        "attributable_failed_zero_n",
        "sandbox_infra_excluded_n",
        "missing_primary_n",
        "visual_required_combo_n",
        "visual_valid_combo_n",
        "primary_attr_fail0_avg",
        "primary_valid_avg",
        "score_std",
        "score_min",
        "score_min_combo",
        "score_max",
        "score_max_combo",
        "score_range",
    }
    return [key for key in rows[0].keys() if key not in known and "/" in key]


def build_task_classes(rows: list[dict[str, str]]) -> list[dict[str, Any]]:
    grouped: dict[str, list[dict[str, str]]] = defaultdict(list)
    for row in rows:
        class_id = row.get("big_class", "unknown")
        grouped[class_id].append(row)

    combos = combo_columns(rows)
    result = []
    for class_id, class_rows in grouped.items():
        avg_scores = [to_float(r.get("primary_attr_fail0_avg")) for r in class_rows]
        valid_scores = [x for x in avg_scores if x is not None]
        failed = sum(to_int(r.get("failed_n")) for r in class_rows)
        infra = sum(to_int(r.get("sandbox_infra_excluded_n")) for r in class_rows)
        combo_avgs = []
        for combo in combos:
            values = [to_float(r.get(combo)) for r in class_rows]
            values = [v for v in values if v is not None]
            if values:
                combo_avgs.append((sum(values) / len(values), combo))
        combo_avgs.sort(reverse=True)
        subclass_groups: dict[str, list[dict[str, str]]] = defaultdict(list)
        for row in class_rows:
            key = row.get("subclass_name") or row.get("subclass_id") or row.get("task_id") or "Unknown subclass"
            subclass_groups[key].append(row)
        hardest_subclasses = []
        for subclass_name, subclass_rows in subclass_groups.items():
            subclass_scores = [
                score
                for score in (to_float(r.get("primary_attr_fail0_avg")) for r in subclass_rows)
                if score is not None
            ]
            if not subclass_scores:
                continue
            representative = min(
                subclass_rows,
                key=lambda r: to_float(r.get("primary_attr_fail0_avg"), 99.0) or 99.0,
            )
            subclass_combo_avgs = []
            for combo in combos:
                values = [to_float(r.get(combo)) for r in subclass_rows]
                values = [v for v in values if v is not None]
                if values:
                    subclass_combo_avgs.append((sum(values) / len(values), combo))
            subclass_combo_avgs.sort(reverse=True)
            hardest_subclasses.append(
                {
                    "taskId": representative.get("task_id", ""),
                    "subclassName": subclass_name,
                    "businessTask": representative.get("business_task", ""),
                    "primaryScore": sum(subclass_scores) / len(subclass_scores),
                    "taskCount": len(subclass_rows),
                    "bestCombo": subclass_combo_avgs[0][1] if subclass_combo_avgs else representative.get("score_max_combo", ""),
                    "bestScore": subclass_combo_avgs[0][0] if subclass_combo_avgs else to_float(representative.get("score_max")),
                }
            )
        hardest = sorted(
            hardest_subclasses,
            key=lambda row: row["primaryScore"] if row["primaryScore"] is not None else 99.0,
        )[:3]
        result.append(
            {
                "id": class_id,
                "label": class_label(class_id),
                "taskCount": len(class_rows),
                "primaryScore": sum(valid_scores) / len(valid_scores) if valid_scores else None,
                "failedN": failed,
                "sandboxExcludedN": infra,
                "winner": combo_avgs[0][1] if combo_avgs else "",
                "winnerScore": combo_avgs[0][0] if combo_avgs else None,
                "hardest": hardest,
            }
        )
    result.sort(key=lambda row: row["primaryScore"] or 0.0, reverse=True)
    return result


def build_task_extremes(rows: list[dict[str, str]]) -> dict[str, list[dict[str, Any]]]:
    def compact(row: dict[str, str]) -> dict[str, Any]:
        return {
            "taskId": row.get("task_id", ""),
            "classId": row.get("big_class", ""),
            "classLabel": class_label(row.get("big_class", "")),
            "subclassName": row.get("subclass_name", ""),
            "businessTask": row.get("business_task", ""),
            "primaryScore": to_float(row.get("primary_attr_fail0_avg")),
            "validScore": to_float(row.get("primary_valid_avg")),
            "scoreStd": to_float(row.get("score_std")),
            "failedN": to_int(row.get("failed_n")),
            "sandboxExcludedN": to_int(row.get("sandbox_infra_excluded_n")),
            "bestCombo": row.get("score_max_combo", ""),
            "bestScore": to_float(row.get("score_max")),
            "worstCombo": row.get("score_min_combo", ""),
            "worstScore": to_float(row.get("score_min")),
        }

    with_scores = [row for row in rows if to_float(row.get("primary_attr_fail0_avg")) is not None]
    hardest = sorted(with_scores, key=lambda row: to_float(row.get("primary_attr_fail0_avg"), 99.0) or 99.0)[:12]
    highest_variance = sorted(with_scores, key=lambda row: to_float(row.get("score_std"), -1.0) or -1.0, reverse=True)[:12]
    return {
        "hardest": [compact(row) for row in hardest],
        "highestVariance": [compact(row) for row in highest_variance],
    }


def build_derived_boards(combos: list[dict[str, Any]]) -> dict[str, list[dict[str, Any]]]:
    enriched = []
    for row in combos:
        cost = float(row.get("costRmb") or 0)
        minutes = float(row.get("avgSec") or row.get("medianSec") or 0) / 60
        warnings = float(row.get("evidenceWarnings") or 0)
        missing = float(row.get("missingN") or 0)
        failed = float(row.get("failed") or 0)
        score = float(row.get("primaryScore") or 0)
        reliability = (
            float(row.get("completionRate") or 0)
            - 0.003 * missing
            - 0.0015 * warnings
            - 0.004 * failed
        )
        enriched.append(
            {
                **row,
                "scorePerRmb": score / cost if cost > 0 else 0,
                "scorePerMinute": score / minutes if minutes > 0 else 0,
                "reliabilityIndex": max(0, reliability),
            }
        )

    fields = [
        ("efficiency", "scorePerRmb", True),
        ("speed", "scorePerMinute", True),
        ("reliability", "reliabilityIndex", True),
        ("lowCost", "costPerCompleted", False),
        ("lowWarning", "evidenceWarnings", False),
    ]
    boards: dict[str, list[dict[str, Any]]] = {}
    keep = {
        "rank",
        "combo",
        "harness",
        "harnessLabel",
        "model",
        "primaryScore",
        "completionRate",
        "costRmb",
        "costPerCompleted",
        "medianSec",
        "avgSec",
        "evidenceWarnings",
        "scorePerRmb",
        "scorePerMinute",
        "reliabilityIndex",
    }
    for board_name, key, high in fields:
        rows = [row for row in enriched if row.get(key) is not None]
        rows.sort(key=lambda row: row.get(key) or 0, reverse=high)
        boards[board_name] = [{k: row.get(k) for k in keep} for row in rows[:8]]
    return boards


def build_score_distribution(combos: list[dict[str, Any]]) -> list[dict[str, Any]]:
    bins = [
        ("<0.30", 0.0, 0.30),
        ("0.30-0.45", 0.30, 0.45),
        ("0.45-0.55", 0.45, 0.55),
        ("0.55-0.62", 0.55, 0.62),
        (">=0.62", 0.62, 2.0),
    ]
    out = []
    for label, lo, hi in bins:
        members = [
            row for row in combos
            if (row.get("primaryScore") is not None and lo <= float(row["primaryScore"]) < hi)
        ]
        out.append(
            {
                "label": label,
                "count": len(members),
                "combos": [row["combo"] for row in members],
                "avgCostRmb": sum(float(row.get("costRmb") or 0) for row in members) / len(members) if members else 0,
            }
        )
    return out


def build_harness_metrics(combos: list[dict[str, Any]]) -> list[dict[str, Any]]:
    grouped: dict[str, list[dict[str, Any]]] = defaultdict(list)
    for row in combos:
        grouped[row["harness"]].append(row)
    metrics = []
    for harness, rows in grouped.items():
        n = len(rows)
        metrics.append(
            {
                "harness": harness,
                "harnessLabel": rows[0]["harnessLabel"],
                "comboCount": n,
                "primaryScore": sum(float(r.get("primaryScore") or 0) for r in rows) / n,
                "completionRate": sum(float(r.get("completionRate") or 0) for r in rows) / n,
                "costPerCompleted": sum(float(r.get("costPerCompleted") or 0) for r in rows) / n,
                "medianSec": sum(float(r.get("medianSec") or 0) for r in rows) / n,
                "warnings": sum(float(r.get("evidenceWarnings") or 0) for r in rows) / n,
            }
        )
    metrics.sort(key=lambda row: row["primaryScore"], reverse=True)
    return metrics


def normalize_model_key(value: Any) -> str:
    return str(value or "").strip().lower().replace("_", "-")


def build_combo_dimension_options(
    combos: list[dict[str, Any]],
    dimension_profile: dict[str, Any],
) -> list[dict[str, Any]]:
    dim_names = ["Accuracy", "Relevance", "Depth", "Utility", "Quality"]
    model_rows = {
        normalize_model_key(row.get("model")): row
        for row in dimension_profile.get("models", [])
        if row.get("model")
    }
    overall_values = {
        row["dimension"]: row.get("value", 0)
        for row in dimension_profile.get("overall", [])
    }
    options = []
    for combo in combos:
        model = combo.get("model", "")
        model_row = model_rows.get(normalize_model_key(model), {})
        values = {
            dim: to_float(model_row.get(dim), to_float(overall_values.get(dim), 0.0)) or 0.0
            for dim in dim_names
        }
        options.append(
            {
                "combo": combo.get("combo", ""),
                "harness": combo.get("harness", ""),
                "harnessLabel": combo.get("harnessLabel", ""),
                "model": model,
                "primaryScore": combo.get("primaryScore"),
                "rank": combo.get("rank"),
                "values": values,
                "sourceLevel": "model" if model_row else "overall_fallback",
            }
        )
    return options


def load_extra_visual_data() -> tuple[dict[str, Any], dict[str, str]]:
    source_tiers: dict[str, str] = {}
    funnel_json, funnel_source = load_figure_json("fig2_funnel")
    artifact_json, artifact_source = load_figure_json("fig6_artifact_type_heatmap")
    dimension_json, dimension_source = load_figure_json("fig7_dimension_profile_heatmap")
    stats_json, stats_source = load_figure_json("fig3_benchmark_statistics")
    source_tiers.update(funnel_source)
    source_tiers.update(artifact_source)
    source_tiers.update(dimension_source)
    source_tiers.update(stats_source)

    dimension_rows = dimension_json.get("data", [])
    dim_names = ["Accuracy", "Relevance", "Depth", "Utility", "Quality"]
    overall = []
    for dim in dim_names:
        values = [to_float(row.get(dim)) for row in dimension_rows]
        values = [v for v in values if v is not None]
        overall.append({"dimension": dim, "value": sum(values) / len(values) if values else 0})

    return (
        {
            "funnel": {
                "title": funnel_json.get("title", ""),
                "stages": funnel_json.get("data", {}).get("stages", []),
                "note": funnel_json.get("data", {}).get("note", ""),
            },
            "artifactInsights": {
                "artifactOverall": artifact_json.get("data", []),
                "columns": artifact_json.get("column_order", []),
                "models": artifact_json.get("model_order", []),
            },
            "dimensionProfile": {
                "overall": overall,
                "models": dimension_rows,
                "dimensions": dimension_json.get("dimensions", {}),
            },
            "benchmarkStats": stats_json.get("panels", {}),
        },
        source_tiers,
    )


def copy_case_assets() -> list[dict[str, Any]]:
    source_dir = PAPER_BUNDLE / "assets" / "nonstateful_hard120_case_showcase"
    if not source_dir.exists():
        source_dir = PAPER_DOCS / "assets" / "nonstateful_hard120_case_showcase"
    target_dir = ROOT / "assets" / "cases"
    target_dir.mkdir(parents=True, exist_ok=True)

    specs = [
        {
            "key": "event-page",
            "title": "Executive Event Page",
            "taskId": "fb-293915333729767424_i0101",
            "model": "Claude Code / Sonnet 4.6",
            "artifact": "event-preview HTML",
            "lesson": "Strong frontend delivery on an event communication task, with a complete rendered page rather than a text-only response.",
            "match": "fb-293915333729767424_i0101__claudecode__sonnet-4.6__event-preview_html_playwright_fullpage.png",
        },
        {
            "key": "study-tour",
            "title": "AI Executive Study Tour",
            "taskId": "fb-293915333729767424_i0101",
            "model": "OpenClaw / Kimi K2.6",
            "artifact": "study-tour HTML",
            "lesson": "A cross-harness example showing how presentation structure and visual completeness vary for the same enterprise workflow.",
            "match": "fb-293915333729767424_i0101__openclaw__kimi-k2.6__ai_executive_study_tour_preview_html_playwright_fullpage.png",
        },
        {
            "key": "spreadsheet",
            "title": "Tonglian Task Spreadsheet",
            "taskId": "fb-296965480151789568_i0013",
            "model": "Claude Code / Opus 4.6",
            "artifact": "XLSX sheet render",
            "lesson": "Spreadsheet tasks expose file-format fidelity and business-data organization, not just natural-language reasoning.",
            "match": "fb-296965480151789568_i0013__claudecode__opus-4.6__tonglian-tasks-summary__sheet_01__playwright.png",
        },
        {
            "key": "skill-standards",
            "title": "Skill Creation Standards",
            "taskId": "fb-297293965693100032_i0009",
            "model": "Codex / GPT-5.5",
            "artifact": "PDF summary pages",
            "lesson": "Document synthesis cases require faithful extraction, clean structure and publishable formatting.",
            "match": "fb-297293965693100032_i0009__codex__gpt-5.5__skill_creation_standards_summary_page-1.png",
        },
        {
            "key": "brand-positioning",
            "title": "Frontis Brand Positioning",
            "taskId": "fb-300327546568937472_i0008",
            "model": "Hermes / Haiku 4.5",
            "artifact": "brand HTML",
            "lesson": "Brand and positioning tasks combine visual hierarchy, copy quality and concrete deliverable packaging.",
            "match": "fb-300327546568937472_i0008__hermes__haiku-4.5__frontis-brand-positioning_html_playwright_fullpage.png",
        },
    ]

    cases = []
    for spec in specs:
        src = source_dir / spec["match"]
        asset = ""
        if src.exists():
            dst = target_dir / src.name
            shutil.copy2(src, dst)
            asset = f"assets/cases/{dst.name}"
        case = {k: v for k, v in spec.items() if k != "match"}
        case["image"] = asset
        cases.append(case)
    return cases


def build_summary(combos: list[dict[str, Any]], task_classes: list[dict[str, Any]]) -> dict[str, Any]:
    top = combos[0] if combos else {}
    efficient = sorted(
        [row for row in combos if row.get("costPerCompleted") is not None],
        key=lambda row: (row["costPerCompleted"], -row["primaryScore"]),
    )
    return {
        "taskCount": max([row.get("planned", 0) for row in combos] + [0]),
        "comboCount": len(combos),
        "harnessCount": len({row.get("harness") for row in combos}),
        "taskClassCount": len(task_classes),
        "topCombo": top.get("combo", ""),
        "topScore": top.get("primaryScore"),
        "topCompletion": max([row.get("completionRate", 0) for row in combos] + [0]),
        "bestCostCombo": efficient[0]["combo"] if efficient else "",
        "bestCostPerCompleted": efficient[0]["costPerCompleted"] if efficient else None,
    }


def main() -> None:
    leaderboard, leaderboard_source = load_leaderboard()
    task_rows, task_source = load_task_matrix()
    extra_visuals, visual_sources = load_extra_visual_data()

    combos = build_combo_rows(leaderboard)
    task_classes = build_task_classes(task_rows)
    cases = copy_case_assets()
    extra_visuals["dimensionProfile"]["comboOptions"] = build_combo_dimension_options(
        combos,
        extra_visuals["dimensionProfile"],
    )

    meta = dict(leaderboard.get("meta", {}))
    meta.update(
        {
            "site_generated_at": datetime.now().isoformat(timespec="seconds"),
            "source_tiers": {**leaderboard_source, **task_source, **visual_sources},
            "lookup_policy": [
                "paper_copied: frontis-bench/docs and docs/emnlp_industry_outline_bundle",
                "report_data: frontis-bench/outputs/report_data",
                "raw_run: frontis-bench/outputs/matrix_runs",
            ],
        }
    )

    data = {
        "meta": meta,
        "summary": build_summary(combos, task_classes),
        "combos": combos,
        "taskClasses": task_classes,
        "taskExtremes": build_task_extremes(task_rows),
        "cases": cases,
        "derivedBoards": build_derived_boards(combos),
        "scoreDistribution": build_score_distribution(combos),
        "harnessMetrics": build_harness_metrics(combos),
        **extra_visuals,
        "metricNotes": {
            "primaryScore": "Primary attributable-failure-zero score: text tasks use Sonnet text judge; visual tasks use Sonnet visual judge; attributable agent failures score zero; sandbox infrastructure failures are excluded.",
            "completedScore": "Average over completed judge-valid tasks.",
            "costRmb": "Agent run cost plus official primary judge costs in RMB.",
        },
    }

    out = ROOT / "ecb-data.js"
    payload = json.dumps(data, ensure_ascii=False, indent=2)
    out.write_text(f"window.ECB_LEADERBOARD_DATA = {payload};\n", encoding="utf-8")
    print(f"Wrote {out}")
    print(json.dumps(data["meta"]["source_tiers"], ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
