# GitHub Pages Deployment Guide

Quick guide to deploy your portfolio to GitHub Pages with a custom domain.

## Quick Start

### 1. Push Your Code to GitHub

```bash
cd portfolio-site
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to: `https://github.com/jchow93/jeffzchowportfolio/settings/pages`
2. Under **Source**, select **GitHub Actions**
3. Your site will deploy automatically on the next push

### 3. Set Up Custom Domain

1. In **Settings** → **Pages** → **Custom domain**
2. Enter your domain: `jeffzchow.com`
3. Check **Enforce HTTPS**
4. Click **Save**

### 4. Configure DNS

See `DNS-SETUP-GUIDE.md` for detailed DNS instructions.

**Quick version for jeffzchow.com:**
- For `www.jeffzchow.com`: Add CNAME record pointing to `jchow93.github.io`
- For `jeffzchow.com`: Add 4 A records with GitHub Pages IPs (see DNS guide)

### 5. Add Environment Variable (Optional)

If you're using the backend tracking:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `NEXT_PUBLIC_BACKEND_URL`
4. Value: Your Google Apps Script URL
5. Click **Add secret**

The GitHub Actions workflow will automatically use this during build.

---

## How It Works

1. **GitHub Actions** automatically builds your site when you push to `main`
2. **Static export** creates an `out/` folder with all static files
3. **GitHub Pages** serves the files from the `out/` folder
4. **Custom domain** points to GitHub Pages via DNS

---

## Testing Locally

Before deploying, test the static export:

```bash
npm run build
```

This creates an `out/` folder. You can test it with a local server:

```bash
# Using Python
python3 -m http.server 8000 -d out

# Using Node.js (if you have http-server installed)
npx http-server out -p 8000
```

Visit `http://localhost:8000` to preview.

---

## Deployment Status

Check deployment status:
- **Actions tab:** `https://github.com/jchow93/jeffzchowportfolio/actions`
- **Pages settings:** `https://github.com/jchow93/jeffzchowportfolio/settings/pages`

---

## Troubleshooting

### Build Fails

- Check **Actions** tab for error messages
- Ensure all dependencies are in `package.json`
- Verify `next.config.js` has `output: 'export'`

### Site Not Updating

- Wait a few minutes for deployment to complete
- Check Actions tab for deployment status
- Clear browser cache

### Custom Domain Not Working

- See `DNS-SETUP-GUIDE.md` for detailed troubleshooting
- Verify DNS records with https://dnschecker.org
- Wait up to 48 hours for DNS propagation

---

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Enable GitHub Pages
3. ✅ Set up custom domain
4. ✅ Configure DNS records
5. ✅ Test your site
6. ✅ Update URLs in resume/LinkedIn

For detailed DNS setup, see `DNS-SETUP-GUIDE.md`.

