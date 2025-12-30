# Jeff Chow Portfolio

Personalized portfolio built with Next.js, React, and Tailwind CSS.

## Features

- ✅ Industry-based personalization
- ✅ Visitor tracking (Google Sheets backend)
- ✅ Source tracking (LinkedIn vs Resume)
- ✅ Loading animations
- ✅ Minimal, clean design (inspired by johnyvino.com)
- ✅ Responsive design

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Backend URL

Create a `.env.local` file:

```env
NEXT_PUBLIC_BACKEND_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with your Google Apps Script webhook URL.

### 3. Update Email

Edit `components/Navigation.tsx` and replace `jeff@example.com` with your actual email.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-site/
├── app/
│   ├── page.tsx          # Main page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Top navigation
│   ├── OnboardingModal.tsx # Personalization modal
│   ├── LoadingAnimation.tsx # Loading state
│   ├── HeroSection.tsx   # Hero section
│   ├── ProjectsSection.tsx # Projects list
│   └── ProjectCard.tsx   # Individual project card
├── lib/
│   ├── localStorage.ts   # LocalStorage management
│   ├── contentMapper.ts # Content mapping logic
│   └── api.ts           # Backend API calls
└── package.json
```

## Customization

### Add Projects

Edit `lib/contentMapper.ts` and add projects to the `projects` array.

### Update Content

- Headlines: Edit `contentMap` in `lib/contentMapper.ts`
- Personal info: Edit `components/Navigation.tsx` and `app/layout.tsx`

### Styling

Styles are in Tailwind CSS. Edit `tailwind.config.ts` for theme customization.

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variable: `NEXT_PUBLIC_BACKEND_URL`
4. Deploy!

### Other Platforms

Build the project:

```bash
npm run build
npm start
```

## URLs for Tracking

- **LinkedIn**: `https://yourportfolio.com/?source=linkedin`
- **Resume**: `https://yourportfolio.com/?source=resume`
- **Direct**: `https://yourportfolio.com`

## License

Private project.

