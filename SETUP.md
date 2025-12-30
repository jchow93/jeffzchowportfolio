# Quick Setup Guide

## Step 1: Install Dependencies

```bash
cd portfolio-site
npm install
```

## Step 2: Configure Backend (Optional)

Create `.env.local` file:

```env
NEXT_PUBLIC_BACKEND_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace with your Google Apps Script URL from the backend setup guide.

## Step 3: Update Your Email

Edit `components/Navigation.tsx`:
- Find `jeff@example.com`
- Replace with your actual email

## Step 4: Run Development Server

```bash
npm run dev
```

**Server runs on port 3001** (to avoid conflicts with other apps)

Open [http://localhost:3001](http://localhost:3001)

## Step 5: Test Personalization

1. Visit `http://localhost:3000/?source=linkedin`
2. Fill out the onboarding form
3. See personalized content!

## What's Included

✅ Onboarding modal (name, company, job title, industry)
✅ Loading animation
✅ Personalized hero section
✅ Dynamic project cards
✅ Backend tracking (Google Sheets)
✅ Source tracking (LinkedIn/Resume)
✅ Minimal design (johnyvino.com style)

## Next Steps

1. Add your project images to `public/` folder
2. Update project data in `lib/contentMapper.ts`
3. Customize colors in `tailwind.config.ts`
4. Deploy to Vercel when ready!

