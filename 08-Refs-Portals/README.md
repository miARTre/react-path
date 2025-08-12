📁 This `README.md` belongs to the `08-Refs-Portals` folder.  
🧭 A reference to this folder will later be included in the root `README.md` with a link to view the deployed app.

---

A modern React + Vite application demonstrating **`useRef`**, **`useImperativeHandle`**, and **React Portals** to control component behavior (like opening dialogs) imperatively from parent components.

---

## ✨ Features

- ⚛️ Built with React functional components
- 🪝 Advanced hook usage: `useRef` & `useImperativeHandle`
- 🪟 Modal rendered with **React Portals**
- ⏲️ Timer challenge with scoring system
- 📦 Modular architecture with reusable components

---

## 🌐 Live Demo

🔗 https://timer-challenge.onrender.com

---

## 📁 Project Structure

```
08-Refs-Portals/
├── src/
│   ├── assets/             # Images or static assets
│   ├── components/         # Reusable components
│   │   ├── Player.jsx
│   │   ├── ResultModal.jsx
│   │   └── TimerChallenge.jsx
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles
│   ├── main.jsx            # React entry point
├── public/                 # Static assets
├── index.html
├── package.json            # Dependencies & scripts
├── package-lock.json
├── vite.config.js          # Vite configuration
```
---

## 🛠️ Run Locally

### 1. 🛳️ Clone the repository
```bash
    git clone https://github.com/miARTre/react-path/tree/main/08-Refs-Portals
    cd 08-Refs-Portals
```
### 2. 📦 Install dependencies
``` bash
    npm install
```

### 3. ▶️ Start development server
```bash
    npm run dev
```
---

## 🚀 Deployment on Render

Use these settings on Render:

| Setting           | Value                |
| ----------------- | -------------------- |
| Build Command     | npm run build        |
| Publish Directory | dist                 |
| Root Directory    | 08-Refs-Portals      |

---

## 👨‍💻 Author

Created by [miARTre](https://github.com/miARTre)   
Built during my React learning journey 💜
