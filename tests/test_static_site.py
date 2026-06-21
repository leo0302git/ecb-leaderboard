import json
import re
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def load_data():
    text = (ROOT / "ecb-data.js").read_text(encoding="utf-8")
    payload = re.sub(r"^window\.ECB_LEADERBOARD_DATA = |;\n?$", "", text)
    return json.loads(payload)


class StaticSiteContractTest(unittest.TestCase):
    def test_uses_figure2_palette_and_jetbrains_font(self):
        css = (ROOT / "styles.css").read_text(encoding="utf-8")
        for token in [
            "#1B2337",
            "#5B7DBE",
            "#2E9C9A",
            "#1F6F78",
            "#E58B2E",
            "#D45452",
            "#7C6ACF",
        ]:
            self.assertIn(token, css)
        self.assertIn('font-family: "JetBrains Mono"', css)
        self.assertTrue((ROOT / "assets/fonts/JetBrainsMono-400.ttf").exists())
        self.assertTrue((ROOT / "assets/fonts/JetBrainsMono-800.ttf").exists())

    def test_generated_data_contains_multi_dimensional_visualization_inputs(self):
        data = load_data()
        self.assertIn("derivedBoards", data)
        self.assertGreaterEqual(len(data["derivedBoards"]["efficiency"]), 5)
        self.assertGreaterEqual(len(data["derivedBoards"]["reliability"]), 5)
        self.assertGreaterEqual(len(data["scoreDistribution"]), 5)
        self.assertGreaterEqual(len(data["harnessMetrics"]), 5)
        self.assertGreaterEqual(len(data["artifactInsights"]["artifactOverall"]), 3)
        self.assertGreaterEqual(len(data["dimensionProfile"]["overall"]), 5)
        self.assertGreaterEqual(len(data["dimensionProfile"]["comboOptions"]), 10)
        self.assertGreaterEqual(len(data["funnel"]["stages"]), 5)

    def test_page_contains_rich_visualization_sections(self):
        html = (ROOT / "index.html").read_text(encoding="utf-8")
        for target in [
            "podium",
            "score-runtime-scatter",
            "harness-heatmap",
            "distribution-bars",
            "dimension-radar",
            "artifact-insights",
            "funnel-view",
            "efficiency-board",
            "reliability-board",
        ]:
            self.assertIn(target, html)

    def test_source_policy_is_recorded_but_not_displayed(self):
        data = load_data()
        html = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("source_tiers", data["meta"])
        self.assertIn("lookup_policy", data["meta"])
        for hidden_copy in [
            "Score policy",
            "Data lookup policy",
            "Source audit",
            "Method & Reproducibility",
        ]:
            self.assertNotIn(hidden_copy, html)

    def test_dimension_profile_can_switch_between_combos(self):
        html = (ROOT / "index.html").read_text(encoding="utf-8")
        js = (ROOT / "app.js").read_text(encoding="utf-8")
        self.assertIn("dimension-select", html)
        self.assertIn("comboOptions", js)
        self.assertIn("dimensionCombo", js)

    def test_scatter_exposes_combo_tooltips_and_model_shapes(self):
        js = (ROOT / "app.js").read_text(encoding="utf-8")
        css = (ROOT / "styles.css").read_text(encoding="utf-8")
        html = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn("modelShape", js)
        self.assertIn("row.combo", js)
        self.assertIn("data-tooltip", js)
        self.assertIn("bindScatterTooltip", js)
        self.assertIn("scatter-tooltip", css)
        self.assertIn("model-shape-legend", html)
        self.assertIn("renderModelShapeLegend", js)
        self.assertNotIn('title="${escapeHtml(tooltip)}"', js)
        self.assertIn("shape-diamond", css)
        self.assertIn("shape-triangle", css)
        self.assertIn("shape-square", css)

    def test_main_leaderboard_hides_warnings_column(self):
        html = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertNotIn("<th>Warnings</th>", html)


if __name__ == "__main__":
    unittest.main()
