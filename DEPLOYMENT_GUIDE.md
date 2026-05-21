# 🚀 Sentinel GRC Advisory — Complete Setup & Deployment Guide

---

## 📁 FOLDER STRUCTURE

```
sentinel/
├── client/
│   ├── public/                  ← Put ALL your images & icons here
│   │   ├── Sentinel LOGO 12.png
│   │   ├── Sentinel LOGO 2.png
│   │   ├── unsplash_B7PClvzYtkU.png
│   │   ├── unsplash_PhYq704ffdA.png
│   │   ├── unsplash_-0xCCPIbl3M.png
│   │   ├── unsplash_QBpZGqEMsKg.png
│   │   ├── 9d1e6076e0ea6c5065dedbfd4d998de8f7b6f1f8.jpg
│   │   ├── section career.png
│   │   ├── governance.png
│   │   ├── risk.png
│   │   ├── gcp_web-risk.png
│   │   ├── business.png
│   │   ├── assessment.png
│   │   ├── strategy.png
│   │   ├── implementation.png
│   │   ├── monitoring.png
│   │   ├── governance_img.png    ← rename your governance services image
│   │   ├── risk_management.png
│   │   ├── compliance.png
│   │   ├── internal.png
│   │   ├── GRC.png
│   │   ├── TRAINING.png
│   │   ├── house.png
│   │   ├── NGOs.png
│   │   ├── clients.png
│   │   ├── fintech.png
│   │   ├── startups.png
│   │   ├── coperate.png
│   │   ├── mission.png
│   │   ├── mage_light-bulb.png
│   │   ├── integrity.png
│   │   ├── innovation.png
│   │   ├── collaboration.png
│   │   ├── excellence.png
│   │   ├── empowerment.png
│   │   ├── services.png
│   │   ├── Rectangle 19.png
│   │   ├── Rectangle 20.png
│   │   ├── Rectangle 28.png
│   │   ├── Rectangle 29.png
│   │   ├── Rectangle 30.png
│   │   ├── Rectangle 31.png
│   │   ├── Rectangle 32.png
│   │   ├── work.png
│   │   └── application.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── HeroSections/
│   │   │   │   ├── HomeHero.tsx
│   │   │   │   ├── AboutHero.tsx
│   │   │   │   ├── ServicesHero.tsx
│   │   │   │   ├── ContactHero.tsx
│   │   │   │   └── CareersHero.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Ready.tsx
│   │   ├── layout/
│   │   │   └── RootLayout.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Careers.tsx
│   │   │   └── Error.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vercel.json
│
└── server/
    ├── src/
    │   ├── controllers/
    │   │   └── contactController.ts
    │   ├── middleware/
    │   │   └── emailService.ts
    │   ├── routes/
    │   │   └── contact.ts
    │   ├── types/
    │   │   └── contact.ts
    │   └── index.ts
    ├── package.json
    ├── tsconfig.json
    └── .env.example
```

---

## 🖥️ STEP 1 — Local Development Setup

### 1a. Copy your images
Move ALL image and icon files from your old project into `client/public/`.
Note: The Services page expects `governance_img.png` for the Governance Advisory card image.
      Rename your existing `governance.png` (the image, not the icon) to `governance_img.png`.

### 1b. Install client dependencies
```bash
cd client
npm install
```

### 1c. Install server dependencies
```bash
cd ../server
npm install
```

### 1d. Set up server environment variables
```bash
# Inside the server folder:
cp .env.example .env
```
Then open `.env` and fill in:
```
PORT=5000
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=sentinel.grcadvisory@gmail.com
CLIENT_URL=http://localhost:5173
```

⚠️ IMPORTANT: For EMAIL_PASS, you need a Gmail App Password (NOT your real Gmail password).
How to get one:
1. Go to myaccount.google.com
2. Security → 2-Step Verification → Enable it
3. Security → App Passwords
4. Select "Mail" + "Other" → name it "Sentinel Website"
5. Copy the 16-character password into EMAIL_PASS

### 1e. Create client .env.local
```bash
# Inside the client folder, create a file called .env.local:
VITE_API_URL=http://localhost:5000
```

### 1f. Run both servers
```bash
# Terminal 1 — start the React client
cd client
npm run dev
# Opens at http://localhost:5173

# Terminal 2 — start the Express server
cd server
npm run dev
# Runs at http://localhost:5000
```

---

## 📦 STEP 2 — Push to GitHub

```bash
# From the sentinel/ root folder:
git init
git add .
git commit -m "Initial commit: Sentinel GRC Advisory MERN TypeScript"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/sentinel-grc.git
git branch -M main
git push -u origin main
```

---

## 🌐 STEP 3 — Deploy Server to Render

1. Go to https://render.com → Sign up / Log in
2. Click "New +" → "Web Service"
3. Connect your GitHub account and select your repo
4. Configure:
   - **Name**: sentinel-server
   - **Root Directory**: server
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. Add Environment Variables (click "Environment"):
   ```
   PORT=5000
   EMAIL_USER=your_gmail@gmail.com
   EMAIL_PASS=your_16_char_app_password
   EMAIL_TO=sentinel.grcadvisory@gmail.com
   CLIENT_URL=https://your-vercel-url.vercel.app
   ```
6. Click "Create Web Service"
7. Wait for deployment. Copy your Render URL (e.g. https://sentinel-server.onrender.com)

---

## 🌍 STEP 4 — Deploy Client to Vercel

1. Go to https://vercel.com → Sign up / Log in with GitHub
2. Click "New Project" → Import your GitHub repo
3. Configure:
   - **Root Directory**: client
   - **Framework Preset**: Vite
4. Add Environment Variable:
   ```
   VITE_API_URL=https://sentinel-server.onrender.com
   ```
   (Use YOUR actual Render URL from Step 3)
5. Click "Deploy"
6. Copy your Vercel URL (e.g. https://sentinel-grc.vercel.app)

### 4a. Update CORS on Render
Go back to Render → Your server → Environment:
- Update `CLIENT_URL` to your actual Vercel URL
- Click "Save" (server will redeploy automatically)

---

## ✅ STEP 5 — Test Everything

1. Visit your Vercel URL
2. Navigate to the Contact page
3. Fill in the form and submit
4. Check sentinel.grcadvisory@gmail.com for the notification email
5. Check that the sender's email received an auto-reply

---

## 🔧 DESIGN NOTES & FIXES MADE

1. **Responsive Navbar**: Added hamburger menu for mobile/tablet with smooth dropdown animation.
2. **All pages fully responsive**: Works on mobile (320px+), tablet (768px+), 1366px, and 1440px.
3. **1366px = 1440px**: Both screens use the same `max-w-[1440px]` container — no difference.
4. **Animations added**: fadeInUp, fadeInLeft, fadeInRight, scaleIn on hero sections and cards.
5. **Card hover effects**: Subtle lift on all service/value cards.
6. **Contact form fix**: Business Hours text was broken — fixed spacing and line breaks.
7. **Footer links**: Now properly point to correct routes.
8. **Footer copyright year**: Automatically updates using `new Date().getFullYear()`.
9. **Error page**: Proper 404 page added instead of empty div.
10. **Scroll to top**: Page scrolls to top on every route change.
11. **Auto-reply email**: Contact form sends a professional confirmation email back to the user.
