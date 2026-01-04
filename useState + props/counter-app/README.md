# Counter App (React)

A simple counter application built using React to practice **state management** and **props communication**.

---

## 🚀 Concepts Used
- React `useState`
- Props (Parent → Child)
- Event Handling (`onClick`)
- Component-based structure

---

## 📂 Project Structure

# Counter App (React)

A simple counter application built using React to practice **state management** and **props communication**.

---

## 🚀 Concepts Used
- React `useState`
- Props (Parent → Child)
- Event Handling (`onClick`)
- Component-based structure

---

## 📂 Project Structure
```
counter-app/
├── src/
│ ├── components/
│ │ ├── CounterButtons.jsx
│ │ └── CounterDisplay.jsx
│ └── App.jsx
---

## 🧠 How It Works

- The `count` state is created in **App.jsx** using `useState`.
- The `setCount` function is passed to `CounterButtons` as a prop.
- `CounterButtons` contains:
  - Increment
  - Decrement
  - Reset functions
- Button clicks update the parent state using `setCount`.
- The updated `count` value is passed to `CounterDisplay` via props.
- UI automatically re-renders when the state changes.

---

## 🔄 Data Flow
```
User Click
→ CounterButtons
→ setCount (Parent)
→ count state updates
→ CounterDisplay re-renders


---

## 🎨 Styling

- Normal CSS is used for styling.
- Tailwind CSS is **not** used in this project.

---

## ✅ Learning Outcome

- Understood how **state lives in the parent component**
- Learned how **child components update parent state**
- Practiced **props-based data flow**
- Improved understanding of **React re-rendering**

---

## 📌 Author
Meraj  
