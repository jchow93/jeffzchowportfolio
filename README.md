# Jeff Chow Portfolio

Personalized portfolio built with Next.js, React, and Tailwind CSS.

## Features

- ✅ Industry-based personalization
- ✅ View selector dropdown (Founder, Engineer, Product Leader, Designer, Investor, General)
- ✅ Minimal, clean design (inspired by johnyvino.com)
- ✅ Responsive design

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Update Email

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
│   ├── ViewSelector.tsx  # View selector dropdown
│   ├── HeroSection.tsx   # Hero section
│   ├── ProjectsSection.tsx # Projects list
│   └── ProjectCard.tsx   # Individual project card
├── lib/
│   ├── localStorage.ts   # LocalStorage management
│   └── contentMapper.ts # Content mapping logic
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
3. Deploy!

### Other Platforms

Build the project:

```bash
npm run build
npm start
```

## License

Private project.

