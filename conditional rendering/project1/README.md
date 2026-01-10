# Popup Modal (React)

A simple **React popup/modal component** example demonstrating **conditional rendering**, **state management**, and **reusable components**.

This project shows how to open and close different popups (Delete & Edit) using a **single reusable ********`Popup`******** component**.

---

## 🚀 Features

* Reusable `Popup` component
* Separate popups for **Delete** and **Edit** actions
* Controlled using React `useState`
* Conditional rendering using boolean state
* Simple and clean UI (Tailwind CSS classes)

---

## 🧠 Concepts Used

* React Functional Components
* `useState` Hook
* Props (Parent → Child)
* Event Handling (`onClick`)
* Conditional Rendering (`&&`)

---

## 📂 Project Structure

```
src/
│── App.jsx
│── components/
│   └── Popup.jsx
```

---

## 🧩 App Component (Parent)

* Manages popup state
* Controls **which popup is open**
* Passes state and setter function to `Popup`

### State Used

* `popupDelete` → controls Delete popup
* `popupEdit` → controls Edit popup

### Flow

1. User clicks **Delete** or **Edit** button
2. Corresponding state becomes `true`
3. `Popup` component renders
4. Clicking **Close** sets state back to `false`

---

## 🪟 Popup Component (Child)

### Props

| Prop          | Type     | Description                  |
| ------------- | -------- | ---------------------------- |
| `popup`       | boolean  | Controls visibility of popup |
| `setPopup`    | function | Closes popup                 |
| `title`       | string   | Action name (delete/edit)    |
| `description` | string   | Text shown in heading        |

### Behavior

* Popup renders **only when ****`popup === true`**
* Overlay covers full screen
* Close button hides popup using `setPopup(false)`

---

## 🧪 Example UI Flow

* Click **Delete** → Delete confirmation popup opens
* Click **Edit** → Edit confirmation popup opens
* Click **Close** → Popup closes

---

## 🎯 Learning Outcome

By building this project, i learn:

* How to reuse a single component for multiple actions
* How parent controls child behavior using props
* How conditional rendering works in real projects
* How modal/popups are implemented in React

---
## 📸 Screenshots
### Home Page
![Home page](./src/assets//Screenshot%202026-01-10%20074655.png)

### Delete Popup
![Delete Popup](./src/assets/Screenshot%202026-01-10%20074724.png)

### Edit Popup
![Edit Popup](./src/assets/Screenshot%202026-01-10%20074749.png)


## 📌 Future Improvements

* Add keyboard support (ESC to close)
* Add animations
* Handle Yes / No button actions
* Convert popup logic to a custom hook

---

## 🧑‍💻 Author : MERAJ

Built for **React practice (functions, events & state only)** 🚀

---

Happy Coding! 😊
