window.ECB_LEADERBOARD_DATA = {
  "meta": {
    "generated_at": "2026-06-07T16:27:50",
    "board_id": "hard120_29combo_current",
    "source": "public release leaderboard data",
    "notes": [
      "This dataset is materialized from outputs/report_data and contains no raw model responses or artifacts."
    ],
    "score_policy": "primary_attr_fail0: Sonnet text judge for text tasks; Sonnet visual judge for visual tasks; attributable failures count as zero; sandbox infra failures are excluded.",
    "cost_policy": "total_cost_rmb = agent run cost + official primary judge costs only (Sonnet text and selected Sonnet visual when needed); non-primary ablation judges are excluded.",
    "site_generated_at": "2026-06-22T19:20:48",
    "source_tiers": {
      "leaderboard": "release_bundle",
      "task_matrix": "release_bundle",
      "fig2_funnel": "release_bundle",
      "fig6_artifact_type_heatmap": "release_bundle",
      "fig7_dimension_profile_heatmap": "release_bundle",
      "fig3_benchmark_statistics": "release_bundle"
    },
    "lookup_policy": [
      "release_bundle: curated benchmark data bundled for the public leaderboard",
      "report_data: normalized benchmark analysis tables",
      "raw_run: original run evidence used only when normalized data is unavailable"
    ]
  },
  "summary": {
    "taskCount": 120,
    "comboCount": 29,
    "harnessCount": 5,
    "taskClassCount": 7,
    "topCombo": "codex/gpt-5.5",
    "topScore": 0.6632416666666667,
    "topCompletion": 1.0,
    "bestCostCombo": "deepagents/gpt-4.1-mini",
    "bestCostPerCompleted": 0.15949499152542373
  },
  "combos": [
    {
      "combo": "codex/gpt-5.5",
      "harness": "codex",
      "harnessLabel": "Codex",
      "model": "gpt-5.5",
      "planned": 120,
      "completed": 120,
      "failed": 0,
      "completionRate": 1.0,
      "primaryScore": 0.6632416666666667,
      "completedScore": 0.6744830508474577,
      "ruleAvg": 0.9471064814814815,
      "visualAvg": 0.665377049180328,
      "visualN": 61,
      "textN": 120,
      "missingN": 2,
      "attributableFail0N": 0,
      "sandboxExcludedN": 0,
      "costRmb": 383.685066232,
      "costPerCompleted": 3.1973755519333333,
      "medianSec": 117.24368071556091,
      "avgSec": 138.93895245393117,
      "toolCallAvg": 13.116666666666667,
      "turnAvg": 1.9666666666666666,
      "totalTokens": 69494047,
      "evidenceWarnings": 50,
      "rank": 1
    },
    {
      "combo": "deepagents/sonnet-4.6",
      "harness": "deepagents",
      "harnessLabel": "DeepAgents",
      "model": "sonnet-4.6",
      "planned": 120,
      "completed": 113,
      "failed": 7,
      "completionRate": 0.9416666666666667,
      "primaryScore": 0.6592869565217392,
      "completedScore": 0.6769464285714287,
      "ruleAvg": 0.9351594325045652,
      "visualAvg": 0.6552166666666668,
      "visualN": 60,
      "textN": 113,
      "missingN": 1,
      "attributableFail0N": 2,
      "sandboxExcludedN": 5,
      "costRmb": 311.1637125,
      "costPerCompleted": 2.7536611725663716,
      "medianSec": 220.48266124725342,
      "avgSec": 473.73006571710636,
      "toolCallAvg": 11.823008849557523,
      "turnAvg": 12.823008849557523,
      "totalTokens": 35862423,
      "evidenceWarnings": 39,
      "rank": 2
    },
    {
      "combo": "claudecode/sonnet-4.6",
      "harness": "claudecode",
      "harnessLabel": "Claude Code",
      "model": "sonnet-4.6",
      "planned": 120,
      "completed": 118,
      "failed": 2,
      "completionRate": 0.9833333333333333,
      "primaryScore": 0.6550084745762713,
      "completedScore": 0.6663017241379311,
      "ruleAvg": 0.9260324186171643,
      "visualAvg": 0.6529830508474577,
      "visualN": 59,
      "textN": 118,
      "missingN": 2,
      "attributableFail0N": 0,
      "sandboxExcludedN": 2,
      "costRmb": 326.233095,
      "costPerCompleted": 2.764687245762712,
      "medianSec": 161.76734483242035,
      "avgSec": 275.0150601601197,
      "toolCallAvg": 9.898305084745763,
      "turnAvg": 1.9745762711864407,
      "totalTokens": 38843506,
      "evidenceWarnings": 51,
      "rank": 3
    },
    {
      "combo": "deepagents/gpt-5.5",
      "harness": "deepagents",
      "harnessLabel": "DeepAgents",
      "model": "gpt-5.5",
      "planned": 120,
      "completed": 118,
      "failed": 2,
      "completionRate": 0.9833333333333333,
      "primaryScore": 0.6395593220338984,
      "completedScore": 0.6505862068965519,
      "ruleAvg": 0.9363229755178908,
      "visualAvg": 0.6781666666666667,
      "visualN": 60,
      "textN": 118,
      "missingN": 2,
      "attributableFail0N": 0,
      "sandboxExcludedN": 2,
      "costRmb": 470.62098326,
      "costPerCompleted": 3.9883134174576274,
      "medianSec": 137.54000389575958,
      "avgSec": 201.34946311328372,
      "toolCallAvg": 16.88135593220339,
      "turnAvg": 17.88135593220339,
      "totalTokens": 47225844,
      "evidenceWarnings": 48,
      "rank": 4
    },
    {
      "combo": "hermes/kimi-k2.6",
      "harness": "hermes",
      "harnessLabel": "Hermes",
      "model": "kimi-k2.6",
      "planned": 120,
      "completed": 105,
      "failed": 15,
      "completionRate": 0.875,
      "primaryScore": 0.6354433962264152,
      "completedScore": 0.6476634615384617,
      "ruleAvg": 0.937962962962963,
      "visualAvg": 0.6369600000000001,
      "visualN": 50,
      "textN": 105,
      "missingN": 1,
      "attributableFail0N": 1,
      "sandboxExcludedN": 14,
      "costRmb": 74.5394989,
      "costPerCompleted": 0.7098999895238095,
      "medianSec": 462.30649971961975,
      "avgSec": 842.0059774625869,
      "toolCallAvg": 8.504761904761905,
      "turnAvg": 7.857142857142857,
      "totalTokens": 23195367,
      "evidenceWarnings": 36,
      "rank": 5
    },
    {
      "combo": "claudecode/opus-4.6",
      "harness": "claudecode",
      "harnessLabel": "Claude Code",
      "model": "opus-4.6",
      "planned": 120,
      "completed": 120,
      "failed": 0,
      "completionRate": 1.0,
      "primaryScore": 0.6351333333333334,
      "completedScore": 0.6514188034188035,
      "ruleAvg": 0.9412731481481482,
      "visualAvg": 0.6235245901639346,
      "visualN": 61,
      "textN": 118,
      "missingN": 3,
      "attributableFail0N": 0,
      "sandboxExcludedN": 0,
      "costRmb": 711.0415173600001,
      "costPerCompleted": 5.925345978,
      "medianSec": 214.86611449718475,
      "avgSec": 288.74613988995554,
      "toolCallAvg": 12.258333333333333,
      "turnAvg": 1.9916666666666667,
      "totalTokens": 51819154,
      "evidenceWarnings": 50,
      "rank": 6
    },
    {
      "combo": "hermes/gpt-5.5",
      "harness": "hermes",
      "harnessLabel": "Hermes",
      "model": "gpt-5.5",
      "planned": 120,
      "completed": 119,
      "failed": 1,
      "completionRate": 0.9916666666666667,
      "primaryScore": 0.6248403361344539,
      "completedScore": 0.6759636363636364,
      "ruleAvg": 0.9452614379084967,
      "visualAvg": 0.6527384615384617,
      "visualN": 65,
      "textN": 110,
      "missingN": 9,
      "attributableFail0N": 0,
      "sandboxExcludedN": 1,
      "costRmb": 529.250513112,
      "costPerCompleted": 4.447483303462185,
      "medianSec": 166.9674093723297,
      "avgSec": 208.81092186535105,
      "toolCallAvg": 11.521008403361344,
      "turnAvg": 11.050420168067227,
      "totalTokens": 32238661,
      "evidenceWarnings": 40,
      "rank": 7
    },
    {
      "combo": "deepagents/opus-4.6",
      "harness": "deepagents",
      "harnessLabel": "DeepAgents",
      "model": "opus-4.6",
      "planned": 120,
      "completed": 108,
      "failed": 12,
      "completionRate": 0.9,
      "primaryScore": 0.6247454545454546,
      "completedScore": 0.6483207547169813,
      "ruleAvg": 0.9425080834803057,
      "visualAvg": 0.6028750000000002,
      "visualN": 56,
      "textN": 108,
      "missingN": 2,
      "attributableFail0N": 2,
      "sandboxExcludedN": 10,
      "costRmb": 474.50267704,
      "costPerCompleted": 4.393543305925926,
      "medianSec": 283.09596049785614,
      "avgSec": 488.64075058477897,
      "toolCallAvg": 12.88888888888889,
      "turnAvg": 13.88888888888889,
      "totalTokens": 33696744,
      "evidenceWarnings": 36,
      "rank": 8
    },
    {
      "combo": "openclaw/sonnet-4.6",
      "harness": "openclaw",
      "harnessLabel": "OpenClaw",
      "model": "sonnet-4.6",
      "planned": 120,
      "completed": 114,
      "failed": 6,
      "completionRate": 0.95,
      "primaryScore": 0.6230333333333334,
      "completedScore": 0.6616283185840709,
      "ruleAvg": 0.9144562795878586,
      "visualAvg": 0.6589090909090911,
      "visualN": 55,
      "textN": 114,
      "missingN": 1,
      "attributableFail0N": 6,
      "sandboxExcludedN": 0,
      "costRmb": 312.29028525,
      "costPerCompleted": 2.7393884671052633,
      "medianSec": 209.97187793254852,
      "avgSec": 272.62613009360797,
      "toolCallAvg": 8.5,
      "turnAvg": 9.219298245614034,
      "totalTokens": 37275627,
      "evidenceWarnings": 45,
      "rank": 9
    },
    {
      "combo": "deepagents/kimi-k2.6",
      "harness": "deepagents",
      "harnessLabel": "DeepAgents",
      "model": "kimi-k2.6",
      "planned": 120,
      "completed": 98,
      "failed": 22,
      "completionRate": 0.8166666666666667,
      "primaryScore": 0.6178500000000001,
      "completedScore": 0.636958762886598,
      "ruleAvg": 0.9264820213799805,
      "visualAvg": 0.6150576923076925,
      "visualN": 52,
      "textN": 96,
      "missingN": 1,
      "attributableFail0N": 2,
      "sandboxExcludedN": 20,
      "costRmb": 185.59585520000002,
      "costPerCompleted": 1.8938352571428574,
      "medianSec": 305.91182601451874,
      "avgSec": 681.2393812525029,
      "toolCallAvg": 21.142857142857142,
      "turnAvg": 22.142857142857142,
      "totalTokens": 166801158,
      "evidenceWarnings": 39,
      "rank": 10
    },
    {
      "combo": "openclaw/gpt-5.5",
      "harness": "openclaw",
      "harnessLabel": "OpenClaw",
      "model": "gpt-5.5",
      "planned": 120,
      "completed": 116,
      "failed": 4,
      "completionRate": 0.9666666666666667,
      "primaryScore": 0.6138166666666668,
      "completedScore": 0.6405043478260871,
      "ruleAvg": 0.9423679529282978,
      "visualAvg": 0.6604098360655739,
      "visualN": 61,
      "textN": 116,
      "missingN": 1,
      "attributableFail0N": 4,
      "sandboxExcludedN": 0,
      "costRmb": 461.50215131199997,
      "costPerCompleted": 3.978466821655172,
      "medianSec": 136.7730622291565,
      "avgSec": 172.152513495807,
      "toolCallAvg": 7.931034482758621,
      "turnAvg": 7.724137931034483,
      "totalTokens": 24836206,
      "evidenceWarnings": 37,
      "rank": 11
    },
    {
      "combo": "openclaw/opus-4.6",
      "harness": "openclaw",
      "harnessLabel": "OpenClaw",
      "model": "opus-4.6",
      "planned": 120,
      "completed": 110,
      "failed": 10,
      "completionRate": 0.9166666666666666,
      "primaryScore": 0.6019583333333335,
      "completedScore": 0.6627064220183487,
      "ruleAvg": 0.9441161616161616,
      "visualAvg": 0.6535178571428573,
      "visualN": 56,
      "textN": 110,
      "missingN": 1,
      "attributableFail0N": 10,
      "sandboxExcludedN": 0,
      "costRmb": 504.78353373,
      "costPerCompleted": 4.588941215727273,
      "medianSec": 237.79434549808502,
      "avgSec": 269.9125850092281,
      "toolCallAvg": 9.545454545454545,
      "turnAvg": 9.372727272727273,
      "totalTokens": 36659024,
      "evidenceWarnings": 44,
      "rank": 12
    },
    {
      "combo": "hermes/MiniMax-M3",
      "harness": "hermes",
      "harnessLabel": "Hermes",
      "model": "MiniMax-M3",
      "planned": 120,
      "completed": 108,
      "failed": 12,
      "completionRate": 0.9,
      "primaryScore": 0.5620982142857144,
      "completedScore": 0.5829166666666667,
      "ruleAvg": 0.9339212228101117,
      "visualAvg": 0.41676923076923084,
      "visualN": 52,
      "textN": 108,
      "missingN": 0,
      "attributableFail0N": 4,
      "sandboxExcludedN": 8,
      "costRmb": 72.8587515,
      "costPerCompleted": 0.6746180694444445,
      "medianSec": 476.5036574602127,
      "avgSec": 733.443874573266,
      "toolCallAvg": 12.99074074074074,
      "turnAvg": 11.777777777777779,
      "totalTokens": 40097806,
      "evidenceWarnings": 157,
      "rank": 13
    },
    {
      "combo": "deepagents/MiniMax-M3",
      "harness": "deepagents",
      "harnessLabel": "DeepAgents",
      "model": "MiniMax-M3",
      "planned": 120,
      "completed": 107,
      "failed": 13,
      "completionRate": 0.8916666666666667,
      "primaryScore": 0.551778761061947,
      "completedScore": 0.5827196261682244,
      "ruleAvg": 0.939122533748702,
      "visualAvg": 0.43571153846153854,
      "visualN": 52,
      "textN": 107,
      "missingN": 0,
      "attributableFail0N": 6,
      "sandboxExcludedN": 7,
      "costRmb": 107.99480556,
      "costPerCompleted": 1.009297248224299,
      "medianSec": 353.4601068496704,
      "avgSec": 517.0575462991947,
      "toolCallAvg": 23.317757009345794,
      "turnAvg": 24.317757009345794,
      "totalTokens": 56472537,
      "evidenceWarnings": 134,
      "rank": 14
    },
    {
      "combo": "openclaw/kimi-k2.6",
      "harness": "openclaw",
      "harnessLabel": "OpenClaw",
      "model": "kimi-k2.6",
      "planned": 120,
      "completed": 112,
      "failed": 8,
      "completionRate": 0.9333333333333333,
      "primaryScore": 0.5192583333333335,
      "completedScore": 0.5613603603603605,
      "ruleAvg": 0.8662025226757369,
      "visualAvg": 0.5795306122448981,
      "visualN": 49,
      "textN": 111,
      "missingN": 1,
      "attributableFail0N": 8,
      "sandboxExcludedN": 0,
      "costRmb": 108.21758410000001,
      "costPerCompleted": 0.9662284294642858,
      "medianSec": 289.7165789604187,
      "avgSec": 429.16604862042834,
      "toolCallAvg": 13.875,
      "turnAvg": 13.678571428571429,
      "totalTokens": 46848064,
      "evidenceWarnings": 39,
      "rank": 15
    },
    {
      "combo": "claudecode/haiku-4.5",
      "harness": "claudecode",
      "harnessLabel": "Claude Code",
      "model": "haiku-4.5",
      "planned": 120,
      "completed": 120,
      "failed": 0,
      "completionRate": 1.0,
      "primaryScore": 0.5132833333333334,
      "completedScore": 0.5356000000000002,
      "ruleAvg": 0.9306382275132276,
      "visualAvg": 0.5688474576271187,
      "visualN": 59,
      "textN": 116,
      "missingN": 5,
      "attributableFail0N": 0,
      "sandboxExcludedN": 0,
      "costRmb": 119.594975,
      "costPerCompleted": 0.9966247916666667,
      "medianSec": 82.598623752594,
      "avgSec": 132.79287673036256,
      "toolCallAvg": 7.233333333333333,
      "turnAvg": 1.9916666666666667,
      "totalTokens": 39178780,
      "evidenceWarnings": 52,
      "rank": 16
    },
    {
      "combo": "deepagents/haiku-4.5",
      "harness": "deepagents",
      "harnessLabel": "DeepAgents",
      "model": "haiku-4.5",
      "planned": 120,
      "completed": 118,
      "failed": 2,
      "completionRate": 0.9833333333333333,
      "primaryScore": 0.5066750000000001,
      "completedScore": 0.524146551724138,
      "ruleAvg": 0.9439097390368576,
      "visualAvg": 0.5503174603174604,
      "visualN": 63,
      "textN": 118,
      "missingN": 2,
      "attributableFail0N": 2,
      "sandboxExcludedN": 0,
      "costRmb": 127.4224525,
      "costPerCompleted": 1.0798512923728814,
      "medianSec": 160.13615810871124,
      "avgSec": 286.8777504128925,
      "toolCallAvg": 12.38135593220339,
      "turnAvg": 13.38135593220339,
      "totalTokens": 38883923,
      "evidenceWarnings": 53,
      "rank": 17
    },
    {
      "combo": "hermes/sonnet-4.6",
      "harness": "hermes",
      "harnessLabel": "Hermes",
      "model": "sonnet-4.6",
      "planned": 120,
      "completed": 118,
      "failed": 2,
      "completionRate": 0.9833333333333333,
      "primaryScore": 0.4613529411764707,
      "completedScore": 0.4652627118644069,
      "ruleAvg": 0.7949993274145816,
      "visualAvg": 0.6312500000000001,
      "visualN": 32,
      "textN": 117,
      "missingN": 0,
      "attributableFail0N": 1,
      "sandboxExcludedN": 1,
      "costRmb": 141.6686025,
      "costPerCompleted": 1.200581377118644,
      "medianSec": 341.5551677942276,
      "avgSec": 460.42196666790267,
      "toolCallAvg": 5.627118644067797,
      "turnAvg": 5.9576271186440675,
      "totalTokens": 17082258,
      "evidenceWarnings": 21,
      "rank": 18
    },
    {
      "combo": "openclaw/MiniMax-M3",
      "harness": "openclaw",
      "harnessLabel": "OpenClaw",
      "model": "MiniMax-M3",
      "planned": 120,
      "completed": 92,
      "failed": 28,
      "completionRate": 0.7666666666666667,
      "primaryScore": 0.44706194690265494,
      "completedScore": 0.549108695652174,
      "ruleAvg": 0.9246549344375431,
      "visualAvg": 0.43290476190476196,
      "visualN": 42,
      "textN": 92,
      "missingN": 0,
      "attributableFail0N": 21,
      "sandboxExcludedN": 7,
      "costRmb": 64.02446322,
      "costPerCompleted": 0.6959180784782609,
      "medianSec": 467.0343792438507,
      "avgSec": 760.5731139805006,
      "toolCallAvg": 14.66304347826087,
      "turnAvg": 13.597826086956522,
      "totalTokens": 36631781,
      "evidenceWarnings": 136,
      "rank": 19
    },
    {
      "combo": "openclaw/haiku-4.5",
      "harness": "openclaw",
      "harnessLabel": "OpenClaw",
      "model": "haiku-4.5",
      "planned": 120,
      "completed": 111,
      "failed": 9,
      "completionRate": 0.925,
      "primaryScore": 0.43661016949152553,
      "completedScore": 0.4683636363636365,
      "ruleAvg": 0.8515980265980266,
      "visualAvg": 0.5495434782608697,
      "visualN": 46,
      "textN": 111,
      "missingN": 1,
      "attributableFail0N": 7,
      "sandboxExcludedN": 2,
      "costRmb": 111.32080725,
      "costPerCompleted": 1.0028901554054055,
      "medianSec": 148.3782000541687,
      "avgSec": 292.3225077508806,
      "toolCallAvg": 8.00900900900901,
      "turnAvg": 8.63963963963964,
      "totalTokens": 37487845,
      "evidenceWarnings": 36,
      "rank": 20
    },
    {
      "combo": "hermes/opus-4.6",
      "harness": "hermes",
      "harnessLabel": "Hermes",
      "model": "opus-4.6",
      "planned": 120,
      "completed": 118,
      "failed": 2,
      "completionRate": 0.9833333333333333,
      "primaryScore": 0.4326440677966103,
      "completedScore": 0.4439304347826088,
      "ruleAvg": 0.7920937584073177,
      "visualAvg": 0.6627428571428573,
      "visualN": 35,
      "textN": 115,
      "missingN": 3,
      "attributableFail0N": 0,
      "sandboxExcludedN": 2,
      "costRmb": 378.84127561,
      "costPerCompleted": 3.2105192848305086,
      "medianSec": 272.3082025051117,
      "avgSec": 366.1287659891581,
      "toolCallAvg": 9.067796610169491,
      "turnAvg": 8.5,
      "totalTokens": 27651180,
      "evidenceWarnings": 22,
      "rank": 21
    },
    {
      "combo": "hermes/haiku-4.5",
      "harness": "hermes",
      "harnessLabel": "Hermes",
      "model": "haiku-4.5",
      "planned": 120,
      "completed": 120,
      "failed": 0,
      "completionRate": 1.0,
      "primaryScore": 0.40480000000000005,
      "completedScore": 0.40480000000000005,
      "ruleAvg": 0.8129662698412699,
      "visualAvg": 0.5720000000000001,
      "visualN": 43,
      "textN": 120,
      "missingN": 0,
      "attributableFail0N": 0,
      "sandboxExcludedN": 0,
      "costRmb": 103.2364125,
      "costPerCompleted": 0.8603034375,
      "medianSec": 145.32469582557678,
      "avgSec": 175.82761585911115,
      "toolCallAvg": 9.225,
      "turnAvg": 9.675,
      "totalTokens": 33479673,
      "evidenceWarnings": 28,
      "rank": 22
    },
    {
      "combo": "hermes/gpt-4.1-mini",
      "harness": "hermes",
      "harnessLabel": "Hermes",
      "model": "gpt-4.1-mini",
      "planned": 120,
      "completed": 120,
      "failed": 0,
      "completionRate": 1.0,
      "primaryScore": 0.28585000000000005,
      "completedScore": 0.29069491525423735,
      "ruleAvg": 0.7982969576719577,
      "visualAvg": 0.43368750000000006,
      "visualN": 32,
      "textN": 120,
      "missingN": 2,
      "attributableFail0N": 0,
      "sandboxExcludedN": 0,
      "costRmb": 28.6482135,
      "costPerCompleted": 0.2387351125,
      "medianSec": 66.36361956596375,
      "avgSec": 99.47463997205098,
      "toolCallAvg": 6.558333333333334,
      "turnAvg": 6.983333333333333,
      "totalTokens": 18732320,
      "evidenceWarnings": 36,
      "rank": 23
    },
    {
      "combo": "hermes/qwen3-235b-a22b",
      "harness": "hermes",
      "harnessLabel": "Hermes",
      "model": "qwen3-235b-a22b",
      "planned": 120,
      "completed": 119,
      "failed": 1,
      "completionRate": 0.9916666666666667,
      "primaryScore": 0.27025000000000005,
      "completedScore": 0.27483050847457635,
      "ruleAvg": 0.8650293450713619,
      "visualAvg": 0.35855000000000004,
      "visualN": 40,
      "textN": 119,
      "missingN": 1,
      "attributableFail0N": 1,
      "sandboxExcludedN": 0,
      "costRmb": 25.653421780000002,
      "costPerCompleted": 0.2155749729411765,
      "medianSec": 162.2273554801941,
      "avgSec": 219.56102950432722,
      "toolCallAvg": 4.436974789915967,
      "turnAvg": 5.445378151260504,
      "totalTokens": 13006596,
      "evidenceWarnings": 42,
      "rank": 24
    },
    {
      "combo": "deepagents/gpt-4.1-mini",
      "harness": "deepagents",
      "harnessLabel": "DeepAgents",
      "model": "gpt-4.1-mini",
      "planned": 120,
      "completed": 118,
      "failed": 2,
      "completionRate": 0.9833333333333333,
      "primaryScore": 0.26442372881355936,
      "completedScore": 0.2666837606837607,
      "ruleAvg": 0.7513754371805219,
      "visualAvg": 0.4789000000000001,
      "visualN": 30,
      "textN": 117,
      "missingN": 1,
      "attributableFail0N": 0,
      "sandboxExcludedN": 2,
      "costRmb": 18.820409,
      "costPerCompleted": 0.15949499152542373,
      "medianSec": 65.59104585647583,
      "avgSec": 95.95215282601825,
      "toolCallAvg": 11.330508474576272,
      "turnAvg": 12.330508474576272,
      "totalTokens": 27491565,
      "evidenceWarnings": 29,
      "rank": 25
    },
    {
      "combo": "codex/gpt-4.1-mini",
      "harness": "codex",
      "harnessLabel": "Codex",
      "model": "gpt-4.1-mini",
      "planned": 120,
      "completed": 120,
      "failed": 0,
      "completionRate": 1.0,
      "primaryScore": 0.2623916666666667,
      "completedScore": 0.26459663865546224,
      "ruleAvg": 0.7706646825396825,
      "visualAvg": 0.43006666666666676,
      "visualN": 30,
      "textN": 120,
      "missingN": 1,
      "attributableFail0N": 0,
      "sandboxExcludedN": 0,
      "costRmb": 31.5051845,
      "costPerCompleted": 0.26254320416666665,
      "medianSec": 45.58135521411896,
      "avgSec": 60.51360693176587,
      "toolCallAvg": 6.475,
      "turnAvg": 1.9,
      "totalTokens": 17102500,
      "evidenceWarnings": 54,
      "rank": 26
    },
    {
      "combo": "deepagents/qwen3-235b-a22b",
      "harness": "deepagents",
      "harnessLabel": "DeepAgents",
      "model": "qwen3-235b-a22b",
      "planned": 120,
      "completed": 111,
      "failed": 9,
      "completionRate": 0.925,
      "primaryScore": 0.2585178571428572,
      "completedScore": 0.26321818181818185,
      "ruleAvg": 0.876923351923352,
      "visualAvg": 0.3264583333333334,
      "visualN": 48,
      "textN": 111,
      "missingN": 1,
      "attributableFail0N": 1,
      "sandboxExcludedN": 8,
      "costRmb": 22.490760960000003,
      "costPerCompleted": 0.20261946810810813,
      "medianSec": 136.649507522583,
      "avgSec": 335.4801481478923,
      "toolCallAvg": 7.126126126126126,
      "turnAvg": 8.126126126126126,
      "totalTokens": 10568533,
      "evidenceWarnings": 50,
      "rank": 27
    },
    {
      "combo": "openclaw/gpt-4.1-mini",
      "harness": "openclaw",
      "harnessLabel": "OpenClaw",
      "model": "gpt-4.1-mini",
      "planned": 120,
      "completed": 113,
      "failed": 7,
      "completionRate": 0.9416666666666667,
      "primaryScore": 0.25625000000000003,
      "completedScore": 0.2745535714285715,
      "ruleAvg": 0.7426780446691952,
      "visualAvg": 0.5076500000000002,
      "visualN": 20,
      "textN": 113,
      "missingN": 1,
      "attributableFail0N": 7,
      "sandboxExcludedN": 0,
      "costRmb": 24.0574315,
      "costPerCompleted": 0.21289762389380532,
      "medianSec": 55.73344135284424,
      "avgSec": 66.10636717872282,
      "toolCallAvg": 3.106194690265487,
      "turnAvg": 3.743362831858407,
      "totalTokens": 15507070,
      "evidenceWarnings": 19,
      "rank": 28
    },
    {
      "combo": "openclaw/qwen3-235b-a22b",
      "harness": "openclaw",
      "harnessLabel": "OpenClaw",
      "model": "qwen3-235b-a22b",
      "planned": 120,
      "completed": 97,
      "failed": 23,
      "completionRate": 0.8083333333333333,
      "primaryScore": 0.20002500000000004,
      "completedScore": 0.2474536082474227,
      "ruleAvg": 0.8098019963999346,
      "visualAvg": 0.28172413793103457,
      "visualN": 29,
      "textN": 97,
      "missingN": 0,
      "attributableFail0N": 23,
      "sandboxExcludedN": 0,
      "costRmb": 21.26311334,
      "costPerCompleted": 0.21920735402061856,
      "medianSec": 120.01799988746643,
      "avgSec": 159.76701109679703,
      "toolCallAvg": 3.9690721649484537,
      "turnAvg": 4.896907216494846,
      "totalTokens": 11349865,
      "evidenceWarnings": 31,
      "rank": 29
    }
  ],
  "taskClasses": [
    {
      "id": "technical_system_tooling",
      "label": "Technical Tooling",
      "taskCount": 18,
      "primaryScore": 0.6518888888888889,
      "failedN": 17,
      "sandboxExcludedN": 8,
      "winner": "claudecode/opus-4.6",
      "winnerScore": 0.8374444444444444,
      "hardest": [
        {
          "taskId": "fb-289338654239809536_i0002",
          "subclassName": "Skill installation and configuration",
          "businessTask": "",
          "primaryScore": 0.60975,
          "taskCount": 4,
          "bestCombo": "hermes/gpt-5.5",
          "bestScore": 0.865
        },
        {
          "taskId": "fb-293376036228354048_i0026",
          "subclassName": "Technical documentation and code analysis",
          "businessTask": "",
          "primaryScore": 0.6118,
          "taskCount": 5,
          "bestCombo": "deepagents/kimi-k2.6",
          "bestScore": 0.8856666666666667
        },
        {
          "taskId": "fb-301240450562486272_i0020",
          "subclassName": "Technical Q&A",
          "businessTask": "",
          "primaryScore": 0.655,
          "taskCount": 7,
          "bestCombo": "deepagents/opus-4.6",
          "bestScore": 0.8995000000000001
        }
      ]
    },
    {
      "id": "project_operations_sales_customer",
      "label": "Project / Sales / Customer Ops",
      "taskCount": 12,
      "primaryScore": 0.5408333333333334,
      "failedN": 16,
      "sandboxExcludedN": 6,
      "winner": "deepagents/MiniMax-M3",
      "winnerScore": 0.7852727272727272,
      "hardest": [
        {
          "taskId": "fb-292295508976750592_i0091",
          "subclassName": "Release planning and communication",
          "businessTask": "",
          "primaryScore": 0.466,
          "taskCount": 1,
          "bestCombo": "deepagents/MiniMax-M3",
          "bestScore": 0.774
        },
        {
          "taskId": "fb-295028533229637632_i0030",
          "subclassName": "Project planning and execution",
          "businessTask": "",
          "primaryScore": 0.46625,
          "taskCount": 4,
          "bestCombo": "deepagents/MiniMax-M3",
          "bestScore": 0.8553333333333333
        },
        {
          "taskId": "fb-293915333729767424_i0159",
          "subclassName": "Reception planning and task optimization",
          "businessTask": "",
          "primaryScore": 0.586,
          "taskCount": 5,
          "bestCombo": "openclaw/opus-4.6",
          "bestScore": 0.7882
        }
      ]
    },
    {
      "id": "product_design_digital_delivery",
      "label": "Product & Digital Delivery",
      "taskCount": 31,
      "primaryScore": 0.5358709677419355,
      "failedN": 61,
      "sandboxExcludedN": 26,
      "winner": "deepagents/gpt-5.5",
      "winnerScore": 0.7541290322580645,
      "hardest": [
        {
          "taskId": "fb-298403499081736192_i0043",
          "subclassName": "Slide optimization and conversion",
          "businessTask": "",
          "primaryScore": 0.3425,
          "taskCount": 2,
          "bestCombo": "deepagents/MiniMax-M3",
          "bestScore": 0.71
        },
        {
          "taskId": "fb-293376036228354048_i0036",
          "subclassName": "Project initiation and documentation",
          "businessTask": "",
          "primaryScore": 0.4025,
          "taskCount": 2,
          "bestCombo": "deepagents/kimi-k2.6",
          "bestScore": 0.883
        },
        {
          "taskId": "fb-300554893528223744_i0012",
          "subclassName": "Product design proposal refinement",
          "businessTask": "",
          "primaryScore": 0.461,
          "taskCount": 3,
          "bestCombo": "deepagents/gpt-5.5",
          "bestScore": 0.7853333333333333
        }
      ]
    },
    {
      "id": "knowledge_document_collaboration",
      "label": "Knowledge & Document Work",
      "taskCount": 15,
      "primaryScore": 0.4736,
      "failedN": 25,
      "sandboxExcludedN": 7,
      "winner": "hermes/gpt-5.5",
      "winnerScore": 0.7339230769230769,
      "hardest": [
        {
          "taskId": "fb-290482347168522240_i0068",
          "subclassName": "Document revision and writing",
          "businessTask": "",
          "primaryScore": 0.275,
          "taskCount": 1,
          "bestCombo": "openclaw/haiku-4.5",
          "bestScore": 0.889
        },
        {
          "taskId": "fb-295815988681711616_i0046",
          "subclassName": "Weekly report and OKR documentation",
          "businessTask": "",
          "primaryScore": 0.335,
          "taskCount": 1,
          "bestCombo": "deepagents/gpt-5.5",
          "bestScore": 0.788
        },
        {
          "taskId": "fb-297293965693100032_i0009",
          "subclassName": "Skill documentation management",
          "businessTask": "",
          "primaryScore": 0.421,
          "taskCount": 1,
          "bestCombo": "hermes/gpt-5.5",
          "bestScore": 0.887
        }
      ]
    },
    {
      "id": "data_business_analysis",
      "label": "Data & Business Analysis",
      "taskCount": 16,
      "primaryScore": 0.455375,
      "failedN": 41,
      "sandboxExcludedN": 13,
      "winner": "hermes/gpt-5.5",
      "winnerScore": 0.648125,
      "hardest": [
        {
          "taskId": "fb-301923355471237120_i0035",
          "subclassName": "Accounting entry processing",
          "businessTask": "",
          "primaryScore": 0.37324999999999997,
          "taskCount": 4,
          "bestCombo": "hermes/kimi-k2.6",
          "bestScore": 0.812
        },
        {
          "taskId": "fb-298312955521409024_i0001",
          "subclassName": "Financial and data analysis",
          "businessTask": "",
          "primaryScore": 0.383,
          "taskCount": 3,
          "bestCombo": "deepagents/sonnet-4.6",
          "bestScore": 0.6446666666666667
        },
        {
          "taskId": "fb-295473273280442368_i0022",
          "subclassName": "Spreadsheet cleanup and conversion",
          "businessTask": "",
          "primaryScore": 0.5015000000000001,
          "taskCount": 2,
          "bestCombo": "deepagents/haiku-4.5",
          "bestScore": 0.792
        }
      ]
    },
    {
      "id": "management_reporting_org_support",
      "label": "Management Reporting",
      "taskCount": 14,
      "primaryScore": 0.4463571428571429,
      "failedN": 41,
      "sandboxExcludedN": 17,
      "winner": "openclaw/gpt-5.5",
      "winnerScore": 0.6881428571428572,
      "hardest": [
        {
          "taskId": "fb-279635655296811008_i0547",
          "subclassName": "OKR management and review",
          "businessTask": "",
          "primaryScore": 0.396,
          "taskCount": 1,
          "bestCombo": "openclaw/MiniMax-M3",
          "bestScore": 0.61
        },
        {
          "taskId": "fb-298403499081736192_i0051",
          "subclassName": "Presentation document creation",
          "businessTask": "",
          "primaryScore": 0.396125,
          "taskCount": 8,
          "bestCombo": "openclaw/gpt-5.5",
          "bestScore": 0.67775
        },
        {
          "taskId": "fb-293602324708892672_i0020",
          "subclassName": "Executive report writing",
          "businessTask": "",
          "primaryScore": 0.43,
          "taskCount": 1,
          "bestCombo": "deepagents/gpt-5.5",
          "bestScore": 0.814
        }
      ]
    },
    {
      "id": "research_intelligence_decision",
      "label": "Research & Decision Support",
      "taskCount": 14,
      "primaryScore": 0.4163571428571428,
      "failedN": 25,
      "sandboxExcludedN": 17,
      "winner": "hermes/gpt-5.5",
      "winnerScore": 0.6374615384615384,
      "hardest": [
        {
          "taskId": "fb-296844334848815104_i0010",
          "subclassName": "Benchmark evaluation and analysis",
          "businessTask": "",
          "primaryScore": 0.297,
          "taskCount": 1,
          "bestCombo": "hermes/sonnet-4.6",
          "bestScore": 0.575
        },
        {
          "taskId": "fb-296127628337803264_i0057",
          "subclassName": "Analytical report writing",
          "businessTask": "",
          "primaryScore": 0.31,
          "taskCount": 1,
          "bestCombo": "codex/gpt-5.5",
          "bestScore": 0.717
        },
        {
          "taskId": "fb-295473273280442368_i0011",
          "subclassName": "Business analysis and evaluation",
          "businessTask": "",
          "primaryScore": 0.317,
          "taskCount": 1,
          "bestCombo": "deepagents/gpt-5.5",
          "bestScore": 0.565
        }
      ]
    }
  ],
  "taskExtremes": {
    "hardest": [
      {
        "taskId": "fb-295028533229637632_i0030",
        "classId": "project_operations_sales_customer",
        "classLabel": "Project / Sales / Customer Ops",
        "subclassName": "Project planning and execution",
        "businessTask": "",
        "primaryScore": 0.227,
        "validScore": 0.256,
        "scoreStd": 0.241,
        "failedN": 6,
        "sandboxExcludedN": 3,
        "bestCombo": "deepagents/sonnet-4.6",
        "bestScore": 0.655,
        "worstCombo": "deepagents/haiku-4.5",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-301923355471237120_i0035",
        "classId": "data_business_analysis",
        "classLabel": "Data & Business Analysis",
        "subclassName": "Accounting entry processing",
        "businessTask": "",
        "primaryScore": 0.227,
        "validScore": 0.236,
        "scoreStd": 0.127,
        "failedN": 4,
        "sandboxExcludedN": 3,
        "bestCombo": "hermes/gpt-5.5",
        "bestScore": 0.525,
        "worstCombo": "openclaw/qwen3-235b-a22b",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-298403499081736192_i0051",
        "classId": "management_reporting_org_support",
        "classLabel": "Management Reporting",
        "subclassName": "Presentation document creation",
        "businessTask": "",
        "primaryScore": 0.236,
        "validScore": 0.257,
        "scoreStd": 0.175,
        "failedN": 6,
        "sandboxExcludedN": 4,
        "bestCombo": "deepagents/gpt-5.5",
        "bestScore": 0.6,
        "worstCombo": "openclaw/MiniMax-M3",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-305917114189914112_i0001",
        "classId": "management_reporting_org_support",
        "classLabel": "Management Reporting",
        "subclassName": "Presentation document creation",
        "businessTask": "",
        "primaryScore": 0.248,
        "validScore": 0.279,
        "scoreStd": 0.243,
        "failedN": 5,
        "sandboxExcludedN": 2,
        "bestCombo": "openclaw/gpt-5.5",
        "bestScore": 0.807,
        "worstCombo": "deepagents/MiniMax-M3",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-293915333729767424_i0097",
        "classId": "management_reporting_org_support",
        "classLabel": "Management Reporting",
        "subclassName": "Presentation document creation",
        "businessTask": "",
        "primaryScore": 0.259,
        "validScore": 0.306,
        "scoreStd": 0.247,
        "failedN": 7,
        "sandboxExcludedN": 3,
        "bestCombo": "deepagents/gpt-5.5",
        "bestScore": 0.724,
        "worstCombo": "codex/gpt-4.1-mini",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-293376036228354048_i0036",
        "classId": "product_design_digital_delivery",
        "classLabel": "Product & Digital Delivery",
        "subclassName": "Project initiation and documentation",
        "businessTask": "",
        "primaryScore": 0.268,
        "validScore": 0.288,
        "scoreStd": 0.234,
        "failedN": 3,
        "sandboxExcludedN": 1,
        "bestCombo": "deepagents/sonnet-4.6",
        "bestScore": 0.648,
        "worstCombo": "codex/gpt-4.1-mini",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-290482347168522240_i0068",
        "classId": "knowledge_document_collaboration",
        "classLabel": "Knowledge & Document Work",
        "subclassName": "Document revision and writing",
        "businessTask": "",
        "primaryScore": 0.275,
        "validScore": 0.275,
        "scoreStd": 0.174,
        "failedN": 0,
        "sandboxExcludedN": 0,
        "bestCombo": "openclaw/haiku-4.5",
        "bestScore": 0.889,
        "worstCombo": "deepagents/gpt-4.1-mini",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-298403499081736192_i0043",
        "classId": "product_design_digital_delivery",
        "classLabel": "Product & Digital Delivery",
        "subclassName": "Slide optimization and conversion",
        "businessTask": "",
        "primaryScore": 0.287,
        "validScore": 0.359,
        "scoreStd": 0.304,
        "failedN": 9,
        "sandboxExcludedN": 4,
        "bestCombo": "deepagents/MiniMax-M3",
        "bestScore": 0.728,
        "worstCombo": "codex/gpt-4.1-mini",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-296844334848815104_i0010",
        "classId": "research_intelligence_decision",
        "classLabel": "Research & Decision Support",
        "subclassName": "Benchmark evaluation and analysis",
        "businessTask": "",
        "primaryScore": 0.297,
        "validScore": 0.297,
        "scoreStd": 0.168,
        "failedN": 3,
        "sandboxExcludedN": 3,
        "bestCombo": "hermes/sonnet-4.6",
        "bestScore": 0.575,
        "worstCombo": "hermes/opus-4.6",
        "worstScore": 0.01
      },
      {
        "taskId": "fb-298312955521409024_i0001",
        "classId": "data_business_analysis",
        "classLabel": "Data & Business Analysis",
        "subclassName": "Financial and data analysis",
        "businessTask": "",
        "primaryScore": 0.305,
        "validScore": 0.328,
        "scoreStd": 0.18,
        "failedN": 3,
        "sandboxExcludedN": 1,
        "bestCombo": "openclaw/MiniMax-M3",
        "bestScore": 0.535,
        "worstCombo": "openclaw/gpt-5.5",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-296127628337803264_i0057",
        "classId": "research_intelligence_decision",
        "classLabel": "Research & Decision Support",
        "subclassName": "Analytical report writing",
        "businessTask": "",
        "primaryScore": 0.31,
        "validScore": 0.31,
        "scoreStd": 0.167,
        "failedN": 0,
        "sandboxExcludedN": 0,
        "bestCombo": "codex/gpt-5.5",
        "bestScore": 0.717,
        "worstCombo": "deepagents/gpt-4.1-mini",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-295473273280442368_i0011",
        "classId": "research_intelligence_decision",
        "classLabel": "Research & Decision Support",
        "subclassName": "Business analysis and evaluation",
        "businessTask": "",
        "primaryScore": 0.317,
        "validScore": 0.329,
        "scoreStd": 0.164,
        "failedN": 2,
        "sandboxExcludedN": 1,
        "bestCombo": "deepagents/gpt-5.5",
        "bestScore": 0.565,
        "worstCombo": "hermes/MiniMax-M3",
        "worstScore": 0.0
      }
    ],
    "highestVariance": [
      {
        "taskId": "fb-295473273280442368_i0004",
        "classId": "product_design_digital_delivery",
        "classLabel": "Product & Digital Delivery",
        "subclassName": "Project initiation and documentation",
        "businessTask": "",
        "primaryScore": 0.537,
        "validScore": 0.557,
        "scoreStd": 0.383,
        "failedN": 2,
        "sandboxExcludedN": 1,
        "bestCombo": "deepagents/gpt-5.5",
        "bestScore": 0.911,
        "worstCombo": "hermes/opus-4.6",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-294359610536517632_i0007",
        "classId": "technical_system_tooling",
        "classLabel": "Technical Tooling",
        "subclassName": "Technical Q&A",
        "businessTask": "",
        "primaryScore": 0.642,
        "validScore": 0.665,
        "scoreStd": 0.376,
        "failedN": 2,
        "sandboxExcludedN": 1,
        "bestCombo": "deepagents/sonnet-4.6",
        "bestScore": 0.962,
        "worstCombo": "hermes/gpt-4.1-mini",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-292138297013084160_i0043",
        "classId": "management_reporting_org_support",
        "classLabel": "Management Reporting",
        "subclassName": "Interview evaluation generation",
        "businessTask": "",
        "primaryScore": 0.64,
        "validScore": 0.714,
        "scoreStd": 0.374,
        "failedN": 3,
        "sandboxExcludedN": 0,
        "bestCombo": "openclaw/kimi-k2.6",
        "bestScore": 0.929,
        "worstCombo": "codex/gpt-4.1-mini",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-295193743580024832_i0010",
        "classId": "product_design_digital_delivery",
        "classLabel": "Product & Digital Delivery",
        "subclassName": "Frontend page generation",
        "businessTask": "",
        "primaryScore": 0.455,
        "validScore": 0.471,
        "scoreStd": 0.371,
        "failedN": 1,
        "sandboxExcludedN": 0,
        "bestCombo": "codex/gpt-5.5",
        "bestScore": 0.882,
        "worstCombo": "hermes/opus-4.6",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-292295508976750592_i0001",
        "classId": "management_reporting_org_support",
        "classLabel": "Management Reporting",
        "subclassName": "Presentation document creation",
        "businessTask": "",
        "primaryScore": 0.598,
        "validScore": 0.62,
        "scoreStd": 0.364,
        "failedN": 2,
        "sandboxExcludedN": 1,
        "bestCombo": "deepagents/gpt-5.5",
        "bestScore": 0.92,
        "worstCombo": "deepagents/gpt-4.1-mini",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-296965480151789568_i0023",
        "classId": "data_business_analysis",
        "classLabel": "Data & Business Analysis",
        "subclassName": "Data organization and validation",
        "businessTask": "",
        "primaryScore": 0.639,
        "validScore": 0.663,
        "scoreStd": 0.361,
        "failedN": 2,
        "sandboxExcludedN": 1,
        "bestCombo": "deepagents/sonnet-4.6",
        "bestScore": 0.915,
        "worstCombo": "codex/gpt-4.1-mini",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-301923355471237120_i0021",
        "classId": "data_business_analysis",
        "classLabel": "Data & Business Analysis",
        "subclassName": "Accounting entry processing",
        "businessTask": "",
        "primaryScore": 0.491,
        "validScore": 0.573,
        "scoreStd": 0.36,
        "failedN": 5,
        "sandboxExcludedN": 1,
        "bestCombo": "hermes/opus-4.6",
        "bestScore": 0.889,
        "worstCombo": "deepagents/sonnet-4.6",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-297293965693100032_i0009",
        "classId": "knowledge_document_collaboration",
        "classLabel": "Knowledge & Document Work",
        "subclassName": "Skill documentation management",
        "businessTask": "",
        "primaryScore": 0.421,
        "validScore": 0.494,
        "scoreStd": 0.348,
        "failedN": 6,
        "sandboxExcludedN": 2,
        "bestCombo": "hermes/gpt-5.5",
        "bestScore": 0.887,
        "worstCombo": "codex/gpt-4.1-mini",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-293602324708892672_i0004",
        "classId": "knowledge_document_collaboration",
        "classLabel": "Knowledge & Document Work",
        "subclassName": "Weekly report review",
        "businessTask": "",
        "primaryScore": 0.385,
        "validScore": 0.446,
        "scoreStd": 0.347,
        "failedN": 4,
        "sandboxExcludedN": 0,
        "bestCombo": "hermes/gpt-5.5",
        "bestScore": 0.877,
        "worstCombo": "deepagents/haiku-4.5",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-296965480151789568_i0036",
        "classId": "project_operations_sales_customer",
        "classLabel": "Project / Sales / Customer Ops",
        "subclassName": "Project planning and execution",
        "businessTask": "",
        "primaryScore": 0.582,
        "validScore": 0.582,
        "scoreStd": 0.346,
        "failedN": 0,
        "sandboxExcludedN": 0,
        "bestCombo": "hermes/gpt-5.5",
        "bestScore": 0.894,
        "worstCombo": "hermes/haiku-4.5",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-302441929931546624_i0005",
        "classId": "product_design_digital_delivery",
        "classLabel": "Product & Digital Delivery",
        "subclassName": "Digital deliverable design",
        "businessTask": "",
        "primaryScore": 0.688,
        "validScore": 0.739,
        "scoreStd": 0.344,
        "failedN": 2,
        "sandboxExcludedN": 0,
        "bestCombo": "claudecode/opus-4.6",
        "bestScore": 0.95,
        "worstCombo": "hermes/opus-4.6",
        "worstScore": 0.0
      },
      {
        "taskId": "fb-302357563821903872_i0001",
        "classId": "data_business_analysis",
        "classLabel": "Data & Business Analysis",
        "subclassName": "Data organization and validation",
        "businessTask": "",
        "primaryScore": 0.512,
        "validScore": 0.531,
        "scoreStd": 0.341,
        "failedN": 2,
        "sandboxExcludedN": 1,
        "bestCombo": "claudecode/opus-4.6",
        "bestScore": 0.873,
        "worstCombo": "hermes/opus-4.6",
        "worstScore": 0.0
      }
    ]
  },
  "cases": [
    {
      "key": "event-page",
      "title": "Executive Event Page",
      "taskId": "fb-293915333729767424_i0101",
      "model": "Claude Code / Sonnet 4.6",
      "artifact": "event-preview HTML",
      "lesson": "Strong frontend delivery on an event communication task, with a complete rendered page rather than a text-only response.",
      "image": "assets/cases/fb-293915333729767424_i0101__claudecode__sonnet-4.6__event-preview_html_playwright_fullpage.png"
    },
    {
      "key": "study-tour",
      "title": "AI Executive Study Tour",
      "taskId": "fb-293915333729767424_i0101",
      "model": "OpenClaw / Kimi K2.6",
      "artifact": "study-tour HTML",
      "lesson": "A cross-harness example showing how presentation structure and visual completeness vary for the same enterprise workflow.",
      "image": "assets/cases/fb-293915333729767424_i0101__openclaw__kimi-k2.6__ai_executive_study_tour_preview_html_playwright_fullpage.png"
    },
    {
      "key": "skill-standards",
      "title": "Skill Creation Standards",
      "taskId": "fb-297293965693100032_i0009",
      "model": "Codex / GPT-5.5",
      "artifact": "PDF summary pages",
      "lesson": "Document synthesis cases require faithful extraction, clean structure and publishable formatting.",
      "image": "assets/cases/fb-297293965693100032_i0009__codex__gpt-5.5__skill_creation_standards_summary_page-1.png"
    }
  ],
  "derivedBoards": {
    "efficiency": [
      {
        "evidenceWarnings": 29,
        "primaryScore": 0.26442372881355936,
        "medianSec": 65.59104585647583,
        "reliabilityIndex": 0.9288333333333333,
        "combo": "deepagents/gpt-4.1-mini",
        "costRmb": 18.820409,
        "rank": 25,
        "harnessLabel": "DeepAgents",
        "harness": "deepagents",
        "completionRate": 0.9833333333333333,
        "avgSec": 95.95215282601825,
        "scorePerMinute": 0.16534724090642305,
        "scorePerRmb": 0.014049839661484473,
        "costPerCompleted": 0.15949499152542373,
        "model": "gpt-4.1-mini"
      },
      {
        "evidenceWarnings": 50,
        "primaryScore": 0.2585178571428572,
        "medianSec": 136.649507522583,
        "reliabilityIndex": 0.811,
        "combo": "deepagents/qwen3-235b-a22b",
        "costRmb": 22.490760960000003,
        "rank": 27,
        "harnessLabel": "DeepAgents",
        "harness": "deepagents",
        "completionRate": 0.925,
        "avgSec": 335.4801481478923,
        "scorePerMinute": 0.0462354375190438,
        "scorePerRmb": 0.011494402417180692,
        "costPerCompleted": 0.20261946810810813,
        "model": "qwen3-235b-a22b"
      },
      {
        "evidenceWarnings": 19,
        "primaryScore": 0.25625000000000003,
        "medianSec": 55.73344135284424,
        "reliabilityIndex": 0.8821666666666667,
        "combo": "openclaw/gpt-4.1-mini",
        "costRmb": 24.0574315,
        "rank": 28,
        "harnessLabel": "OpenClaw",
        "harness": "openclaw",
        "completionRate": 0.9416666666666667,
        "avgSec": 66.10636717872282,
        "scorePerMinute": 0.23257971442346392,
        "scorePerRmb": 0.010651594290105327,
        "costPerCompleted": 0.21289762389380532,
        "model": "gpt-4.1-mini"
      },
      {
        "evidenceWarnings": 42,
        "primaryScore": 0.27025000000000005,
        "medianSec": 162.2273554801941,
        "reliabilityIndex": 0.9216666666666666,
        "combo": "hermes/qwen3-235b-a22b",
        "costRmb": 25.653421780000002,
        "rank": 24,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 0.9916666666666667,
        "avgSec": 219.56102950432722,
        "scorePerMinute": 0.07385190366708692,
        "scorePerRmb": 0.0105346570261708,
        "costPerCompleted": 0.2155749729411765,
        "model": "qwen3-235b-a22b"
      },
      {
        "evidenceWarnings": 36,
        "primaryScore": 0.28585000000000005,
        "medianSec": 66.36361956596375,
        "reliabilityIndex": 0.94,
        "combo": "hermes/gpt-4.1-mini",
        "costRmb": 28.6482135,
        "rank": 23,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 1.0,
        "avgSec": 99.47463997205098,
        "scorePerMinute": 0.1724158037145835,
        "scorePerRmb": 0.009977934575222292,
        "costPerCompleted": 0.2387351125,
        "model": "gpt-4.1-mini"
      },
      {
        "evidenceWarnings": 31,
        "primaryScore": 0.20002500000000004,
        "medianSec": 120.01799988746643,
        "reliabilityIndex": 0.6698333333333334,
        "combo": "openclaw/qwen3-235b-a22b",
        "costRmb": 21.26311334,
        "rank": 29,
        "harnessLabel": "OpenClaw",
        "harness": "openclaw",
        "completionRate": 0.8083333333333333,
        "avgSec": 159.76701109679703,
        "scorePerMinute": 0.0751187614865545,
        "scorePerRmb": 0.009407136048309285,
        "costPerCompleted": 0.21920735402061856,
        "model": "qwen3-235b-a22b"
      },
      {
        "evidenceWarnings": 36,
        "primaryScore": 0.6354433962264152,
        "medianSec": 462.30649971961975,
        "reliabilityIndex": 0.758,
        "combo": "hermes/kimi-k2.6",
        "costRmb": 74.5394989,
        "rank": 5,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 0.875,
        "avgSec": 842.0059774625869,
        "scorePerMinute": 0.045280680653219,
        "scorePerRmb": 0.008524921760996909,
        "costPerCompleted": 0.7098999895238095,
        "model": "kimi-k2.6"
      },
      {
        "evidenceWarnings": 54,
        "primaryScore": 0.2623916666666667,
        "medianSec": 45.58135521411896,
        "reliabilityIndex": 0.916,
        "combo": "codex/gpt-4.1-mini",
        "costRmb": 31.5051845,
        "rank": 26,
        "harnessLabel": "Codex",
        "harness": "codex",
        "completionRate": 1.0,
        "avgSec": 60.51360693176587,
        "scorePerMinute": 0.2601646273994559,
        "scorePerRmb": 0.008328523410699807,
        "costPerCompleted": 0.26254320416666665,
        "model": "gpt-4.1-mini"
      }
    ],
    "speed": [
      {
        "evidenceWarnings": 50,
        "primaryScore": 0.6632416666666667,
        "medianSec": 117.24368071556091,
        "reliabilityIndex": 0.919,
        "combo": "codex/gpt-5.5",
        "costRmb": 383.685066232,
        "rank": 1,
        "harnessLabel": "Codex",
        "harness": "codex",
        "completionRate": 1.0,
        "avgSec": 138.93895245393117,
        "scorePerMinute": 0.28641715873879864,
        "scorePerRmb": 0.0017286095421436844,
        "costPerCompleted": 3.1973755519333333,
        "model": "gpt-5.5"
      },
      {
        "evidenceWarnings": 54,
        "primaryScore": 0.2623916666666667,
        "medianSec": 45.58135521411896,
        "reliabilityIndex": 0.916,
        "combo": "codex/gpt-4.1-mini",
        "costRmb": 31.5051845,
        "rank": 26,
        "harnessLabel": "Codex",
        "harness": "codex",
        "completionRate": 1.0,
        "avgSec": 60.51360693176587,
        "scorePerMinute": 0.2601646273994559,
        "scorePerRmb": 0.008328523410699807,
        "costPerCompleted": 0.26254320416666665,
        "model": "gpt-4.1-mini"
      },
      {
        "evidenceWarnings": 19,
        "primaryScore": 0.25625000000000003,
        "medianSec": 55.73344135284424,
        "reliabilityIndex": 0.8821666666666667,
        "combo": "openclaw/gpt-4.1-mini",
        "costRmb": 24.0574315,
        "rank": 28,
        "harnessLabel": "OpenClaw",
        "harness": "openclaw",
        "completionRate": 0.9416666666666667,
        "avgSec": 66.10636717872282,
        "scorePerMinute": 0.23257971442346392,
        "scorePerRmb": 0.010651594290105327,
        "costPerCompleted": 0.21289762389380532,
        "model": "gpt-4.1-mini"
      },
      {
        "evidenceWarnings": 52,
        "primaryScore": 0.5132833333333334,
        "medianSec": 82.598623752594,
        "reliabilityIndex": 0.907,
        "combo": "claudecode/haiku-4.5",
        "costRmb": 119.594975,
        "rank": 16,
        "harnessLabel": "Claude Code",
        "harness": "claudecode",
        "completionRate": 1.0,
        "avgSec": 132.79287673036256,
        "scorePerMinute": 0.2319175603261737,
        "scorePerRmb": 0.004291846988833213,
        "costPerCompleted": 0.9966247916666667,
        "model": "haiku-4.5"
      },
      {
        "evidenceWarnings": 37,
        "primaryScore": 0.6138166666666668,
        "medianSec": 136.7730622291565,
        "reliabilityIndex": 0.8921666666666667,
        "combo": "openclaw/gpt-5.5",
        "costRmb": 461.50215131199997,
        "rank": 11,
        "harnessLabel": "OpenClaw",
        "harness": "openclaw",
        "completionRate": 0.9666666666666667,
        "avgSec": 172.152513495807,
        "scorePerMinute": 0.2139323978031667,
        "scorePerRmb": 0.0013300407482861203,
        "costPerCompleted": 3.978466821655172,
        "model": "gpt-5.5"
      },
      {
        "evidenceWarnings": 48,
        "primaryScore": 0.6395593220338984,
        "medianSec": 137.54000389575958,
        "reliabilityIndex": 0.8973333333333333,
        "combo": "deepagents/gpt-5.5",
        "costRmb": 470.62098326,
        "rank": 4,
        "harnessLabel": "DeepAgents",
        "harness": "deepagents",
        "completionRate": 0.9833333333333333,
        "avgSec": 201.34946311328372,
        "scorePerMinute": 0.1905818805210525,
        "scorePerRmb": 0.0013589689894480683,
        "costPerCompleted": 3.9883134174576274,
        "model": "gpt-5.5"
      },
      {
        "evidenceWarnings": 40,
        "primaryScore": 0.6248403361344539,
        "medianSec": 166.9674093723297,
        "reliabilityIndex": 0.9006666666666667,
        "combo": "hermes/gpt-5.5",
        "costRmb": 529.250513112,
        "rank": 7,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 0.9916666666666667,
        "avgSec": 208.81092186535105,
        "scorePerMinute": 0.1795424292616381,
        "scorePerRmb": 0.001180613567024025,
        "costPerCompleted": 4.447483303462185,
        "model": "gpt-5.5"
      },
      {
        "evidenceWarnings": 36,
        "primaryScore": 0.28585000000000005,
        "medianSec": 66.36361956596375,
        "reliabilityIndex": 0.94,
        "combo": "hermes/gpt-4.1-mini",
        "costRmb": 28.6482135,
        "rank": 23,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 1.0,
        "avgSec": 99.47463997205098,
        "scorePerMinute": 0.1724158037145835,
        "scorePerRmb": 0.009977934575222292,
        "costPerCompleted": 0.2387351125,
        "model": "gpt-4.1-mini"
      }
    ],
    "reliability": [
      {
        "evidenceWarnings": 28,
        "primaryScore": 0.40480000000000005,
        "medianSec": 145.32469582557678,
        "reliabilityIndex": 0.958,
        "combo": "hermes/haiku-4.5",
        "costRmb": 103.2364125,
        "rank": 22,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 1.0,
        "avgSec": 175.82761585911115,
        "scorePerMinute": 0.1381352973554605,
        "scorePerRmb": 0.00392109712258744,
        "costPerCompleted": 0.8603034375,
        "model": "haiku-4.5"
      },
      {
        "evidenceWarnings": 21,
        "primaryScore": 0.4613529411764707,
        "medianSec": 341.5551677942276,
        "reliabilityIndex": 0.9438333333333333,
        "combo": "hermes/sonnet-4.6",
        "costRmb": 141.6686025,
        "rank": 18,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 0.9833333333333333,
        "avgSec": 460.42196666790267,
        "scorePerMinute": 0.0601213201683628,
        "scorePerRmb": 0.003256564496543761,
        "costPerCompleted": 1.200581377118644,
        "model": "sonnet-4.6"
      },
      {
        "evidenceWarnings": 36,
        "primaryScore": 0.28585000000000005,
        "medianSec": 66.36361956596375,
        "reliabilityIndex": 0.94,
        "combo": "hermes/gpt-4.1-mini",
        "costRmb": 28.6482135,
        "rank": 23,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 1.0,
        "avgSec": 99.47463997205098,
        "scorePerMinute": 0.1724158037145835,
        "scorePerRmb": 0.009977934575222292,
        "costPerCompleted": 0.2387351125,
        "model": "gpt-4.1-mini"
      },
      {
        "evidenceWarnings": 22,
        "primaryScore": 0.4326440677966103,
        "medianSec": 272.3082025051117,
        "reliabilityIndex": 0.9333333333333332,
        "combo": "hermes/opus-4.6",
        "costRmb": 378.84127561,
        "rank": 21,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 0.9833333333333333,
        "avgSec": 366.1287659891581,
        "scorePerMinute": 0.07090031289310196,
        "scorePerRmb": 0.0011420193512440757,
        "costPerCompleted": 3.2105192848305086,
        "model": "opus-4.6"
      },
      {
        "evidenceWarnings": 29,
        "primaryScore": 0.26442372881355936,
        "medianSec": 65.59104585647583,
        "reliabilityIndex": 0.9288333333333333,
        "combo": "deepagents/gpt-4.1-mini",
        "costRmb": 18.820409,
        "rank": 25,
        "harnessLabel": "DeepAgents",
        "harness": "deepagents",
        "completionRate": 0.9833333333333333,
        "avgSec": 95.95215282601825,
        "scorePerMinute": 0.16534724090642305,
        "scorePerRmb": 0.014049839661484473,
        "costPerCompleted": 0.15949499152542373,
        "model": "gpt-4.1-mini"
      },
      {
        "evidenceWarnings": 42,
        "primaryScore": 0.27025000000000005,
        "medianSec": 162.2273554801941,
        "reliabilityIndex": 0.9216666666666666,
        "combo": "hermes/qwen3-235b-a22b",
        "costRmb": 25.653421780000002,
        "rank": 24,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 0.9916666666666667,
        "avgSec": 219.56102950432722,
        "scorePerMinute": 0.07385190366708692,
        "scorePerRmb": 0.0105346570261708,
        "costPerCompleted": 0.2155749729411765,
        "model": "qwen3-235b-a22b"
      },
      {
        "evidenceWarnings": 50,
        "primaryScore": 0.6632416666666667,
        "medianSec": 117.24368071556091,
        "reliabilityIndex": 0.919,
        "combo": "codex/gpt-5.5",
        "costRmb": 383.685066232,
        "rank": 1,
        "harnessLabel": "Codex",
        "harness": "codex",
        "completionRate": 1.0,
        "avgSec": 138.93895245393117,
        "scorePerMinute": 0.28641715873879864,
        "scorePerRmb": 0.0017286095421436844,
        "costPerCompleted": 3.1973755519333333,
        "model": "gpt-5.5"
      },
      {
        "evidenceWarnings": 50,
        "primaryScore": 0.6351333333333334,
        "medianSec": 214.86611449718475,
        "reliabilityIndex": 0.916,
        "combo": "claudecode/opus-4.6",
        "costRmb": 711.0415173600001,
        "rank": 6,
        "harnessLabel": "Claude Code",
        "harness": "claudecode",
        "completionRate": 1.0,
        "avgSec": 288.74613988995554,
        "scorePerMinute": 0.13197752189699713,
        "scorePerRmb": 0.0008932436683746635,
        "costPerCompleted": 5.925345978,
        "model": "opus-4.6"
      }
    ],
    "lowCost": [
      {
        "evidenceWarnings": 29,
        "primaryScore": 0.26442372881355936,
        "medianSec": 65.59104585647583,
        "reliabilityIndex": 0.9288333333333333,
        "combo": "deepagents/gpt-4.1-mini",
        "costRmb": 18.820409,
        "rank": 25,
        "harnessLabel": "DeepAgents",
        "harness": "deepagents",
        "completionRate": 0.9833333333333333,
        "avgSec": 95.95215282601825,
        "scorePerMinute": 0.16534724090642305,
        "scorePerRmb": 0.014049839661484473,
        "costPerCompleted": 0.15949499152542373,
        "model": "gpt-4.1-mini"
      },
      {
        "evidenceWarnings": 50,
        "primaryScore": 0.2585178571428572,
        "medianSec": 136.649507522583,
        "reliabilityIndex": 0.811,
        "combo": "deepagents/qwen3-235b-a22b",
        "costRmb": 22.490760960000003,
        "rank": 27,
        "harnessLabel": "DeepAgents",
        "harness": "deepagents",
        "completionRate": 0.925,
        "avgSec": 335.4801481478923,
        "scorePerMinute": 0.0462354375190438,
        "scorePerRmb": 0.011494402417180692,
        "costPerCompleted": 0.20261946810810813,
        "model": "qwen3-235b-a22b"
      },
      {
        "evidenceWarnings": 19,
        "primaryScore": 0.25625000000000003,
        "medianSec": 55.73344135284424,
        "reliabilityIndex": 0.8821666666666667,
        "combo": "openclaw/gpt-4.1-mini",
        "costRmb": 24.0574315,
        "rank": 28,
        "harnessLabel": "OpenClaw",
        "harness": "openclaw",
        "completionRate": 0.9416666666666667,
        "avgSec": 66.10636717872282,
        "scorePerMinute": 0.23257971442346392,
        "scorePerRmb": 0.010651594290105327,
        "costPerCompleted": 0.21289762389380532,
        "model": "gpt-4.1-mini"
      },
      {
        "evidenceWarnings": 42,
        "primaryScore": 0.27025000000000005,
        "medianSec": 162.2273554801941,
        "reliabilityIndex": 0.9216666666666666,
        "combo": "hermes/qwen3-235b-a22b",
        "costRmb": 25.653421780000002,
        "rank": 24,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 0.9916666666666667,
        "avgSec": 219.56102950432722,
        "scorePerMinute": 0.07385190366708692,
        "scorePerRmb": 0.0105346570261708,
        "costPerCompleted": 0.2155749729411765,
        "model": "qwen3-235b-a22b"
      },
      {
        "evidenceWarnings": 31,
        "primaryScore": 0.20002500000000004,
        "medianSec": 120.01799988746643,
        "reliabilityIndex": 0.6698333333333334,
        "combo": "openclaw/qwen3-235b-a22b",
        "costRmb": 21.26311334,
        "rank": 29,
        "harnessLabel": "OpenClaw",
        "harness": "openclaw",
        "completionRate": 0.8083333333333333,
        "avgSec": 159.76701109679703,
        "scorePerMinute": 0.0751187614865545,
        "scorePerRmb": 0.009407136048309285,
        "costPerCompleted": 0.21920735402061856,
        "model": "qwen3-235b-a22b"
      },
      {
        "evidenceWarnings": 36,
        "primaryScore": 0.28585000000000005,
        "medianSec": 66.36361956596375,
        "reliabilityIndex": 0.94,
        "combo": "hermes/gpt-4.1-mini",
        "costRmb": 28.6482135,
        "rank": 23,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 1.0,
        "avgSec": 99.47463997205098,
        "scorePerMinute": 0.1724158037145835,
        "scorePerRmb": 0.009977934575222292,
        "costPerCompleted": 0.2387351125,
        "model": "gpt-4.1-mini"
      },
      {
        "evidenceWarnings": 54,
        "primaryScore": 0.2623916666666667,
        "medianSec": 45.58135521411896,
        "reliabilityIndex": 0.916,
        "combo": "codex/gpt-4.1-mini",
        "costRmb": 31.5051845,
        "rank": 26,
        "harnessLabel": "Codex",
        "harness": "codex",
        "completionRate": 1.0,
        "avgSec": 60.51360693176587,
        "scorePerMinute": 0.2601646273994559,
        "scorePerRmb": 0.008328523410699807,
        "costPerCompleted": 0.26254320416666665,
        "model": "gpt-4.1-mini"
      },
      {
        "evidenceWarnings": 157,
        "primaryScore": 0.5620982142857144,
        "medianSec": 476.5036574602127,
        "reliabilityIndex": 0.6164999999999999,
        "combo": "hermes/MiniMax-M3",
        "costRmb": 72.8587515,
        "rank": 13,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 0.9,
        "avgSec": 733.443874573266,
        "scorePerMinute": 0.04598292251982517,
        "scorePerRmb": 0.0077149031888875345,
        "costPerCompleted": 0.6746180694444445,
        "model": "MiniMax-M3"
      }
    ],
    "lowWarning": [
      {
        "evidenceWarnings": 19,
        "primaryScore": 0.25625000000000003,
        "medianSec": 55.73344135284424,
        "reliabilityIndex": 0.8821666666666667,
        "combo": "openclaw/gpt-4.1-mini",
        "costRmb": 24.0574315,
        "rank": 28,
        "harnessLabel": "OpenClaw",
        "harness": "openclaw",
        "completionRate": 0.9416666666666667,
        "avgSec": 66.10636717872282,
        "scorePerMinute": 0.23257971442346392,
        "scorePerRmb": 0.010651594290105327,
        "costPerCompleted": 0.21289762389380532,
        "model": "gpt-4.1-mini"
      },
      {
        "evidenceWarnings": 21,
        "primaryScore": 0.4613529411764707,
        "medianSec": 341.5551677942276,
        "reliabilityIndex": 0.9438333333333333,
        "combo": "hermes/sonnet-4.6",
        "costRmb": 141.6686025,
        "rank": 18,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 0.9833333333333333,
        "avgSec": 460.42196666790267,
        "scorePerMinute": 0.0601213201683628,
        "scorePerRmb": 0.003256564496543761,
        "costPerCompleted": 1.200581377118644,
        "model": "sonnet-4.6"
      },
      {
        "evidenceWarnings": 22,
        "primaryScore": 0.4326440677966103,
        "medianSec": 272.3082025051117,
        "reliabilityIndex": 0.9333333333333332,
        "combo": "hermes/opus-4.6",
        "costRmb": 378.84127561,
        "rank": 21,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 0.9833333333333333,
        "avgSec": 366.1287659891581,
        "scorePerMinute": 0.07090031289310196,
        "scorePerRmb": 0.0011420193512440757,
        "costPerCompleted": 3.2105192848305086,
        "model": "opus-4.6"
      },
      {
        "evidenceWarnings": 28,
        "primaryScore": 0.40480000000000005,
        "medianSec": 145.32469582557678,
        "reliabilityIndex": 0.958,
        "combo": "hermes/haiku-4.5",
        "costRmb": 103.2364125,
        "rank": 22,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 1.0,
        "avgSec": 175.82761585911115,
        "scorePerMinute": 0.1381352973554605,
        "scorePerRmb": 0.00392109712258744,
        "costPerCompleted": 0.8603034375,
        "model": "haiku-4.5"
      },
      {
        "evidenceWarnings": 29,
        "primaryScore": 0.26442372881355936,
        "medianSec": 65.59104585647583,
        "reliabilityIndex": 0.9288333333333333,
        "combo": "deepagents/gpt-4.1-mini",
        "costRmb": 18.820409,
        "rank": 25,
        "harnessLabel": "DeepAgents",
        "harness": "deepagents",
        "completionRate": 0.9833333333333333,
        "avgSec": 95.95215282601825,
        "scorePerMinute": 0.16534724090642305,
        "scorePerRmb": 0.014049839661484473,
        "costPerCompleted": 0.15949499152542373,
        "model": "gpt-4.1-mini"
      },
      {
        "evidenceWarnings": 31,
        "primaryScore": 0.20002500000000004,
        "medianSec": 120.01799988746643,
        "reliabilityIndex": 0.6698333333333334,
        "combo": "openclaw/qwen3-235b-a22b",
        "costRmb": 21.26311334,
        "rank": 29,
        "harnessLabel": "OpenClaw",
        "harness": "openclaw",
        "completionRate": 0.8083333333333333,
        "avgSec": 159.76701109679703,
        "scorePerMinute": 0.0751187614865545,
        "scorePerRmb": 0.009407136048309285,
        "costPerCompleted": 0.21920735402061856,
        "model": "qwen3-235b-a22b"
      },
      {
        "evidenceWarnings": 36,
        "primaryScore": 0.6354433962264152,
        "medianSec": 462.30649971961975,
        "reliabilityIndex": 0.758,
        "combo": "hermes/kimi-k2.6",
        "costRmb": 74.5394989,
        "rank": 5,
        "harnessLabel": "Hermes",
        "harness": "hermes",
        "completionRate": 0.875,
        "avgSec": 842.0059774625869,
        "scorePerMinute": 0.045280680653219,
        "scorePerRmb": 0.008524921760996909,
        "costPerCompleted": 0.7098999895238095,
        "model": "kimi-k2.6"
      },
      {
        "evidenceWarnings": 36,
        "primaryScore": 0.6247454545454546,
        "medianSec": 283.09596049785614,
        "reliabilityIndex": 0.7919999999999999,
        "combo": "deepagents/opus-4.6",
        "costRmb": 474.50267704,
        "rank": 8,
        "harnessLabel": "DeepAgents",
        "harness": "deepagents",
        "completionRate": 0.9,
        "avgSec": 488.64075058477897,
        "scorePerMinute": 0.07671224151458422,
        "scorePerRmb": 0.0013166320966673689,
        "costPerCompleted": 4.393543305925926,
        "model": "opus-4.6"
      }
    ]
  },
  "scoreDistribution": [
    {
      "label": "<0.30",
      "count": 7,
      "combos": [
        "hermes/gpt-4.1-mini",
        "hermes/qwen3-235b-a22b",
        "deepagents/gpt-4.1-mini",
        "codex/gpt-4.1-mini",
        "deepagents/qwen3-235b-a22b",
        "openclaw/gpt-4.1-mini",
        "openclaw/qwen3-235b-a22b"
      ],
      "avgCostRmb": 24.63407636857143
    },
    {
      "label": "0.30-0.45",
      "count": 4,
      "combos": [
        "openclaw/MiniMax-M3",
        "openclaw/haiku-4.5",
        "hermes/opus-4.6",
        "hermes/haiku-4.5"
      ],
      "avgCostRmb": 164.355739645
    },
    {
      "label": "0.45-0.55",
      "count": 4,
      "combos": [
        "openclaw/kimi-k2.6",
        "claudecode/haiku-4.5",
        "deepagents/haiku-4.5",
        "hermes/sonnet-4.6"
      ],
      "avgCostRmb": 124.225903525
    },
    {
      "label": "0.55-0.62",
      "count": 5,
      "combos": [
        "deepagents/kimi-k2.6",
        "openclaw/gpt-5.5",
        "openclaw/opus-4.6",
        "hermes/MiniMax-M3",
        "deepagents/MiniMax-M3"
      ],
      "avgCostRmb": 266.5470194604
    },
    {
      "label": ">=0.62",
      "count": 9,
      "combos": [
        "codex/gpt-5.5",
        "deepagents/sonnet-4.6",
        "claudecode/sonnet-4.6",
        "deepagents/gpt-5.5",
        "hermes/kimi-k2.6",
        "claudecode/opus-4.6",
        "hermes/gpt-5.5",
        "deepagents/opus-4.6",
        "openclaw/sonnet-4.6"
      ],
      "avgCostRmb": 399.2585942948889
    }
  ],
  "harnessMetrics": [
    {
      "harness": "claudecode",
      "harnessLabel": "Claude Code",
      "comboCount": 3,
      "primaryScore": 0.601141713747646,
      "completionRate": 0.9944444444444445,
      "costPerCompleted": 3.228886005143126,
      "medianSec": 153.0773610273997,
      "warnings": 51.0
    },
    {
      "harness": "deepagents",
      "harnessLabel": "DeepAgents",
      "comboCount": 8,
      "primaryScore": 0.515354635014932,
      "completionRate": 0.928125,
      "costPerCompleted": 1.9350770191654367,
      "medianSec": 207.85840874910355,
      "warnings": 53.5
    },
    {
      "harness": "codex",
      "harnessLabel": "Codex",
      "comboCount": 2,
      "primaryScore": 0.4628166666666667,
      "completionRate": 1.0,
      "costPerCompleted": 1.72995937805,
      "medianSec": 81.41251796483994,
      "warnings": 52.0
    },
    {
      "harness": "openclaw",
      "harnessLabel": "OpenClaw",
      "comboCount": 8,
      "primaryScore": 0.46225172288260596,
      "completionRate": 0.9010416666666666,
      "costPerCompleted": 1.8004922682187605,
      "medianSec": 208.17748564481735,
      "warnings": 48.375
    },
    {
      "harness": "hermes",
      "harnessLabel": "Hermes",
      "comboCount": 8,
      "primaryScore": 0.45965986945245807,
      "completionRate": 0.965625,
      "costPerCompleted": 1.444714443415096,
      "medianSec": 261.6945759654045,
      "warnings": 47.75
    }
  ],
  "funnel": {
    "title": "Construction funnel from raw TaskInstances to final benchmark tasks",
    "stages": [
      {
        "stage": "Raw MetaAgent TaskInstances",
        "count": 5291,
        "stage_type": "input"
      },
      {
        "stage": "Length filter",
        "count": 5181,
        "stage_type": "parallel_check",
        "status": "passed"
      },
      {
        "stage": "Public-Network Gate",
        "count": 5003,
        "stage_type": "serial_gate",
        "status": "passed"
      },
      {
        "stage": "Fixture lookup",
        "count": 4896,
        "stage_type": "parallel_check",
        "status": "passed"
      },
      {
        "stage": "Redaction recovery",
        "count": 4286,
        "stage_type": "parallel_check",
        "status": "high-confidence"
      },
      {
        "stage": "Mechanical Join",
        "count": 3813,
        "stage_type": "join",
        "status": "usable"
      },
      {
        "stage": "Self-Contained Review",
        "count": 1177,
        "stage_type": "serial_gate",
        "status": "kept"
      },
      {
        "stage": "Package + Preflight",
        "count": 852,
        "stage_type": "final_pool",
        "status": "benchmark tasks"
      }
    ],
    "note": "The first three checks are parallel early checks; later stages are serial gates/packaging steps."
  },
  "artifactInsights": {
    "artifactOverall": [
      {
        "model": "gpt-5.5",
        "model_label": "GPT-5.5",
        "artifact_type_bucket": "code_json_other",
        "artifact_label": "Code/JSON",
        "score": 0.6522758620689657
      },
      {
        "model": "gpt-5.5",
        "model_label": "GPT-5.5",
        "artifact_type_bucket": "final_response_only",
        "artifact_label": "TXT",
        "score": 0.5746718750000002
      },
      {
        "model": "gpt-5.5",
        "model_label": "GPT-5.5",
        "artifact_type_bucket": "html",
        "artifact_label": "HTML",
        "score": 0.6651406250000002
      },
      {
        "model": "gpt-5.5",
        "model_label": "GPT-5.5",
        "artifact_type_bucket": "md",
        "artifact_label": "Markdown",
        "score": 0.6404222222222223
      },
      {
        "model": "gpt-5.5",
        "model_label": "GPT-5.5",
        "artifact_type_bucket": "pptx",
        "artifact_label": "Slides",
        "score": 0.5463250000000002
      },
      {
        "model": "gpt-5.5",
        "model_label": "GPT-5.5",
        "artifact_type_bucket": "xlsx",
        "artifact_label": "Sheet",
        "score": 0.6059062500000001
      },
      {
        "model": "sonnet-4.6",
        "model_label": "Sonnet 4.6",
        "artifact_type_bucket": "code_json_other",
        "artifact_label": "Code/JSON",
        "score": 0.5154827586206897
      },
      {
        "model": "sonnet-4.6",
        "model_label": "Sonnet 4.6",
        "artifact_type_bucket": "final_response_only",
        "artifact_label": "TXT",
        "score": 0.7370000000000002
      },
      {
        "model": "sonnet-4.6",
        "model_label": "Sonnet 4.6",
        "artifact_type_bucket": "html",
        "artifact_label": "HTML",
        "score": 0.48847619047619056
      },
      {
        "model": "sonnet-4.6",
        "model_label": "Sonnet 4.6",
        "artifact_type_bucket": "md",
        "artifact_label": "Markdown",
        "score": 0.6438358208955225
      },
      {
        "model": "sonnet-4.6",
        "model_label": "Sonnet 4.6",
        "artifact_type_bucket": "pptx",
        "artifact_label": "Slides",
        "score": 0.46597368421052643
      },
      {
        "model": "sonnet-4.6",
        "model_label": "Sonnet 4.6",
        "artifact_type_bucket": "xlsx",
        "artifact_label": "Sheet",
        "score": 0.6016406250000002
      },
      {
        "model": "kimi-k2.6",
        "model_label": "Kimi K2.6",
        "artifact_type_bucket": "code_json_other",
        "artifact_label": "Code/JSON",
        "score": 0.596949152542373
      },
      {
        "model": "kimi-k2.6",
        "model_label": "Kimi K2.6",
        "artifact_type_bucket": "final_response_only",
        "artifact_label": "TXT",
        "score": 0.624413043478261
      },
      {
        "model": "kimi-k2.6",
        "model_label": "Kimi K2.6",
        "artifact_type_bucket": "html",
        "artifact_label": "HTML",
        "score": 0.5211702127659575
      },
      {
        "model": "kimi-k2.6",
        "model_label": "Kimi K2.6",
        "artifact_type_bucket": "md",
        "artifact_label": "Markdown",
        "score": 0.6211304347826089
      },
      {
        "model": "kimi-k2.6",
        "model_label": "Kimi K2.6",
        "artifact_type_bucket": "pptx",
        "artifact_label": "Slides",
        "score": 0.4597826086956523
      },
      {
        "model": "kimi-k2.6",
        "model_label": "Kimi K2.6",
        "artifact_type_bucket": "xlsx",
        "artifact_label": "Sheet",
        "score": 0.5785227272727274
      },
      {
        "model": "deepseek-v4-pro",
        "model_label": "DeepSeek V4 Pro",
        "artifact_type_bucket": "code_json_other",
        "artifact_label": "Code/JSON",
        "score": 0.45891666666666675
      },
      {
        "model": "deepseek-v4-pro",
        "model_label": "DeepSeek V4 Pro",
        "artifact_type_bucket": "final_response_only",
        "artifact_label": "TXT",
        "score": 0.7336153846153847
      },
      {
        "model": "deepseek-v4-pro",
        "model_label": "DeepSeek V4 Pro",
        "artifact_type_bucket": "html",
        "artifact_label": "HTML",
        "score": 0.5918235294117647
      },
      {
        "model": "deepseek-v4-pro",
        "model_label": "DeepSeek V4 Pro",
        "artifact_type_bucket": "md",
        "artifact_label": "Markdown",
        "score": 0.6693333333333334
      },
      {
        "model": "deepseek-v4-pro",
        "model_label": "DeepSeek V4 Pro",
        "artifact_type_bucket": "pptx",
        "artifact_label": "Slides",
        "score": 0.2684
      },
      {
        "model": "deepseek-v4-pro",
        "model_label": "DeepSeek V4 Pro",
        "artifact_type_bucket": "xlsx",
        "artifact_label": "Sheet",
        "score": 0.5383703703703705
      },
      {
        "model": "opus-4.6",
        "model_label": "Opus 4.6",
        "artifact_type_bucket": "code_json_other",
        "artifact_label": "Code/JSON",
        "score": 0.5087816091954024
      },
      {
        "model": "opus-4.6",
        "model_label": "Opus 4.6",
        "artifact_type_bucket": "final_response_only",
        "artifact_label": "TXT",
        "score": 0.6916507936507937
      },
      {
        "model": "opus-4.6",
        "model_label": "Opus 4.6",
        "artifact_type_bucket": "html",
        "artifact_label": "HTML",
        "score": 0.47212903225806463
      },
      {
        "model": "opus-4.6",
        "model_label": "Opus 4.6",
        "artifact_type_bucket": "md",
        "artifact_label": "Markdown",
        "score": 0.6082923076923078
      },
      {
        "model": "opus-4.6",
        "model_label": "Opus 4.6",
        "artifact_type_bucket": "pptx",
        "artifact_label": "Slides",
        "score": 0.38715384615384624
      },
      {
        "model": "opus-4.6",
        "model_label": "Opus 4.6",
        "artifact_type_bucket": "xlsx",
        "artifact_label": "Sheet",
        "score": 0.6221269841269843
      },
      {
        "model": "MiniMax-M3",
        "model_label": "MiniMax-M3",
        "artifact_type_bucket": "code_json_other",
        "artifact_label": "Code/JSON",
        "score": 0.3208275862068966
      },
      {
        "model": "MiniMax-M3",
        "model_label": "MiniMax-M3",
        "artifact_type_bucket": "final_response_only",
        "artifact_label": "TXT",
        "score": 0.7656666666666668
      },
      {
        "model": "MiniMax-M3",
        "model_label": "MiniMax-M3",
        "artifact_type_bucket": "html",
        "artifact_label": "HTML",
        "score": 0.4409166666666668
      },
      {
        "model": "MiniMax-M3",
        "model_label": "MiniMax-M3",
        "artifact_type_bucket": "md",
        "artifact_label": "Markdown",
        "score": 0.6781111111111113
      },
      {
        "model": "MiniMax-M3",
        "model_label": "MiniMax-M3",
        "artifact_type_bucket": "pptx",
        "artifact_label": "Slides",
        "score": 0.06625000000000002
      },
      {
        "model": "MiniMax-M3",
        "model_label": "MiniMax-M3",
        "artifact_type_bucket": "xlsx",
        "artifact_label": "Sheet",
        "score": 0.5156600000000001
      },
      {
        "model": "haiku-4.5",
        "model_label": "Haiku 4.5",
        "artifact_type_bucket": "code_json_other",
        "artifact_label": "Code/JSON",
        "score": 0.4011609195402299
      },
      {
        "model": "haiku-4.5",
        "model_label": "Haiku 4.5",
        "artifact_type_bucket": "final_response_only",
        "artifact_label": "TXT",
        "score": 0.5590000000000002
      },
      {
        "model": "haiku-4.5",
        "model_label": "Haiku 4.5",
        "artifact_type_bucket": "html",
        "artifact_label": "HTML",
        "score": 0.4831250000000001
      },
      {
        "model": "haiku-4.5",
        "model_label": "Haiku 4.5",
        "artifact_type_bucket": "md",
        "artifact_label": "Markdown",
        "score": 0.409725925925926
      },
      {
        "model": "haiku-4.5",
        "model_label": "Haiku 4.5",
        "artifact_type_bucket": "pptx",
        "artifact_label": "Slides",
        "score": 0.42605000000000004
      },
      {
        "model": "haiku-4.5",
        "model_label": "Haiku 4.5",
        "artifact_type_bucket": "xlsx",
        "artifact_label": "Sheet",
        "score": 0.5405937500000001
      },
      {
        "model": "gpt-4.1-mini",
        "model_label": "GPT-4.1-mini",
        "artifact_type_bucket": "code_json_other",
        "artifact_label": "Code/JSON",
        "score": 0.24897701149425294
      },
      {
        "model": "gpt-4.1-mini",
        "model_label": "GPT-4.1-mini",
        "artifact_type_bucket": "final_response_only",
        "artifact_label": "TXT",
        "score": 0.38309523809523816
      },
      {
        "model": "gpt-4.1-mini",
        "model_label": "GPT-4.1-mini",
        "artifact_type_bucket": "html",
        "artifact_label": "HTML",
        "score": 0.3990468750000001
      },
      {
        "model": "gpt-4.1-mini",
        "model_label": "GPT-4.1-mini",
        "artifact_type_bucket": "md",
        "artifact_label": "Markdown",
        "score": 0.25611764705882356
      },
      {
        "model": "gpt-4.1-mini",
        "model_label": "GPT-4.1-mini",
        "artifact_type_bucket": "pptx",
        "artifact_label": "Slides",
        "score": 0.12115000000000002
      },
      {
        "model": "gpt-4.1-mini",
        "model_label": "GPT-4.1-mini",
        "artifact_type_bucket": "xlsx",
        "artifact_label": "Sheet",
        "score": 0.16331250000000003
      },
      {
        "model": "qwen3-235b-a22b",
        "model_label": "Qwen3-235B-A22B",
        "artifact_type_bucket": "code_json_other",
        "artifact_label": "Code/JSON",
        "score": 0.26651562500000003
      },
      {
        "model": "qwen3-235b-a22b",
        "model_label": "Qwen3-235B-A22B",
        "artifact_type_bucket": "final_response_only",
        "artifact_label": "TXT",
        "score": 0.341
      },
      {
        "model": "qwen3-235b-a22b",
        "model_label": "Qwen3-235B-A22B",
        "artifact_type_bucket": "html",
        "artifact_label": "HTML",
        "score": 0.29323913043478267
      },
      {
        "model": "qwen3-235b-a22b",
        "model_label": "Qwen3-235B-A22B",
        "artifact_type_bucket": "md",
        "artifact_label": "Markdown",
        "score": 0.21552525252525256
      },
      {
        "model": "qwen3-235b-a22b",
        "model_label": "Qwen3-235B-A22B",
        "artifact_type_bucket": "pptx",
        "artifact_label": "Slides",
        "score": 0.1025666666666667
      },
      {
        "model": "qwen3-235b-a22b",
        "model_label": "Qwen3-235B-A22B",
        "artifact_type_bucket": "xlsx",
        "artifact_label": "Sheet",
        "score": 0.23700000000000007
      }
    ],
    "columns": [
      "code_json_other",
      "final_response_only",
      "html",
      "md",
      "pptx",
      "xlsx"
    ],
    "models": [
      "gpt-5.5",
      "sonnet-4.6",
      "kimi-k2.6",
      "deepseek-v4-pro",
      "opus-4.6",
      "MiniMax-M3",
      "haiku-4.5",
      "gpt-4.1-mini",
      "qwen3-235b-a22b"
    ]
  },
  "dimensionProfile": {
    "overall": [
      {
        "dimension": "Accuracy",
        "value": 0.4280693215424144
      },
      {
        "dimension": "Relevance",
        "value": 0.5792549735558119
      },
      {
        "dimension": "Depth",
        "value": 0.4837203928165579
      },
      {
        "dimension": "Utility",
        "value": 0.4872455891967108
      },
      {
        "dimension": "Quality",
        "value": 0.5808691443551299
      }
    ],
    "models": [
      {
        "model": "gpt-5.5",
        "model_label": "GPT-5.5",
        "score_avg": 0.6353689727463314,
        "Accuracy": 0.5563522012578612,
        "Relevance": 0.7158071278825999,
        "Depth": 0.6350943396226417,
        "Utility": 0.637442348008386,
        "Quality": 0.7079454926624735
      },
      {
        "model": "sonnet-4.6",
        "model_label": "Sonnet 4.6",
        "score_avg": 0.5990974576271187,
        "Accuracy": 0.5254025423728806,
        "Relevance": 0.6716101694915249,
        "Depth": 0.5988771186440678,
        "Utility": 0.6006567796610168,
        "Quality": 0.6724788135593224
      },
      {
        "model": "kimi-k2.6",
        "model_label": "Kimi K2.6",
        "score_avg": 0.5872791411042946,
        "Accuracy": 0.5073312883435577,
        "Relevance": 0.6687116564417174,
        "Depth": 0.5858588957055212,
        "Utility": 0.5854907975460123,
        "Quality": 0.6706748466257665
      },
      {
        "model": "deepseek-v4-pro",
        "model_label": "DeepSeek V4 Pro",
        "score_avg": 0.5786222222222223,
        "Accuracy": 0.500166666666666,
        "Relevance": 0.6654999999999993,
        "Depth": 0.5746388888888888,
        "Utility": 0.5764444444444444,
        "Quality": 0.6525555555555556
      },
      {
        "model": "opus-4.6",
        "model_label": "Opus 4.6",
        "score_avg": 0.5731303418803421,
        "Accuracy": 0.501282051282051,
        "Relevance": 0.6485683760683754,
        "Depth": 0.5660897435897436,
        "Utility": 0.5785470085470091,
        "Quality": 0.6410470085470084
      },
      {
        "model": "MiniMax-M3",
        "model_label": "MiniMax-M3",
        "score_avg": 0.5201893491124262,
        "Accuracy": 0.42748520710059174,
        "Relevance": 0.611153846153846,
        "Depth": 0.5277514792899413,
        "Utility": 0.5241715976331363,
        "Quality": 0.5932840236686394
      },
      {
        "model": "haiku-4.5",
        "model_label": "Haiku 4.5",
        "score_avg": 0.4654623430962344,
        "Accuracy": 0.3878870292887033,
        "Relevance": 0.5521548117154809,
        "Depth": 0.4508368200836823,
        "Utility": 0.45725941422594174,
        "Quality": 0.5704602510460246
      },
      {
        "model": "gpt-4.1-mini",
        "model_label": "GPT-4.1-mini",
        "score_avg": 0.2672405857740586,
        "Accuracy": 0.24433054393305423,
        "Relevance": 0.3556694560669454,
        "Depth": 0.2147907949790795,
        "Utility": 0.21658995815899568,
        "Quality": 0.36531380753138026
      },
      {
        "model": "qwen3-235b-a22b",
        "model_label": "Qwen3-235B-A22B",
        "score_avg": 0.24257670454545457,
        "Accuracy": 0.20238636363636342,
        "Relevance": 0.3241193181818181,
        "Depth": 0.19954545454545453,
        "Utility": 0.20860795454545433,
        "Quality": 0.35406249999999967
      }
    ],
    "dimensions": {
      "grounded_accuracy": "Accuracy",
      "task_relevance": "Relevance",
      "substantive_depth": "Depth",
      "practical_utility": "Utility",
      "communication_quality": "Quality"
    },
    "comboOptions": [
      {
        "combo": "codex/gpt-5.5",
        "harness": "codex",
        "harnessLabel": "Codex",
        "model": "gpt-5.5",
        "primaryScore": 0.6632416666666667,
        "rank": 1,
        "values": {
          "Accuracy": 0.5563522012578612,
          "Relevance": 0.7158071278825999,
          "Depth": 0.6350943396226417,
          "Utility": 0.637442348008386,
          "Quality": 0.7079454926624735
        },
        "sourceLevel": "model"
      },
      {
        "combo": "deepagents/sonnet-4.6",
        "harness": "deepagents",
        "harnessLabel": "DeepAgents",
        "model": "sonnet-4.6",
        "primaryScore": 0.6592869565217392,
        "rank": 2,
        "values": {
          "Accuracy": 0.5254025423728806,
          "Relevance": 0.6716101694915249,
          "Depth": 0.5988771186440678,
          "Utility": 0.6006567796610168,
          "Quality": 0.6724788135593224
        },
        "sourceLevel": "model"
      },
      {
        "combo": "claudecode/sonnet-4.6",
        "harness": "claudecode",
        "harnessLabel": "Claude Code",
        "model": "sonnet-4.6",
        "primaryScore": 0.6550084745762713,
        "rank": 3,
        "values": {
          "Accuracy": 0.5254025423728806,
          "Relevance": 0.6716101694915249,
          "Depth": 0.5988771186440678,
          "Utility": 0.6006567796610168,
          "Quality": 0.6724788135593224
        },
        "sourceLevel": "model"
      },
      {
        "combo": "deepagents/gpt-5.5",
        "harness": "deepagents",
        "harnessLabel": "DeepAgents",
        "model": "gpt-5.5",
        "primaryScore": 0.6395593220338984,
        "rank": 4,
        "values": {
          "Accuracy": 0.5563522012578612,
          "Relevance": 0.7158071278825999,
          "Depth": 0.6350943396226417,
          "Utility": 0.637442348008386,
          "Quality": 0.7079454926624735
        },
        "sourceLevel": "model"
      },
      {
        "combo": "hermes/kimi-k2.6",
        "harness": "hermes",
        "harnessLabel": "Hermes",
        "model": "kimi-k2.6",
        "primaryScore": 0.6354433962264152,
        "rank": 5,
        "values": {
          "Accuracy": 0.5073312883435577,
          "Relevance": 0.6687116564417174,
          "Depth": 0.5858588957055212,
          "Utility": 0.5854907975460123,
          "Quality": 0.6706748466257665
        },
        "sourceLevel": "model"
      },
      {
        "combo": "claudecode/opus-4.6",
        "harness": "claudecode",
        "harnessLabel": "Claude Code",
        "model": "opus-4.6",
        "primaryScore": 0.6351333333333334,
        "rank": 6,
        "values": {
          "Accuracy": 0.501282051282051,
          "Relevance": 0.6485683760683754,
          "Depth": 0.5660897435897436,
          "Utility": 0.5785470085470091,
          "Quality": 0.6410470085470084
        },
        "sourceLevel": "model"
      },
      {
        "combo": "hermes/gpt-5.5",
        "harness": "hermes",
        "harnessLabel": "Hermes",
        "model": "gpt-5.5",
        "primaryScore": 0.6248403361344539,
        "rank": 7,
        "values": {
          "Accuracy": 0.5563522012578612,
          "Relevance": 0.7158071278825999,
          "Depth": 0.6350943396226417,
          "Utility": 0.637442348008386,
          "Quality": 0.7079454926624735
        },
        "sourceLevel": "model"
      },
      {
        "combo": "deepagents/opus-4.6",
        "harness": "deepagents",
        "harnessLabel": "DeepAgents",
        "model": "opus-4.6",
        "primaryScore": 0.6247454545454546,
        "rank": 8,
        "values": {
          "Accuracy": 0.501282051282051,
          "Relevance": 0.6485683760683754,
          "Depth": 0.5660897435897436,
          "Utility": 0.5785470085470091,
          "Quality": 0.6410470085470084
        },
        "sourceLevel": "model"
      },
      {
        "combo": "openclaw/sonnet-4.6",
        "harness": "openclaw",
        "harnessLabel": "OpenClaw",
        "model": "sonnet-4.6",
        "primaryScore": 0.6230333333333334,
        "rank": 9,
        "values": {
          "Accuracy": 0.5254025423728806,
          "Relevance": 0.6716101694915249,
          "Depth": 0.5988771186440678,
          "Utility": 0.6006567796610168,
          "Quality": 0.6724788135593224
        },
        "sourceLevel": "model"
      },
      {
        "combo": "deepagents/kimi-k2.6",
        "harness": "deepagents",
        "harnessLabel": "DeepAgents",
        "model": "kimi-k2.6",
        "primaryScore": 0.6178500000000001,
        "rank": 10,
        "values": {
          "Accuracy": 0.5073312883435577,
          "Relevance": 0.6687116564417174,
          "Depth": 0.5858588957055212,
          "Utility": 0.5854907975460123,
          "Quality": 0.6706748466257665
        },
        "sourceLevel": "model"
      },
      {
        "combo": "openclaw/gpt-5.5",
        "harness": "openclaw",
        "harnessLabel": "OpenClaw",
        "model": "gpt-5.5",
        "primaryScore": 0.6138166666666668,
        "rank": 11,
        "values": {
          "Accuracy": 0.5563522012578612,
          "Relevance": 0.7158071278825999,
          "Depth": 0.6350943396226417,
          "Utility": 0.637442348008386,
          "Quality": 0.7079454926624735
        },
        "sourceLevel": "model"
      },
      {
        "combo": "openclaw/opus-4.6",
        "harness": "openclaw",
        "harnessLabel": "OpenClaw",
        "model": "opus-4.6",
        "primaryScore": 0.6019583333333335,
        "rank": 12,
        "values": {
          "Accuracy": 0.501282051282051,
          "Relevance": 0.6485683760683754,
          "Depth": 0.5660897435897436,
          "Utility": 0.5785470085470091,
          "Quality": 0.6410470085470084
        },
        "sourceLevel": "model"
      },
      {
        "combo": "hermes/MiniMax-M3",
        "harness": "hermes",
        "harnessLabel": "Hermes",
        "model": "MiniMax-M3",
        "primaryScore": 0.5620982142857144,
        "rank": 13,
        "values": {
          "Accuracy": 0.42748520710059174,
          "Relevance": 0.611153846153846,
          "Depth": 0.5277514792899413,
          "Utility": 0.5241715976331363,
          "Quality": 0.5932840236686394
        },
        "sourceLevel": "model"
      },
      {
        "combo": "deepagents/MiniMax-M3",
        "harness": "deepagents",
        "harnessLabel": "DeepAgents",
        "model": "MiniMax-M3",
        "primaryScore": 0.551778761061947,
        "rank": 14,
        "values": {
          "Accuracy": 0.42748520710059174,
          "Relevance": 0.611153846153846,
          "Depth": 0.5277514792899413,
          "Utility": 0.5241715976331363,
          "Quality": 0.5932840236686394
        },
        "sourceLevel": "model"
      },
      {
        "combo": "openclaw/kimi-k2.6",
        "harness": "openclaw",
        "harnessLabel": "OpenClaw",
        "model": "kimi-k2.6",
        "primaryScore": 0.5192583333333335,
        "rank": 15,
        "values": {
          "Accuracy": 0.5073312883435577,
          "Relevance": 0.6687116564417174,
          "Depth": 0.5858588957055212,
          "Utility": 0.5854907975460123,
          "Quality": 0.6706748466257665
        },
        "sourceLevel": "model"
      },
      {
        "combo": "claudecode/haiku-4.5",
        "harness": "claudecode",
        "harnessLabel": "Claude Code",
        "model": "haiku-4.5",
        "primaryScore": 0.5132833333333334,
        "rank": 16,
        "values": {
          "Accuracy": 0.3878870292887033,
          "Relevance": 0.5521548117154809,
          "Depth": 0.4508368200836823,
          "Utility": 0.45725941422594174,
          "Quality": 0.5704602510460246
        },
        "sourceLevel": "model"
      },
      {
        "combo": "deepagents/haiku-4.5",
        "harness": "deepagents",
        "harnessLabel": "DeepAgents",
        "model": "haiku-4.5",
        "primaryScore": 0.5066750000000001,
        "rank": 17,
        "values": {
          "Accuracy": 0.3878870292887033,
          "Relevance": 0.5521548117154809,
          "Depth": 0.4508368200836823,
          "Utility": 0.45725941422594174,
          "Quality": 0.5704602510460246
        },
        "sourceLevel": "model"
      },
      {
        "combo": "hermes/sonnet-4.6",
        "harness": "hermes",
        "harnessLabel": "Hermes",
        "model": "sonnet-4.6",
        "primaryScore": 0.4613529411764707,
        "rank": 18,
        "values": {
          "Accuracy": 0.5254025423728806,
          "Relevance": 0.6716101694915249,
          "Depth": 0.5988771186440678,
          "Utility": 0.6006567796610168,
          "Quality": 0.6724788135593224
        },
        "sourceLevel": "model"
      },
      {
        "combo": "openclaw/MiniMax-M3",
        "harness": "openclaw",
        "harnessLabel": "OpenClaw",
        "model": "MiniMax-M3",
        "primaryScore": 0.44706194690265494,
        "rank": 19,
        "values": {
          "Accuracy": 0.42748520710059174,
          "Relevance": 0.611153846153846,
          "Depth": 0.5277514792899413,
          "Utility": 0.5241715976331363,
          "Quality": 0.5932840236686394
        },
        "sourceLevel": "model"
      },
      {
        "combo": "openclaw/haiku-4.5",
        "harness": "openclaw",
        "harnessLabel": "OpenClaw",
        "model": "haiku-4.5",
        "primaryScore": 0.43661016949152553,
        "rank": 20,
        "values": {
          "Accuracy": 0.3878870292887033,
          "Relevance": 0.5521548117154809,
          "Depth": 0.4508368200836823,
          "Utility": 0.45725941422594174,
          "Quality": 0.5704602510460246
        },
        "sourceLevel": "model"
      },
      {
        "combo": "hermes/opus-4.6",
        "harness": "hermes",
        "harnessLabel": "Hermes",
        "model": "opus-4.6",
        "primaryScore": 0.4326440677966103,
        "rank": 21,
        "values": {
          "Accuracy": 0.501282051282051,
          "Relevance": 0.6485683760683754,
          "Depth": 0.5660897435897436,
          "Utility": 0.5785470085470091,
          "Quality": 0.6410470085470084
        },
        "sourceLevel": "model"
      },
      {
        "combo": "hermes/haiku-4.5",
        "harness": "hermes",
        "harnessLabel": "Hermes",
        "model": "haiku-4.5",
        "primaryScore": 0.40480000000000005,
        "rank": 22,
        "values": {
          "Accuracy": 0.3878870292887033,
          "Relevance": 0.5521548117154809,
          "Depth": 0.4508368200836823,
          "Utility": 0.45725941422594174,
          "Quality": 0.5704602510460246
        },
        "sourceLevel": "model"
      },
      {
        "combo": "hermes/gpt-4.1-mini",
        "harness": "hermes",
        "harnessLabel": "Hermes",
        "model": "gpt-4.1-mini",
        "primaryScore": 0.28585000000000005,
        "rank": 23,
        "values": {
          "Accuracy": 0.24433054393305423,
          "Relevance": 0.3556694560669454,
          "Depth": 0.2147907949790795,
          "Utility": 0.21658995815899568,
          "Quality": 0.36531380753138026
        },
        "sourceLevel": "model"
      },
      {
        "combo": "hermes/qwen3-235b-a22b",
        "harness": "hermes",
        "harnessLabel": "Hermes",
        "model": "qwen3-235b-a22b",
        "primaryScore": 0.27025000000000005,
        "rank": 24,
        "values": {
          "Accuracy": 0.20238636363636342,
          "Relevance": 0.3241193181818181,
          "Depth": 0.19954545454545453,
          "Utility": 0.20860795454545433,
          "Quality": 0.35406249999999967
        },
        "sourceLevel": "model"
      },
      {
        "combo": "deepagents/gpt-4.1-mini",
        "harness": "deepagents",
        "harnessLabel": "DeepAgents",
        "model": "gpt-4.1-mini",
        "primaryScore": 0.26442372881355936,
        "rank": 25,
        "values": {
          "Accuracy": 0.24433054393305423,
          "Relevance": 0.3556694560669454,
          "Depth": 0.2147907949790795,
          "Utility": 0.21658995815899568,
          "Quality": 0.36531380753138026
        },
        "sourceLevel": "model"
      },
      {
        "combo": "codex/gpt-4.1-mini",
        "harness": "codex",
        "harnessLabel": "Codex",
        "model": "gpt-4.1-mini",
        "primaryScore": 0.2623916666666667,
        "rank": 26,
        "values": {
          "Accuracy": 0.24433054393305423,
          "Relevance": 0.3556694560669454,
          "Depth": 0.2147907949790795,
          "Utility": 0.21658995815899568,
          "Quality": 0.36531380753138026
        },
        "sourceLevel": "model"
      },
      {
        "combo": "deepagents/qwen3-235b-a22b",
        "harness": "deepagents",
        "harnessLabel": "DeepAgents",
        "model": "qwen3-235b-a22b",
        "primaryScore": 0.2585178571428572,
        "rank": 27,
        "values": {
          "Accuracy": 0.20238636363636342,
          "Relevance": 0.3241193181818181,
          "Depth": 0.19954545454545453,
          "Utility": 0.20860795454545433,
          "Quality": 0.35406249999999967
        },
        "sourceLevel": "model"
      },
      {
        "combo": "openclaw/gpt-4.1-mini",
        "harness": "openclaw",
        "harnessLabel": "OpenClaw",
        "model": "gpt-4.1-mini",
        "primaryScore": 0.25625000000000003,
        "rank": 28,
        "values": {
          "Accuracy": 0.24433054393305423,
          "Relevance": 0.3556694560669454,
          "Depth": 0.2147907949790795,
          "Utility": 0.21658995815899568,
          "Quality": 0.36531380753138026
        },
        "sourceLevel": "model"
      },
      {
        "combo": "openclaw/qwen3-235b-a22b",
        "harness": "openclaw",
        "harnessLabel": "OpenClaw",
        "model": "qwen3-235b-a22b",
        "primaryScore": 0.20002500000000004,
        "rank": 29,
        "values": {
          "Accuracy": 0.20238636363636342,
          "Relevance": 0.3241193181818181,
          "Depth": 0.19954545454545453,
          "Utility": 0.20860795454545433,
          "Quality": 0.35406249999999967
        },
        "sourceLevel": "model"
      }
    ]
  },
  "benchmarkStats": {
    "A_role_classes": {
      "data": [
        {
          "role_class": "Product / project",
          "task_count": 220
        },
        {
          "role_class": "Engineering / IT",
          "task_count": 174
        },
        {
          "role_class": "HR / admin",
          "task_count": 102
        },
        {
          "role_class": "Executive",
          "task_count": 89
        },
        {
          "role_class": "Sales / customer",
          "task_count": 88
        },
        {
          "role_class": "Marketing",
          "task_count": 77
        },
        {
          "role_class": "Finance / ops",
          "task_count": 64
        },
        {
          "role_class": "Others",
          "task_count": 38
        }
      ],
      "fields": {
        "label": "role_class",
        "value": "task_count"
      },
      "unit": "tasks"
    },
    "B_skill_subclasses": {
      "data": [
        {
          "role_class": "Product / project",
          "subclass_count": 6,
          "instance_counts_by_subclass_json": [
            24,
            24,
            28,
            29,
            54,
            61
          ],
          "total_instances": 220
        },
        {
          "role_class": "Engineering / IT",
          "subclass_count": 9,
          "instance_counts_by_subclass_json": [
            8,
            9,
            14,
            14,
            16,
            17,
            24,
            34,
            38
          ],
          "total_instances": 174
        },
        {
          "role_class": "HR / admin",
          "subclass_count": 6,
          "instance_counts_by_subclass_json": [
            8,
            8,
            16,
            18,
            26,
            26
          ],
          "total_instances": 102
        },
        {
          "role_class": "Executive",
          "subclass_count": 6,
          "instance_counts_by_subclass_json": [
            10,
            10,
            11,
            11,
            18,
            29
          ],
          "total_instances": 89
        },
        {
          "role_class": "Sales / customer",
          "subclass_count": 6,
          "instance_counts_by_subclass_json": [
            12,
            12,
            14,
            14,
            14,
            22
          ],
          "total_instances": 88
        },
        {
          "role_class": "Marketing",
          "subclass_count": 6,
          "instance_counts_by_subclass_json": [
            7,
            9,
            10,
            13,
            19,
            19
          ],
          "total_instances": 77
        },
        {
          "role_class": "Finance / ops",
          "subclass_count": 6,
          "instance_counts_by_subclass_json": [
            6,
            6,
            8,
            12,
            13,
            19
          ],
          "total_instances": 64
        }
      ],
      "fields": {
        "role": "role_class",
        "subclass_count": "subclass_count",
        "distribution": "instance_counts_by_subclass_json",
        "total": "total_instances"
      },
      "unit": "tasks"
    },
    "C_input_fixture_files": {
      "data": [
        {
          "fixture_type": "MD",
          "file_count": 209
        },
        {
          "fixture_type": "DOC/DOCX",
          "file_count": 131
        },
        {
          "fixture_type": "Image",
          "file_count": 114
        },
        {
          "fixture_type": "PDF",
          "file_count": 60
        },
        {
          "fixture_type": "Sheet",
          "file_count": 49
        },
        {
          "fixture_type": "Code",
          "file_count": 46
        },
        {
          "fixture_type": "HTML",
          "file_count": 31
        },
        {
          "fixture_type": "Other",
          "file_count": 23
        },
        {
          "fixture_type": "Slides",
          "file_count": 19
        },
        {
          "fixture_type": "Archive/package",
          "file_count": 18
        },
        {
          "fixture_type": "TXT",
          "file_count": 10
        },
        {
          "fixture_type": "Skill/package",
          "file_count": 8
        },
        {
          "fixture_type": "JSON",
          "file_count": 1
        }
      ],
      "task_coverage": [
        {
          "fixture_type": "MD",
          "task_count": 145
        },
        {
          "fixture_type": "DOC/DOCX",
          "task_count": 106
        },
        {
          "fixture_type": "Image",
          "task_count": 73
        },
        {
          "fixture_type": "PDF",
          "task_count": 58
        },
        {
          "fixture_type": "Sheet",
          "task_count": 35
        },
        {
          "fixture_type": "HTML",
          "task_count": 25
        },
        {
          "fixture_type": "Slides",
          "task_count": 19
        },
        {
          "fixture_type": "Archive/package",
          "task_count": 17
        },
        {
          "fixture_type": "Other",
          "task_count": 13
        },
        {
          "fixture_type": "TXT",
          "task_count": 10
        },
        {
          "fixture_type": "Skill/package",
          "task_count": 7
        },
        {
          "fixture_type": "Code",
          "task_count": 7
        },
        {
          "fixture_type": "JSON",
          "task_count": 1
        }
      ],
      "display_data": [
        {
          "fixture_type": "MD",
          "file_count": 209
        },
        {
          "fixture_type": "DOC/DOCX",
          "file_count": 131
        },
        {
          "fixture_type": "Image",
          "file_count": 114
        },
        {
          "fixture_type": "PDF",
          "file_count": 60
        },
        {
          "fixture_type": "Sheet",
          "file_count": 49
        },
        {
          "fixture_type": "Code",
          "file_count": 46
        },
        {
          "fixture_type": "HTML",
          "file_count": 31
        },
        {
          "fixture_type": "Other",
          "file_count": 23
        },
        {
          "fixture_type": "Slides",
          "file_count": 19
        },
        {
          "fixture_type": "Archive/package",
          "file_count": 18
        },
        {
          "fixture_type": "TXT",
          "file_count": 10
        },
        {
          "fixture_type": "Skill/package",
          "file_count": 8
        },
        {
          "fixture_type": "JSON",
          "file_count": 1
        }
      ],
      "fields": {
        "label": "fixture_type",
        "value": "file_count"
      },
      "unit": "deduplicated input files"
    },
    "D_expected_deliverables": {
      "data": [
        {
          "deliverable_type": "MD",
          "requirement_count": 350
        },
        {
          "deliverable_type": "TXT",
          "requirement_count": 283
        },
        {
          "deliverable_type": "HTML",
          "requirement_count": 79
        },
        {
          "deliverable_type": "DOC/DOCX",
          "requirement_count": 54
        },
        {
          "deliverable_type": "Sheet",
          "requirement_count": 38
        },
        {
          "deliverable_type": "Slides",
          "requirement_count": 29
        },
        {
          "deliverable_type": "Other files",
          "requirement_count": 20
        },
        {
          "deliverable_type": "Image",
          "requirement_count": 11
        },
        {
          "deliverable_type": "PDF",
          "requirement_count": 6
        },
        {
          "deliverable_type": "JSON",
          "requirement_count": 6
        },
        {
          "deliverable_type": "Skill/package",
          "requirement_count": 5
        },
        {
          "deliverable_type": "Code",
          "requirement_count": 4
        },
        {
          "deliverable_type": "Archive/package",
          "requirement_count": 2
        }
      ],
      "display_data": [
        {
          "deliverable_type": "MD",
          "requirement_count": 350
        },
        {
          "deliverable_type": "TXT",
          "requirement_count": 283
        },
        {
          "deliverable_type": "HTML",
          "requirement_count": 79
        },
        {
          "deliverable_type": "DOC/DOCX",
          "requirement_count": 54
        },
        {
          "deliverable_type": "Sheet",
          "requirement_count": 38
        },
        {
          "deliverable_type": "Slides",
          "requirement_count": 29
        },
        {
          "deliverable_type": "Other files",
          "requirement_count": 20
        },
        {
          "deliverable_type": "Image",
          "requirement_count": 11
        },
        {
          "deliverable_type": "PDF",
          "requirement_count": 6
        },
        {
          "deliverable_type": "JSON",
          "requirement_count": 6
        },
        {
          "deliverable_type": "Skill/package",
          "requirement_count": 5
        },
        {
          "deliverable_type": "Code",
          "requirement_count": 4
        },
        {
          "deliverable_type": "Archive/package",
          "requirement_count": 2
        }
      ],
      "fields": {
        "label": "deliverable_type",
        "value": "requirement_count"
      },
      "unit": "requirements"
    }
  },
  "metricNotes": {
    "primaryScore": "Primary attributable-failure-zero score: text tasks use Sonnet text judge; visual tasks use Sonnet visual judge; attributable agent failures score zero; sandbox infrastructure failures are excluded.",
    "completedScore": "Average over completed judge-valid tasks.",
    "costRmb": "Agent run cost plus official primary judge costs in RMB."
  }
};
