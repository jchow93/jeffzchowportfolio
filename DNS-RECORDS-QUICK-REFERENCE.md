# DNS Records Quick Reference for jeffzchow.com

## Recommended Setup: Both Apex and www

This allows both `jeffzchow.com` and `www.jeffzchow.com` to work.

---

## DNS Records to Add

### For jeffzchow.com (Apex Domain)

Add **4 A records** with these exact values:

| Type | Name/Host | Value/Target | TTL |
|------|-----------|--------------|-----|
| A | `@` (or blank) | `185.199.108.153` | 3600 |
| A | `@` (or blank) | `185.199.109.153` | 3600 |
| A | `@` (or blank) | `185.199.110.153` | 3600 |
| A | `@` (or blank) | `185.199.111.153` | 3600 |

**Note:** Some registrars use `@`, some use blank, some use `jeffzchow.com` for the apex domain. Check your registrar's format.

### For www.jeffzchow.com (Subdomain)

Add **1 CNAME record**:

| Type | Name/Host | Value/Target | TTL |
|------|-----------|--------------|-----|
| CNAME | `www` | `jchow93.github.io` | 3600 |

---

## Alternative: www Only (Easier)

If you only want `www.jeffzchow.com` to work:

Add **1 CNAME record**:

| Type | Name/Host | Value/Target | TTL |
|------|-----------|--------------|-----|
| CNAME | `www` | `jchow93.github.io` | 3600 |

Then in GitHub Pages settings, use `www.jeffzchow.com` as your custom domain.

---

## After Adding DNS Records

1. **Wait 5-60 minutes** for DNS propagation
2. **Verify** with: https://dnschecker.org
   - Check A records for `jeffzchow.com`
   - Check CNAME record for `www.jeffzchow.com`
3. **GitHub will provision SSL** automatically (10-30 minutes after DNS is correct)
4. **Test** your site at `https://jeffzchow.com`

---

## Your Portfolio URLs

After setup, use these URLs:

- **LinkedIn:** `https://jeffzchow.com/?source=linkedin`
- **Resume:** `https://jeffzchow.com/?source=resume`
- **Direct:** `https://jeffzchow.com`

---

## Need Help?

See `DNS-SETUP-GUIDE.md` for detailed instructions for your specific domain registrar.

