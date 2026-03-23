# What's Cooking 🍳
### Fridge to Fork — Your AI Recipe App

---

## Deploy in 10 minutes (free)

### Step 1 — Get your free Anthropic API key
1. Go to https://console.anthropic.com
2. Sign up (free)
3. Click **API Keys** → **Create Key**
4. Copy the key (starts with `sk-ant-...`)

### Step 2 — Put the code on GitHub
1. Go to https://github.com and sign up (free)
2. Click the **+** icon → **New repository**
3. Name it `whats-cooking`, make it **Private**, click **Create**
4. Upload all files from this folder (drag & drop onto the page)
5. Click **Commit changes**

### Step 3 — Deploy to Vercel (free)
1. Go to https://vercel.com and sign up with your GitHub account
2. Click **Add New Project**
3. Select your `whats-cooking` repository → click **Import**
4. Before clicking Deploy, click **Environment Variables** and add:
   - Name: `ANTHROPIC_API_KEY`
   - Value: your key from Step 1
5. Click **Deploy** 🚀

That's it! Vercel gives you a free URL like `whats-cooking.vercel.app` to share with friends & family.

---

## Files in this project

```
whats-cooking/
├── index.html        ← The full app (UI, design, interactions)
├── api/
│   ├── recipes.js    ← AI recipe generation
│   └── scan.js       ← AI fridge photo scanning
├── vercel.json       ← Vercel routing config
└── README.md         ← This file
```

## Features
- Add ingredients manually or by typing
- Quick-add common ingredients with one tap
- Photo scan your fridge (mobile camera or upload)
- AI generates 3 recipes with full instructions & macros
- Filter by cuisine, time, difficulty, nutritional goal
- Bookmark favourite recipes (saved in your browser)
- Works on mobile and desktop

## Cost
- Vercel hosting: **Free**
- Anthropic API: **Free credits included**, then ~$0.001 per recipe search (essentially free for personal use)
