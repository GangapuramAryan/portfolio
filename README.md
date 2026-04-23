# Gangapuram Aryan — Portfolio

A dark, sleek React portfolio with React Router, built for local development and GitHub Pages deployment.

## 🚀 Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── App.js                  # Routing (HashRouter)
├── index.js                # Entry point
├── index.css               # Global styles, CSS variables, layout
├── components/
│   ├── Navbar.js           # Fixed nav with NavLink active states
│   └── Footer.js
└── pages/
    ├── Home.js             # Profile, About, Skills, Experience
    ├── Home.css
    ├── Projects.js         # Projects with filter + expand
    └── Projects.css
```

---

## 🖼️ Adding Your Photo

1. Add your photo to `public/` — e.g. `public/photo.jpg`
2. In `src/pages/Home.js`, find `<div className="avatar-placeholder">` and replace with:

```jsx
<img src={process.env.PUBLIC_URL + '/photo.jpg'} alt="Aryan" className="avatar-img" />
```

3. Add this to `Home.css`:

```css
.avatar-img {
  width: 90px; height: 90px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 1;
}
```

---

## 🌐 Deploy to GitHub Pages

```bash
# 1. Install gh-pages (already in package.json devDependencies)
npm install

# 2. Push your code to GitHub
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/GangapuramAryan/portfolio.git
git push -u origin main

# 3. Deploy
npm run deploy
```

Then go to **GitHub → Settings → Pages → Branch: gh-pages** and save.

Your site will be live at: **https://GangapuramAryan.github.io/portfolio**

---

## ✏️ Customizing Projects

Edit the `projects` array in `src/pages/Projects.js` to add more projects:

```js
{
  id: 4,
  title: 'Your Project Title',
  subtitle: 'Category · Context',
  description: 'Short description shown by default.',
  longDesc: ['Bullet 1', 'Bullet 2', 'Bullet 3'],
  tags: ['Python', 'FastAPI'],
  category: 'Backend', // 'ML' or 'Backend' — used by filter
  github: 'https://github.com/GangapuramAryan/your-repo',
  status: 'Completed',
  statusColor: 'green', // 'green', 'accent', or 'purple'
}
```
