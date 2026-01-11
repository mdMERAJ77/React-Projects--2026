# Responsive Navbar (React + Tailwind CSS)

A simple **responsive navbar** built using **React** and **Tailwind CSS**.  
It includes a desktop menu and a mobile slide menu controlled using React state.

---

## 🚀 Features

- Responsive Navbar
- Desktop menu (visible above 720px)
- Mobile hamburger menu
- Toggle mobile menu using state
- Clean and minimal UI

---

## 🛠️ Tech Stack

- React
- Tailwind CSS
- React Icons

---

## 📂 Project Structure

```
src/
├── components/
│ └── Navbar.jsx
├── App.jsx
└── main.jsx

```

---

## 🧠 Concepts Used

- React `useState`
- Conditional Rendering
- Event Handling (`onClick`)
- Responsive Design (Tailwind breakpoints)
- JSX

---

## 📱 Responsive Behavior

- **Desktop (≥ 720px)**  
  - Menu links are visible
  - Hamburger icon hidden

- **Mobile (< 720px)**  
  - Menu links hidden
  - Hamburger icon visible
  - Clicking icon opens mobile menu

---

## 🧪 How It Works

1. `showMenu` state controls mobile menu visibility
2. Clicking hamburger toggles `showMenu`
3. Mobile menu renders conditionally using `{showMenu && (...)}`

---


