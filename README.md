# EnterpriseClawBench Leaderboard

Static leaderboard page for publishing EnterpriseClawBench results.

## Source Lookup Policy

The data builder follows the required three-tier lookup order:

1. Paper-copied artifacts under `/hpc_data/jczhong/frontis-bench/docs` and
   `/hpc_data/jczhong/frontis-bench/docs/emnlp_industry_outline_bundle`.
2. Original report-data artifacts under
   `/hpc_data/jczhong/frontis-bench/outputs/report_data`.
3. Original raw run artifacts under
   `/hpc_data/jczhong/frontis-bench/outputs/matrix_runs`.

The generated `ecb-data.js` records the selected tier and path in
`meta.source_tiers`.

## Regenerate Data

```bash
python3 scripts/build_ecb_data.py
```

## View Locally

The site has no build step. Open `index.html` directly, or run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
