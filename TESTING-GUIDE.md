# Testing Guide

## Server Running

Your portfolio is now running on **port 3001** to avoid conflicts with your other app.

## Access URLs

### Main Portfolio:
**http://localhost:3001**

### Test with Source Tracking:

**LinkedIn URL:**
```
http://localhost:3001/?source=linkedin
```

**Resume URL:**
```
http://localhost:3001/?source=resume
```

**Direct (no source):**
```
http://localhost:3001
```

---

## Testing Checklist

### 1. First Visit (Onboarding Modal)
- [ ] Open `http://localhost:3001/?source=linkedin`
- [ ] Modal should appear automatically
- [ ] Fill out form:
  - Name: "Test User"
  - Company: "Stripe"
  - Job Title: "Product Manager"
  - Industry: "Fintech / Payments"
- [ ] Click "Personalize My Experience"
- [ ] Loading animation should appear (2 seconds)
- [ ] Personalized content should show

### 2. Test Skip Functionality
- [ ] Clear browser LocalStorage (DevTools → Application → Local Storage → Clear)
- [ ] Refresh page
- [ ] Click "Skip" button
- [ ] Generic/default portfolio should show
- [ ] No modal should appear on next visit

### 3. Test Personalization
- [ ] After personalizing, check:
  - Hero headline changes based on industry
  - Projects shown match industry
  - Content is relevant

### 4. Test Source Tracking
- [ ] Visit with `?source=linkedin`
- [ ] Personalize or skip
- [ ] Check Google Sheet (if backend is set up)
- [ ] Should see "linkedin" in Source column

### 5. Test Persistence
- [ ] Personalize the portfolio
- [ ] Refresh the page
- [ ] Content should remain personalized
- [ ] Modal should NOT appear again

---

## Browser DevTools

### Check LocalStorage:
1. Open DevTools (F12 or Cmd+Option+I)
2. Go to **Application** tab (Chrome) or **Storage** tab (Firefox)
3. Click **Local Storage** → `http://localhost:3001`
4. You should see:
   - `portfolioName`
   - `portfolioCompany`
   - `portfolioJobTitle`
   - `portfolioIndustry`
   - `hasPersonalized`
   - `hasVisited`

### Clear LocalStorage (to test first visit again):
1. Right-click on Local Storage
2. Click "Clear" or delete individual items
3. Refresh page
4. Modal should appear again

---

## Common Issues

### Modal Not Appearing?
- Check LocalStorage - might have `hasVisited: true`
- Clear LocalStorage and refresh

### Content Not Updating?
- Check browser console for errors
- Verify LocalStorage has correct industry value
- Check that `personalizationUpdated` event is firing

### Backend Not Tracking?
- Check `.env.local` file has correct URL
- Check browser console for fetch errors
- Verify Google Apps Script is deployed correctly

---

## Next Steps After Testing

1. ✅ Update your email in `components/Navigation.tsx`
2. ✅ Add project images to `public/` folder
3. ✅ Update project data in `lib/contentMapper.ts`
4. ✅ Customize colors/styling
5. ✅ Set up backend tracking (if not done)
6. ✅ Deploy to Vercel

---

## Stop the Server

Press `Ctrl+C` in the terminal to stop the dev server.

