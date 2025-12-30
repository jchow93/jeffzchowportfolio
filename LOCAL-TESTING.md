# Local Testing Guide

## 🚀 Quick Start

The development server should now be running. Open your browser and visit:

**http://localhost:3001**

## ✅ Testing Checklist

### 1. Basic Functionality

- [ ] **Page loads** - You should see the onboarding modal
- [ ] **Modal appears** - The personalization modal should be visible
- [ ] **Navigation works** - Top navigation should be visible

### 2. Test Personalization Flow

#### Test Case A: Full Personalization (LinkedIn Source)
1. Open: `http://localhost:3001/?source=linkedin`
2. Enter your first name (e.g., "John")
3. Click "Next"
4. Select a job title (e.g., "Product Leader")
5. Click "Personalize My Experience"
6. **Expected Results:**
   - Loading animation appears (2 seconds)
   - Hero section updates with personalized content
   - Featured work section shows industry-relevant projects
   - Console shows: "Backend URL configured" (in dev mode)

#### Test Case B: Skip Flow
1. Open: `http://localhost:3001/?source=resume`
2. Click "Skip" button
3. **Expected Results:**
   - Modal closes immediately
   - Shows general/default view
   - No loading animation
   - Console shows: "Backend URL configured" (in dev mode)

#### Test Case C: Direct Visit (No Source)
1. Open: `http://localhost:3001` (no query params)
2. Fill out the form or skip
3. **Expected Results:**
   - Source should be tracked as "direct"
   - Everything works normally

### 3. Test View Switching

- [ ] Click "Switch View" button (top right)
- [ ] Should toggle between Personalized and General views
- [ ] Content should update accordingly

### 4. Test Backend Integration

#### Check Browser Console (F12)
- [ ] Open browser DevTools (F12 or Cmd+Option+I)
- [ ] Go to Console tab
- [ ] Fill out the onboarding form
- [ ] **Expected:** You should see logs (in dev mode):
  - "OnboardingModal: Mapped jobTitle..."
  - "OnboardingModal: Triggering personalization..."
  - No "Failed to fetch" errors

#### Check Network Tab
1. Open DevTools → Network tab
2. Fill out the onboarding form
3. Look for a POST request to your Google Apps Script URL
4. **Expected:**
   - Status: 200 (or 302 redirect, which is normal for Google Apps Script)
   - Request payload should contain: name, jobTitle, source

### 5. Test Different Personas

Try different job titles to see different personalization:

- **Recruiter** → Should show recruiter-focused content
- **Engineer** → Should show technical/engineering content
- **Product Leader** → Should show product leadership content
- **Designer** → Should show design-focused content
- **Founder** → Should show founder-focused content

### 6. Test Security Features

#### Input Sanitization
1. Try entering malicious input in the name field:
   - `<script>alert('xss')</script>`
   - Very long text (100+ characters)
2. **Expected:** Input should be sanitized (HTML tags removed, length limited)

#### Console Logs in Production Mode
1. Build for production: `npm run build`
2. Start production server: `npm start`
3. Check console - should NOT see debug logs
4. **Expected:** Only errors (sanitized) should appear

## 🐛 Troubleshooting

### Server Won't Start

```bash
# Check if port 3001 is already in use
lsof -ti:3001

# Kill the process if needed
kill -9 $(lsof -ti:3001)

# Then restart
npm run dev
```

### Environment Variable Not Working

1. Check `.env.local` exists:
   ```bash
   cat .env.local
   ```

2. Restart the dev server (environment variables are loaded on startup)

3. Verify the URL is correct (should start with `https://script.google.com/...`)

### Backend Not Receiving Data

1. **Check Google Apps Script:**
   - Make sure the script is deployed
   - Check "Who has access" is set to "Anyone"
   - Verify the script has the correct `doPost` function

2. **Check Browser Console:**
   - Look for CORS errors
   - Check for network errors
   - Verify the request is being sent

3. **Test the webhook directly:**
   ```bash
   curl -X POST \
     https://script.google.com/macros/s/AKfycbw56yktJbL6J3z761WH-XJkpuCv8xB_ZmVWUUTIXQ-hJL5RpHtF4cyZFg59G-wvwvdbFA/exec \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","jobTitle":"Engineer","source":"test"}'
   ```

### Modal Not Appearing

- Check browser console for errors
- Try hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
- Clear browser cache

## 📊 Expected Console Output (Development Mode)

When everything is working, you should see:

```
Backend URL configured. Skipping visitor data submission.  // Only if URL not configured
OnboardingModal: Mapped jobTitle Engineer to industry tech
OnboardingModal: Triggering personalization with data: {name: "...", jobTitle: "...", industry: "..."}
ProjectsSection: Setting featured work for industry: tech
ProjectsSection: Featured work projects: [...]
```

## 🎯 Quick Test URLs

- **LinkedIn Source:** `http://localhost:3001/?source=linkedin`
- **Resume Source:** `http://localhost:3001/?source=resume`
- **Direct Visit:** `http://localhost:3001`
- **With Name Pre-filled (for testing):** `http://localhost:3001/?source=linkedin&name=Test`

## ✅ Success Criteria

Your local testing is successful if:

1. ✅ Page loads without errors
2. ✅ Onboarding modal appears and works
3. ✅ Personalization updates content correctly
4. ✅ Backend receives data (check Google Sheet)
5. ✅ No console errors (except expected dev logs)
6. ✅ All personas show different content
7. ✅ View switching works
8. ✅ Input sanitization works (no XSS)

## 🚀 Next Steps After Testing

Once local testing passes:

1. Build for production: `npm run build`
2. Test production build: `npm start`
3. Deploy to Vercel
4. Set environment variables in Vercel dashboard
5. Test on production URL

Happy testing! 🎉

