# Modern Integrity | Hairstylist Website 💇‍♀️✨

A clean, modern single-page application (SPA) built with **React**, **Vite**, and ** CSS3**, designed for hairstylists or salons to showcase services, pricing, and contact information. Responsive for both desktop and mobile users.

---

## 🚀 Tech Stack

- ⚛️ React — UI Components
- ⚡ Vite — Fast build tool and dev server
- 🎨 CSS3 — Traditional CSS framework
- 🔀 Git + GitHub — Version control and collaboration

---

## 📁 File Structure

```bash
/your-project-root
  /public
    favicon.ico
    ...
  /src
    /assets                 # images, logo, etc.
    /components             # all React components
      NavBar.jsx
      Hero.jsx
      Services.jsx
      Restoration.jsx
      OpeningHours.jsx      # NEW: Opening hours & socials
      About.jsx             # NEW: About me section
      Contact.jsx
      Footer.jsx
    App.jsx
    index.css               # global styles
    main.jsx
  .gitignore
  index.html
  package.json
  vite.config.js
  README.md
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/modernintegrity.git
cd modernintegrity
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start Tailwind CSS build

```bash
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```

### 4. Start the Vite dev server

```bash
npm run dev
```

### 5. Open in browser

Visit: [http://localhost:5173](http://localhost:5173)

---

## ✨ Features

- Mobile-first responsive layout
- Sticky navigation bar
- Modular and reusable React components
- Clean utility-first styling with Tailwind
- No backend – content is inline for static hosting

---

## 🧱 Components

- `NavBar` — Sticky navigation
- `Hero` — Intro with CTA
- `Services` — What the salon offers
- `About` — Business background or mission
- `Pricing` — Service rates
- `Contact` — Inline form or contact info
- `Footer` — Copyright and social links

---

## 📦 Deployment

You can deploy this app easily to:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- GitHub Pages (via Vite config + GitHub Actions)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).


---

## 👤 Author(s)

David Turner
