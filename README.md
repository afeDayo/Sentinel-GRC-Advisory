# Sentinel GRC Advisory — MERN Stack Website

## Folder Structure
```
sentinel/
├── client/          ← React + TypeScript + Vite + Tailwind (deploy to Vercel)
└── server/          ← Express + TypeScript + Nodemailer (deploy to Render)
```

## Quick Start

### 1. Install dependencies
```bash
cd client && npm install
cd ../server && npm install
```

### 2. Set up environment variables

**server/.env**
```
PORT=5000
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=sentinel.grcadvisory@gmail.com
CLIENT_URL=http://localhost:5173
```

### 3. Run development servers
```bash
# Terminal 1 — client
cd client && npm run dev

# Terminal 2 — server
cd server && npm run dev
```

## Deployment

### Client → Vercel
1. Push project to GitHub
2. Go to vercel.com → New Project → Import your repo
3. Set Root Directory to `client`
4. Add env variable: `VITE_API_URL=https://your-render-url.onrender.com`
5. Deploy

### Server → Render
1. Go to render.com → New Web Service → Connect your GitHub repo
2. Set Root Directory to `server`
3. Build Command: `npm install && npm run build`
4. Start Command: `npm start`
5. Add all environment variables from server/.env
6. Deploy

### GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/sentinel-grc.git
git push -u origin main
```
