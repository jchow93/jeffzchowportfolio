# DNS Setup Guide for Custom Domain

This guide will help you connect your custom domain to your GitHub Pages portfolio site.

## Prerequisites

- ✅ Your portfolio is deployed to GitHub Pages
- ✅ You have access to your domain registrar's DNS settings
- ✅ Your domain is registered and active

---

## Step 1: Enable GitHub Pages

1. Go to your repository: `https://github.com/jchow93/jeffzchowportfolio`
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (if not already selected)
4. Your site will be available at: `https://jchow93.github.io/jeffzchowportfolio`

---

## Step 2: Add Custom Domain in GitHub

1. In the same **Settings** → **Pages** section
2. Under **Custom domain**, enter your domain: `jeffzchow.com` (or `www.jeffzchow.com` if you prefer www)
3. Check **Enforce HTTPS** (recommended)
4. Click **Save**

**Note:** GitHub will create a `CNAME` file in your repository. This is normal and will be managed automatically.

---

## Step 3: Configure DNS Records

The DNS configuration depends on whether you want to use:
- **Apex domain** (`jeffzchow.com`) - requires A records
- **Subdomain** (`www.jeffzchow.com`) - requires CNAME record
- **Both** - requires both A and CNAME records

### Option A: Subdomain Only (www.jeffzchow.com) - EASIEST

**Recommended for beginners**

1. Go to your domain registrar's DNS management panel
2. Add a **CNAME** record:
   - **Type:** CNAME
   - **Name/Host:** `www`
   - **Value/Target:** `jchow93.github.io`
   - **TTL:** 3600 (or default)

3. Wait 5-60 minutes for DNS propagation
4. Visit `www.jeffzchow.com` to verify

### Option B: Apex Domain Only (jeffzchow.com)

1. Go to your domain registrar's DNS management panel
2. Add **4 A records** (GitHub Pages requires all 4):
   - **Type:** A
   - **Name/Host:** `@` (or leave blank, or your root domain)
   - **Value/Target:** `185.199.108.153`
   - **TTL:** 3600

   - **Type:** A
   - **Name/Host:** `@`
   - **Value/Target:** `185.199.109.153`
   - **TTL:** 3600

   - **Type:** A
   - **Name/Host:** `@`
   - **Value/Target:** `185.199.110.153`
   - **TTL:** 3600

   - **Type:** A
   - **Name/Host:** `@`
   - **Value/Target:** `185.199.111.153`
   - **TTL:** 3600

3. Wait 5-60 minutes for DNS propagation
4. Visit `jeffzchow.com` to verify

### Option C: Both Apex and Subdomain (RECOMMENDED)

This allows both `jeffzchow.com` and `www.jeffzchow.com` to work.

1. **Add A records** (for apex domain):
   - Add all 4 A records from Option B above

2. **Add CNAME record** (for www subdomain):
   - **Type:** CNAME
   - **Name/Host:** `www`
   - **Value/Target:** `jchow93.github.io`
   - **TTL:** 3600

3. Wait 5-60 minutes for DNS propagation
4. Test both `jeffzchow.com` and `www.jeffzchow.com`

---

## Step 4: Verify DNS Configuration

### Check DNS Records

Use these tools to verify your DNS records are set correctly:

1. **DNS Checker:** https://dnschecker.org
   - Enter your domain
   - Select record type (A or CNAME)
   - Check that records appear globally

2. **Command Line:**
   ```bash
   # Check A records
   dig jeffzchow.com A
   
   # Check CNAME record
   dig www.jeffzchow.com CNAME
   ```

### Expected Results

**For A records (apex domain):**
```
jeffzchow.com.    3600    IN    A    185.199.108.153
jeffzchow.com.    3600    IN    A    185.199.109.153
jeffzchow.com.    3600    IN    A    185.199.110.153
jeffzchow.com.    3600    IN    A    185.199.111.153
```

