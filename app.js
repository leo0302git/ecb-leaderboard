(function () {
  const data = window.ECB_LEADERBOARD_DATA;
  if (!data) throw new Error("ECB_LEADERBOARD_DATA is missing");

  const $ = (id) => document.getElementById(id);

  const state = {
    harness: "all",
    metric: "primaryScore",
    caseKey: data.cases[0]?.key || "",
    dimensionCombo: data.dimensionProfile?.comboOptions?.[0]?.combo || "",
  };

  const metricConfig = {
    primaryScore: { label: "Primary score", type: "score", higher: true },
    completedScore: { label: "Completed avg", type: "score", higher: true },
    completionRate: { label: "Completion", type: "percent", higher: true },
    costRmb: { label: "Cost RMB", type: "currency", higher: false },
    costPerCompleted: { label: "Cost / completed", type: "currency", higher: false },
    medianSec: { label: "Median time", type: "duration", higher: false },
    evidenceWarnings: { label: "Warnings", type: "count", higher: false },
  };

  const harnessColors = {
    claudecode: "#D9831F",
    codex: "#2E9C9A",
    deepagents: "#2A7F62",
    hermes: "#7C6ACF",
    openclaw: "#4E7FD1",
  };

  const modelColors = [
    { match: /opus|sonnet|haiku|claude/i, color: "#5F9D68" },
    { match: /gpt|openai/i, color: "#5B7DBE" },
    { match: /kimi/i, color: "#7C6ACF" },
    { match: /qwen/i, color: "#1F6F78" },
    { match: /minimax/i, color: "#E58B2E" },
    { match: /deepseek/i, color: "#D45452" },
    { match: /gemini/i, color: "#51657D" },
  ];

  const modelShapes = [
    { match: /gpt-5\.5/i, shape: "diamond" },
    { match: /sonnet/i, shape: "circle" },
    { match: /opus/i, shape: "square" },
    { match: /haiku/i, shape: "triangle" },
    { match: /kimi/i, shape: "star" },
    { match: /minimax/i, shape: "hex" },
    { match: /gpt-4\.1-mini/i, shape: "plus" },
    { match: /qwen/i, shape: "x" },
    { match: /deepseek/i, shape: "pentagon" },
  ];

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function fmtScore(value) {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return "-";
    return Number(value).toFixed(3);
  }

  function fmtPercent(value) {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return "-";
    return `${(Number(value) * 100).toFixed(1)}%`;
  }

  function fmtCurrency(value) {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return "-";
    const n = Number(value);
    return n >= 100 ? n.toFixed(1) : n.toFixed(2);
  }

  function fmtDuration(seconds) {
    if (seconds === null || seconds === undefined || Number.isNaN(Number(seconds))) return "-";
    const n = Number(seconds);
    if (n < 90) return `${n.toFixed(0)}s`;
    return `${(n / 60).toFixed(1)}m`;
  }

  function fmtCount(value) {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return "-";
    return Number(value).toLocaleString("en-US");
  }

  function fmt(value, type) {
    if (type === "percent") return fmtPercent(value);
    if (type === "currency") return fmtCurrency(value);
    if (type === "duration") return fmtDuration(value);
    if (type === "count") return fmtCount(value);
    return fmtScore(value);
  }

  function modelColor(name) {
    return modelColors.find((item) => item.match.test(name))?.color || "#4c6678";
  }

  function modelShape(name) {
    return modelShapes.find((item) => item.match.test(name))?.shape || "circle";
  }

  function modelInitials(name) {
    return String(name)
      .split(/[\s._-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }

  function rowsForState() {
    const rows = data.combos.filter((row) => state.harness === "all" || row.harness === state.harness);
    const config = metricConfig[state.metric];
    const sorted = [...rows].sort((a, b) => {
      const av = a[state.metric];
      const bv = b[state.metric];
      const aBad = av === null || av === undefined || Number.isNaN(Number(av));
      const bBad = bv === null || bv === undefined || Number.isNaN(Number(bv));
      if (aBad && bBad) return 0;
      if (aBad) return 1;
      if (bBad) return -1;
      return config.higher ? Number(bv) - Number(av) : Number(av) - Number(bv);
    });
    return sorted.map((row, index) => ({ ...row, displayRank: index + 1 }));
  }

  function renderHero() {
    $("hero-board").textContent = data.meta.board_id || "hard120";
    $("hero-score").textContent = fmtScore(data.summary.topScore);
    $("hero-combo").textContent = data.summary.topCombo || "-";
    $("generated-at").textContent = `Generated: ${data.meta.site_generated_at || "-"}`;
    const tier = data.meta.source_tiers?.leaderboard || "-";
    $("source-pill").textContent = `Source tier: ${tier}`;
  }

  function renderSummary() {
    const items = [
      ["Tasks", data.summary.taskCount],
      ["Configurations", data.summary.comboCount],
      ["Harnesses", data.summary.harnessCount],
      ["Task classes", data.summary.taskClassCount],
      ["Top completion", data.summary.topCompletion, "percent"],
      ["Best cost / completed", data.summary.bestCostPerCompleted, "currency"],
    ];
    $("summary-metrics").innerHTML = items
      .map(([label, value, type]) => `
        <div class="kpi">
          <div class="kpi-value">${type ? fmt(value, type) : fmtCount(value)}</div>
          <div class="kpi-label">${escapeHtml(label)}</div>
        </div>
      `)
      .join("");
  }

  function renderPodium() {
    const top = data.combos.slice(0, 3);
    const order = [top[1], top[0], top[2]].filter(Boolean);
    $("podium").innerHTML = order
      .map((row) => `
        <article class="podium-card rank-${row.rank}">
          <div class="podium-rank">#${row.rank}</div>
          <h3>${escapeHtml(row.model)}</h3>
          <p>${escapeHtml(row.harnessLabel)} · ${escapeHtml(row.combo)}</p>
          <div class="podium-score">${fmtScore(row.primaryScore)}</div>
          <div class="podium-meta">
            <span>${fmtPercent(row.completionRate)} complete</span>
            <span>¥${fmtCurrency(row.costRmb)}</span>
            <span>${fmtDuration(row.medianSec)}</span>
          </div>
        </article>
      `)
      .join("");
  }

  function renderControls() {
    const harnesses = [...new Map(data.combos.map((row) => [row.harness, row.harnessLabel])).entries()];
    $("harness-filter").innerHTML = [
      `<option value="all">All harnesses</option>`,
      ...harnesses.map(([value, label]) => `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`),
    ].join("");
    $("harness-filter").value = state.harness;

    $("rank-metric").innerHTML = Object.entries(metricConfig)
      .map(([value, config]) => `<option value="${escapeHtml(value)}">${escapeHtml(config.label)}</option>`)
      .join("");
    $("rank-metric").value = state.metric;
  }

  function renderLeaderboard() {
    const rows = rowsForState();
    $("leaderboard-body").innerHTML = rows
      .map((row) => {
        const color = modelColor(row.model);
        return `
          <tr>
            <td><span class="rank">${row.displayRank}</span></td>
            <td>
              <span class="model-cell">
                <span class="model-mark" style="background:${color}">${escapeHtml(modelInitials(row.model))}</span>
                <strong>${escapeHtml(row.model)}</strong>
              </span>
            </td>
            <td>${escapeHtml(row.harnessLabel)}</td>
            <td class="score">${fmtScore(row.primaryScore)}</td>
            <td>${fmtScore(row.completedScore)}</td>
            <td>${fmtPercent(row.completionRate)}</td>
            <td>${fmtCount(row.visualN)}</td>
            <td>${fmtCount(row.textN)}</td>
            <td>${fmtCurrency(row.costRmb)}</td>
            <td>${fmtCurrency(row.costPerCompleted)}</td>
            <td>${fmtDuration(row.medianSec)}</td>
          </tr>
        `;
      })
      .join("");
    $("metric-note").textContent = data.metricNotes.primaryScore;
  }

  function renderScoreBars() {
    const rows = [...data.combos].sort((a, b) => b.primaryScore - a.primaryScore).slice(0, 14);
    const max = Math.max(...rows.map((row) => row.primaryScore), 0.001);
    $("score-bars").innerHTML = rows
      .map((row) => `
        <div class="bar-row">
          <div class="bar-label" title="${escapeHtml(row.combo)}">${escapeHtml(row.combo)}</div>
          <div class="bar-track">
            <div class="bar-fill" style="width:${clamp((row.primaryScore / max) * 100, 1, 100)}%"></div>
          </div>
          <div class="bar-value">${fmtScore(row.primaryScore)}</div>
        </div>
      `)
      .join("");
  }

  function renderScatter() {
    const rows = data.combos.filter((row) => row.costRmb !== null && row.primaryScore !== null);
    renderScatterPlot("score-cost-scatter", rows, "costRmb", "primaryScore", "Cost RMB", "Primary score", fmtCurrency);
    renderScatterPlot("score-runtime-scatter", rows, "medianSec", "primaryScore", "Median time", "Primary score", fmtDuration);
    const harnesses = [...new Map(data.combos.map((row) => [row.harness, row.harnessLabel])).entries()];
    $("scatter-legend").innerHTML = harnesses
      .map(([harness, label]) => `
        <span class="legend-item">
          <span class="legend-swatch" style="background:${harnessColors[harness] || "#51657D"}"></span>
          ${escapeHtml(label)}
        </span>
      `)
      .join("");
    renderModelShapeLegend();
  }

  function renderModelShapeLegend() {
    const models = [...new Map(data.combos.map((row) => [row.model, row])).values()]
      .sort((a, b) => String(a.model).localeCompare(String(b.model)));
    $("model-shape-legend").innerHTML = [
      `<span class="legend-label">Shape = model</span>`,
      ...models.map((row) => `
        <span class="legend-item">
          <span class="legend-shape shape-${modelShape(row.model)}" style="background:${modelColor(row.model)}"></span>
          ${escapeHtml(row.model)}
        </span>
      `),
    ].join("");
  }

  function renderScatterPlot(targetId, rows, xKey, yKey, xLabel, yLabel, xFormatter) {
    const usable = rows.filter((row) => row[xKey] !== null && row[xKey] !== undefined && row[yKey] !== null && row[yKey] !== undefined);
    const xs = usable.map((row) => Number(row[xKey]));
    const ys = usable.map((row) => Number(row[yKey]));
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    const formatX = xFormatter || fmtScore;
    const points = usable
      .map((row) => {
        const x = ((Number(row[xKey]) - minX) / Math.max(maxX - minX, 0.001)) * 86 + 7;
        const y = ((Number(row[yKey]) - minY) / Math.max(maxY - minY, 0.001)) * 78 + 10;
        const color = harnessColors[row.harness] || "#51657D";
        const tooltip = [
          row.combo,
          `Model: ${row.model}`,
          `Harness: ${row.harnessLabel}`,
          `${yLabel}: ${fmtScore(row[yKey])}`,
          `${xLabel}: ${formatX(row[xKey])}`,
        ].join(" | ");
        return `
          <span
            class="scatter-point shape-${modelShape(row.model)}"
            tabindex="0"
            aria-label="${escapeHtml(tooltip)}"
            data-tooltip="${escapeHtml(tooltip)}"
            style="left:${x}%;bottom:${y}%;background:${color}"
          >
            <span class="sr-only">${escapeHtml(tooltip)}</span>
          </span>
        `;
      })
      .join("");
    $(targetId).innerHTML = `
      <span class="scatter-axis y">${escapeHtml(yLabel)} ↑</span>
      <span class="scatter-axis x">${escapeHtml(xLabel)} →</span>
      ${points}
      <div class="scatter-tooltip" role="tooltip" aria-hidden="true"></div>
    `;
  }

  function bindScatterTooltip(targetId) {
    const plot = $(targetId);
    const tooltip = plot.querySelector(".scatter-tooltip");
    if (!tooltip) return;
    let activePoint = null;

    function positionTooltip(event, point) {
      const rect = plot.getBoundingClientRect();
      const pointRect = point.getBoundingClientRect();
      const rawX = event ? event.clientX - rect.left + 14 : pointRect.left - rect.left + 16;
      const rawY = event ? event.clientY - rect.top - 42 : pointRect.top - rect.top - 48;
      const left = clamp(rawX, 8, Math.max(8, rect.width - 260));
      const top = clamp(rawY, 8, Math.max(8, rect.height - 74));
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
    }

    function show(point, event) {
      activePoint?.classList.remove("active");
      activePoint = point;
      tooltip.textContent = point.dataset.tooltip || "";
      tooltip.classList.add("visible");
      tooltip.setAttribute("aria-hidden", "false");
      point.classList.add("active");
      positionTooltip(event, point);
    }

    function hide() {
      activePoint?.classList.remove("active");
      activePoint = null;
      tooltip.classList.remove("visible");
      tooltip.setAttribute("aria-hidden", "true");
    }

    plot.addEventListener("pointerover", (event) => {
      const point = event.target.closest(".scatter-point");
      if (!point || !plot.contains(point)) return;
      show(point, event);
    });
    plot.addEventListener("pointermove", (event) => {
      if (activePoint) positionTooltip(event, activePoint);
    });
    plot.addEventListener("pointerout", (event) => {
      const point = event.target.closest(".scatter-point");
      if (!point || point.contains(event.relatedTarget)) return;
      hide();
    });
    plot.addEventListener("focusin", (event) => {
      const point = event.target.closest(".scatter-point");
      if (!point || !plot.contains(point)) return;
      show(point);
    });
    plot.addEventListener("focusout", hide);
  }

  function heatColor(value, min, max) {
    const colors = ["#EDF4FB", "#D6E7F5", "#B9D5EB", "#8FB7D8", "#5D95C1", "#2F6C99", "#174A74"];
    const ratio = clamp((value - min) / Math.max(max - min, 0.001), 0, 0.999);
    return colors[Math.floor(ratio * colors.length)];
  }

  function renderHarnessHeatmap() {
    const metrics = [
      ["primaryScore", "Score", "score"],
      ["completionRate", "Completion", "percent"],
      ["costPerCompleted", "Cost / done", "currency"],
      ["medianSec", "Runtime", "duration"],
      ["warnings", "Warnings", "count"],
    ];
    const rows = data.harnessMetrics || [];
    const ranges = Object.fromEntries(metrics.map(([key]) => {
      const vals = rows.map((row) => Number(row[key] || 0));
      return [key, [Math.min(...vals), Math.max(...vals)]];
    }));
    $("harness-heatmap").innerHTML = `
      <div class="heat-row heat-head">
        <span>Harness</span>${metrics.map(([, label]) => `<span>${escapeHtml(label)}</span>`).join("")}
      </div>
      ${rows.map((row) => `
        <div class="heat-row">
          <strong>${escapeHtml(row.harnessLabel)}</strong>
          ${metrics.map(([key, , type]) => {
            const [min, max] = ranges[key];
            const value = Number(row[key] || 0);
            const invert = key === "costPerCompleted" || key === "medianSec" || key === "warnings";
            const color = invert ? heatColor(max - value + min, min, max) : heatColor(value, min, max);
            return `<span class="heat-cell" style="background:${color}">${fmt(value, type)}</span>`;
          }).join("")}
        </div>
      `).join("")}
    `;
  }

  function renderDistribution() {
    const rows = data.scoreDistribution || [];
    const max = Math.max(...rows.map((row) => row.count), 1);
    $("distribution-bars").innerHTML = rows
      .map((row) => `
        <div class="dist-row">
          <span>${escapeHtml(row.label)}</span>
          <div class="dist-track"><i style="width:${(row.count / max) * 100}%"></i></div>
          <strong>${fmtCount(row.count)}</strong>
        </div>
      `)
      .join("");
  }

  function renderDimensionControls() {
    const options = data.dimensionProfile?.comboOptions || [];
    const select = $("dimension-select");
    select.innerHTML = options
      .map((row) => `
        <option value="${escapeHtml(row.combo)}">
          #${fmtCount(row.rank)} ${escapeHtml(row.combo)}
        </option>
      `)
      .join("");
    if (options.some((row) => row.combo === state.dimensionCombo)) {
      select.value = state.dimensionCombo;
    } else if (options[0]) {
      state.dimensionCombo = options[0].combo;
      select.value = state.dimensionCombo;
    }
  }

  function renderRadar() {
    const options = data.dimensionProfile?.comboOptions || [];
    const selected = options.find((row) => row.combo === state.dimensionCombo) || options[0];
    const overall = data.dimensionProfile?.overall || [];
    const rows = selected
      ? Object.entries(selected.values || {}).map(([dimension, value]) => ({ dimension, value }))
      : overall;
    if (!rows.length) return;
    const cx = 180;
    const cy = 150;
    const radius = 96;
    const points = rows.map((row, idx) => {
      const angle = -Math.PI / 2 + idx * 2 * Math.PI / rows.length;
      const r = radius * Number(row.value || 0);
      return [cx + Math.cos(angle) * r, cy + Math.sin(angle) * r, angle, row];
    });
    const grid = [0.25, 0.5, 0.75, 1].map((scale) => {
      const ring = rows.map((_, idx) => {
        const angle = -Math.PI / 2 + idx * 2 * Math.PI / rows.length;
        return `${cx + Math.cos(angle) * radius * scale},${cy + Math.sin(angle) * radius * scale}`;
      }).join(" ");
      return `<polygon points="${ring}" fill="none" stroke="#E6EAF0" stroke-width="1"></polygon>`;
    }).join("");
    const spokes = rows.map((_, idx) => {
      const angle = -Math.PI / 2 + idx * 2 * Math.PI / rows.length;
      return `<line x1="${cx}" y1="${cy}" x2="${cx + Math.cos(angle) * radius}" y2="${cy + Math.sin(angle) * radius}" stroke="#E6EAF0"></line>`;
    }).join("");
    const labels = rows.map((row, idx) => {
      const angle = -Math.PI / 2 + idx * 2 * Math.PI / rows.length;
      return `<text x="${cx + Math.cos(angle) * (radius + 34)}" y="${cy + Math.sin(angle) * (radius + 24)}" text-anchor="middle">${escapeHtml(row.dimension)}</text>`;
    }).join("");
    $("dimension-context").textContent = selected
      ? `${selected.combo} · ${selected.harnessLabel} · paper Figure 7 ${selected.sourceLevel === "model" ? "model-level" : "overall fallback"} values · score ${fmtScore(selected.primaryScore)}`
      : "Overall paper Figure 7 values";
    $("dimension-radar").innerHTML = `
      ${grid}${spokes}
      <polygon points="${points.map(([x, y]) => `${x},${y}`).join(" ")}" fill="rgba(46,156,154,.22)" stroke="#2E9C9A" stroke-width="3"></polygon>
      ${points.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4" fill="#1F6F78"></circle>`).join("")}
      ${labels}
    `;
    $("dimension-bars").innerHTML = rows
      .map((row) => `
        <div class="dim-row">
          <span>${escapeHtml(row.dimension)}</span>
          <div class="dim-track"><i style="width:${Number(row.value || 0) * 100}%"></i></div>
          <strong>${fmtScore(row.value)}</strong>
        </div>
      `)
      .join("");
  }

  function renderClasses() {
    $("class-grid").innerHTML = data.taskClasses
      .map((row) => `
        <article class="class-card">
          <div class="class-title">
            <h3>${escapeHtml(row.label)}</h3>
            <div class="class-score">${fmtScore(row.primaryScore)}</div>
          </div>
          <div class="class-meta">
            <span class="tag">${fmtCount(row.taskCount)} tasks</span>
            <span class="tag">Winner: ${escapeHtml(row.winner || "-")}</span>
            <span class="tag">${fmtCount(row.failedN)} failures</span>
          </div>
          <div class="mini-list">
            ${row.hardest.map((task) => `<span>${escapeHtml(task.subclassName || task.taskId)} · ${fmtScore(task.primaryScore)}</span>`).join("")}
          </div>
        </article>
      `)
      .join("");
  }

  function renderTaskList(targetId, rows) {
    $(targetId).innerHTML = rows
      .map((task) => `
        <div class="task-row">
          <div>
            <strong>${escapeHtml(task.subclassName || task.taskId)}</strong>
            <span>${escapeHtml(task.classLabel)} · best ${escapeHtml(task.bestCombo || "-")}</span>
          </div>
          <div class="score">${fmtScore(task.primaryScore)}</div>
        </div>
      `)
      .join("");
  }

  function renderMiniBoard(targetId, rows, valueKey, formatter) {
    $(targetId).innerHTML = rows
      .slice(0, 6)
      .map((row, idx) => `
        <div class="mini-board-row">
          <span class="rank">${idx + 1}</span>
          <div>
            <strong>${escapeHtml(row.combo)}</strong>
            <span>${escapeHtml(row.harnessLabel)} · score ${fmtScore(row.primaryScore)}</span>
          </div>
          <b>${formatter(row[valueKey])}</b>
        </div>
      `)
      .join("");
  }

  function renderFunnel() {
    const stages = data.funnel?.stages || [];
    const max = Math.max(...stages.map((stage) => Number(stage.count || 0)), 1);
    $("funnel-view").innerHTML = stages
      .map((stage, idx) => `
        <div class="funnel-step" style="width:${Math.max(32, (Number(stage.count || 0) / max) * 100)}%">
          <span>${idx + 1}. ${escapeHtml(stage.stage)}</span>
          <strong>${fmtCount(stage.count)}</strong>
          <em>${escapeHtml(stage.status || stage.stage_type || "")}</em>
        </div>
      `)
      .join("");
  }

  function renderArtifactInsights() {
    const rows = data.artifactInsights?.artifactOverall || [];
    const models = data.artifactInsights?.models || [];
    const artifacts = data.artifactInsights?.columns || [];
    const byKey = Object.fromEntries(rows.map((row) => [`${row.model}|${row.artifact_type_bucket}`, row]));
    $("artifact-insights").innerHTML = `
      <div class="artifact-heatmap" style="--cols:${artifacts.length}">
        <div class="artifact-head">Model</div>
        ${artifacts.map((artifact) => `<div class="artifact-head">${escapeHtml(artifact)}</div>`).join("")}
        ${models.map((model) => `
          <div class="artifact-model">${escapeHtml(model)}</div>
          ${artifacts.map((artifact) => {
            const row = byKey[`${model}|${artifact}`];
            const value = Number(row?.score || 0);
            return `<div class="artifact-cell" style="background:${heatColor(value, 0, 0.75)}">${value ? fmtScore(value) : "-"}</div>`;
          }).join("")}
        `).join("")}
      </div>
    `;
  }

  function renderCases() {
    $("case-tabs").innerHTML = data.cases
      .map((caseItem) => `
        <button class="case-tab${caseItem.key === state.caseKey ? " active" : ""}" data-case="${escapeHtml(caseItem.key)}">
          ${escapeHtml(caseItem.title)}
        </button>
      `)
      .join("");

    const selected = data.cases.find((caseItem) => caseItem.key === state.caseKey) || data.cases[0];
    if (!selected) {
      $("case-panel").innerHTML = "";
      return;
    }
    const media = selected.image
      ? `<div class="case-image"><img src="${escapeHtml(selected.image)}" alt="${escapeHtml(selected.title)} screenshot"></div>`
      : `<div class="case-image empty-asset">Asset not found in copied paper bundle</div>`;
    $("case-panel").innerHTML = `
      <div class="case-copy">
        <div class="tag">${escapeHtml(selected.taskId)}</div>
        <h3>${escapeHtml(selected.title)}</h3>
        <p><strong>Model:</strong> ${escapeHtml(selected.model)}</p>
        <p><strong>Artifact:</strong> ${escapeHtml(selected.artifact)}</p>
        <p>${escapeHtml(selected.lesson)}</p>
      </div>
      ${media}
    `;
  }

  function bindEvents() {
    $("harness-filter").addEventListener("change", (event) => {
      state.harness = event.target.value;
      renderLeaderboard();
    });
    $("rank-metric").addEventListener("change", (event) => {
      state.metric = event.target.value;
      renderLeaderboard();
    });
    $("dimension-select").addEventListener("change", (event) => {
      state.dimensionCombo = event.target.value;
      renderRadar();
    });
    $("case-tabs").addEventListener("click", (event) => {
      const button = event.target.closest("[data-case]");
      if (!button) return;
      state.caseKey = button.dataset.case;
      renderCases();
    });
    $("menu-toggle").addEventListener("click", () => {
      const links = $("nav-links");
      const open = links.classList.toggle("open");
      $("menu-toggle").setAttribute("aria-expanded", String(open));
    });
    bindScatterTooltip("score-cost-scatter");
    bindScatterTooltip("score-runtime-scatter");
  }

  function renderAll() {
    renderHero();
    renderSummary();
    renderControls();
    renderPodium();
    renderLeaderboard();
    renderScoreBars();
    renderScatter();
    renderHarnessHeatmap();
    renderDistribution();
    renderDimensionControls();
    renderRadar();
    renderClasses();
    renderTaskList("hardest-list", data.taskExtremes.hardest);
    renderTaskList("variance-list", data.taskExtremes.highestVariance);
    renderMiniBoard("efficiency-board", data.derivedBoards.efficiency, "scorePerRmb", (v) => Number(v || 0).toFixed(4));
    renderMiniBoard("reliability-board", data.derivedBoards.reliability, "reliabilityIndex", fmtScore);
    renderFunnel();
    renderArtifactInsights();
    renderCases();
    bindEvents();
  }

  renderAll();
})();
