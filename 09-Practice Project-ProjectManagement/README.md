# 📋 React Project Management App – Practice Project

📁 This `README.md` belongs to the `09-Practice Project-ProjectManagement` folder.  
🧭 A reference to this folder will later be included in the root `README.md` with a link to view the deployed app.

---

A simple **React Project Management** application built with **Vite** and **Tailwind CSS**, demonstrating core React concepts such as component composition, state management, conditional rendering, and reusable UI components.

---

## ✨ Features

- 🗂 Create and manage multiple projects
- 📝 Add and delete tasks for each project
- 📅 Display formatted due dates
- ⚛️ Built with React functional components
- 🎨 Styled using Tailwind CSS
- 🖱 Interactive UI with dynamic rendering

---

## 🌐 Live Demo

🔗 (https://practice-project-bmzp.onrender.com)

---

## 📁 Project Structure

```
09-Practice Project-ProjectManagement/
├── src/
│   ├── assets/                 # Images or other static assets
│   ├── components/             # Reusable UI & feature components
│   │   ├── Button.jsx           # Custom button component
│   │   ├── Input.jsx            # Reusable input field component
│   │   ├── Modal.jsx            # Modal overlay component
│   │   ├── NewProject.jsx       # Form for creating a new project
│   │   ├── NewTask.jsx          # Input & button to add a new task
│   │   ├── NoProjectSelected.jsx# Placeholder when no project is selected
│   │   ├── ProjectSidebar.jsx   # Sidebar listing all projects
│   │   ├── SelectedProject.jsx  # Displays selected project details & tasks
│   │   └── Tasks.jsx            # Task list for a selected project
│   ├── App.jsx                  # Main app component with state management
│   ├── index.css                # Global styles (Tailwind CSS)
│   ├── main.jsx                 # React entry point
├── public/                      # Static files served as-is
├── index.html                   # Main HTML template
├── package.json                 # Dependencies & npm scripts
├── package-lock.json            # Dependency lock file
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── vite.config.js
```

---

## 🛠️ Run Locally

### 1. 🛳️ Clone the repository

```bash
    git clone https://github.com/miARTre/react-path.git
    cd 09-Practice Project-ProjectManagement
```

### 2. 📦 Install dependencies

```bash
    npm install
```

### 3. ▶️ Start development server

```bash
    npm run dev
```

---

## 🚀 Deployment on Render

Use these settings on Render:

| Setting           | Value                                 |
| ----------------- | ------------------------------------- |
| Build Command     | npm run build                         |
| Publish Directory | dist                                  |
| Root Directory    | 09-Practice Project-ProjectManagement |

---

## 👨‍💻 Author

Created by [miARTre](https://github.com/miARTre)  
Built during my React learning journey 💜
