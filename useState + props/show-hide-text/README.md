

# Show / Hide Text (React)

A simple React project created to practice **useState**, **props**, and **conditional rendering** using small components.

---

## 🚀 Concepts Used

* React `useState`
* Props (Parent → Child)
* Conditional Rendering
* Event Handling
* Component-based approach

---

## 🧠 Project Explanation

In this project, a `show` state is created in the **App.jsx** component using the `useState` hook.
The initial value of the state is set to `false`.

Two components are created inside a `components` folder:

* **ShowHideButton**
* **ShowHideDisplay**

Both components are called inside **App.jsx**.

The `show` state is passed to **ShowHideDisplay** to control whether content should be displayed or not.

The **ShowHideButton** component receives both `show` and `setShow` as props.
Inside this component, a function is created that toggles the current value of `show`:

* `false` becomes `true`
* `true` becomes `false`

This toggle happens on every button click.

A ternary operator is used:

* To change the button text between **Show** and **Hide**
* To control what is displayed on the screen

Whenever the state changes, React automatically re-renders the UI.

---

## 🔄 Data Flow (Simple)

User clicks the button →
Child component requests state change →
Parent state updates →
UI updates automatically

---

## 🎨 Styling

* Pure CSS is used for styling
* Tailwind CSS is **not used**
* Focus is on logic, not design

---

## ✅ Learning Outcome

* Learned how state is managed in the parent component
* Understood how child components update parent state
* Practiced conditional rendering
* Improved understanding of React re-rendering

---

## 📌 Author

Meraj

---

