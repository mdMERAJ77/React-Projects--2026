# Project: Text Input → Live Preview

This project demonstrates a **Text Input → Live Preview** functionality in React using **props** and **useState**.

## Folder Structure

```
src/
 ├── components/
 │    ├── TextInput.jsx
 │    └── TextPreview.jsx
 └── App.jsx
```

## How It Works

- `App.jsx` has a **state variable** `text` created using `useState`.
- `TextInput` receives **`setText` as a prop** to update parent state.
- `TextPreview` receives **`text` as a prop** to display live input.
- Flow: **Parent → Child (props), Child → Parent (setState function)**

## Additional Features

- **Tailwind CSS** for better UI
- Fully responsive
