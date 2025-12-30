# Security Measures

This document outlines the security measures implemented in the portfolio website.

## ✅ Environment Variables

- **`.env.local`** is properly configured and **excluded from git** (via `.gitignore`)
- The `NEXT_PUBLIC_BACKEND_URL` is intentionally prefixed with `NEXT_PUBLIC_` because it needs to be accessible from the client-side (browser)
- This is safe because:
  - It's a public webhook URL (Google Apps Script)
  - It's designed to be called from client-side code
  - No sensitive credentials are exposed

## ✅ Input Sanitization

All user input is sanitized before being sent to the backend:

- **Name**: Limited to 50 characters, HTML/script tags removed
- **Job Title**: Limited to 50 characters, HTML/script tags removed
- **Industry**: Limited to 50 characters, HTML/script tags removed
- **Source**: Whitelisted to only allow: `linkedin`, `resume`, or `direct`

This prevents:
- XSS (Cross-Site Scripting) attacks
- Injection attacks
- Data overflow issues

## ✅ Secure Logging

A secure logging utility (`lib/logger.ts`) has been implemented:

- **Development mode**: All logs are shown (for debugging)
- **Production mode**: 
  - `console.log()` and `console.warn()` are completely disabled
  - `console.error()` only shows sanitized error messages (no full objects)
  - Prevents leaking sensitive information in production

## ✅ Error Handling

- All API calls have proper error handling
- Errors fail silently to not interrupt user experience
- No sensitive error details are exposed to users

## ✅ No Sensitive Data Storage

- No API keys or secrets are stored in the codebase
- No authentication tokens are stored client-side
- Personalization data is only stored in React state (not persisted)

## ✅ CORS & Backend Security

- The Google Apps Script webhook should be configured with:
  - **"Who has access"**: Set to "Anyone" (required for public webhook)
  - **Input validation**: Handled by the Apps Script code
  - **Rate limiting**: Consider implementing in Apps Script if needed

## 🔒 Best Practices Followed

1. ✅ Environment variables in `.gitignore`
2. ✅ Input validation and sanitization
3. ✅ Secure logging (no production leaks)
4. ✅ Error handling without exposing internals
5. ✅ No client-side storage of sensitive data
6. ✅ Whitelist validation for source parameter

## 📝 Notes

- The `NEXT_PUBLIC_` prefix is **intentional** - it makes the variable available to client-side code
- This is safe because the backend URL is a public webhook endpoint
- If you need to add truly sensitive credentials (like API keys), use server-side API routes instead

## 🚀 Deployment Checklist

Before deploying to production:

- [x] `.env.local` is in `.gitignore`
- [x] Input sanitization is implemented
- [x] Secure logging is in place
- [ ] Test that production builds don't show console logs
- [ ] Verify `.env.local` is not committed to git
- [ ] Set environment variables in your hosting platform (Vercel, etc.)

