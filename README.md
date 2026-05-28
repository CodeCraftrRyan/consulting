# consulting

Consulting website for Ryan Haviland.

## Local preview

Open index.html directly in your browser, or run a quick static server:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow at .github/workflows/deploy-pages.yml.

One-time setup in GitHub:

1. Go to Settings > Pages in this repository.
2. Under Build and deployment, set Source to GitHub Actions.

Publish updates:

```bash
git add .
git commit -m "Publish consulting website"
git push origin main
```

After the workflow completes, your site will be live at:

https://codecraftryan.github.io/consulting/