**For CNAME record (www subdomain):**
```
www.jeffzchow.com.    3600    IN    CNAME    jchow93.github.io.
```

---

## Step 5: Wait for SSL Certificate

After DNS propagates:

1. GitHub will automatically provision an SSL certificate
2. This usually takes **10-30 minutes** after DNS is correct
3. You can check status in **Settings** → **Pages** → **Custom domain**
4. Once ready, you'll see a green checkmark ✅

---

## Step 6: Test Your Site

1. Visit your custom domain: `https://jeffzchow.com`
2. Test HTTPS: `https://jeffzchow.com` (should redirect to HTTPS if configured)
3. Test both URLs if you set up both:
   - `https://jeffzchow.com`
   - `https://www.jeffzchow.com`

---

## Common Domain Registrars - Quick Reference

### Namecheap
1. Go to **Domain List** → Select domain → **Manage** → **Advanced DNS**
2. Add records as described above

### GoDaddy
1. Go to **My Products** → **DNS** → **Manage DNS**
2. Add records in the **Records** section

### Google Domains / Squarespace Domains
1. Go to **DNS** settings
2. Add records in the **Custom records** section

### Cloudflare
1. Go to your domain → **DNS** → **Records**
2. **Important:** Set proxy status to **DNS only** (gray cloud) for GitHub Pages
3. Add records as described above

### AWS Route 53
1. Go to **Hosted zones** → Select your domain
2. Click **Create record**
3. Add records as described above

---

## Troubleshooting

### Site Not Loading After DNS Setup

1. **Check DNS propagation:**
   - Use https://dnschecker.org
   - Wait up to 48 hours for full propagation

2. **Verify GitHub Pages settings:**
   - Go to **Settings** → **Pages**
   - Ensure custom domain is listed
   - Check for any error messages

3. **Clear browser cache:**
   - Try incognito/private mode
   - Clear DNS cache: `sudo dscacheutil -flushcache` (Mac)

### SSL Certificate Not Provisioning

1. **Wait longer:** Can take up to 24 hours
2. **Check DNS:** Ensure all records are correct
3. **Remove and re-add domain** in GitHub Pages settings
4. **Contact GitHub Support** if issues persist after 24 hours

### Both www and non-www Not Working

- Ensure you've added both A records (for apex) AND CNAME (for www)
- Some registrars require different formats for apex domain (@ vs blank vs domain name)
- Check your registrar's documentation

### Redirect Issues

GitHub Pages automatically redirects:
- `http://` → `https://` (if HTTPS is enforced)
- You can configure www redirects in your domain registrar if needed

---

## Security Best Practices

1. ✅ **Always enforce HTTPS** in GitHub Pages settings
2. ✅ **Use strong DNS provider** (Cloudflare, AWS Route 53)
3. ✅ **Enable DNSSEC** if your registrar supports it
4. ✅ **Keep DNS records updated** if GitHub changes IPs (rare)

---

## Next Steps

After your domain is set up:

1. ✅ Update your portfolio URLs:
   - LinkedIn: `https://jeffzchow.com/?source=linkedin`
   - Resume: `https://jeffzchow.com/?source=resume`

2. ✅ Test all functionality:
   - Personalization modal
   - Backend tracking
   - Source parameter detection

3. ✅ Update your resume and LinkedIn profile with new URLs

---

## Need Help?

- **GitHub Pages Docs:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **DNS Issues:** Check your domain registrar's support documentation
- **GitHub Support:** https://support.github.com

---

## Quick Checklist

- [ ] GitHub Pages enabled with GitHub Actions
- [ ] Custom domain added in GitHub Pages settings
- [ ] DNS records added (A records for apex, CNAME for www)
- [ ] DNS propagation verified (dnschecker.org)
- [ ] SSL certificate provisioned (green checkmark in GitHub)
- [ ] Site accessible at custom domain
- [ ] HTTPS working correctly
- [ ] Updated portfolio URLs in resume/LinkedIn

Good luck! 🚀

