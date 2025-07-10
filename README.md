# 🛒 Simple React E-commerce App

A simple, responsive E-commerce frontend application built using **React**, featuring product listing, filtering, cart functionality via **Context API**, and seamless navigation with **React Router**.

---

## 📌 Features

- 🏠 **Home Page**: Displays a list of products with filtering and search
- 🔍 **Product Details Page**: Detailed view of individual product
- 🛒 **Cart Page**: Add/remove items, view cart with quantity and total price
- ℹ️ **About Page**: Static informational page about the store/project
- ❌ **404 Page**: Shown for invalid routes
- 🎯 **Responsive Design**: Mobile-friendly and easy navigation

---

## ⚙️ Tech Stack

- **React** (Functional Components + Hooks)
- **React Context API** – For managing cart state
- **React Router DOM** – For client-side routing
- **Tailwind CSS** _(or CSS Modules)_ – For optional styling (customizable)

---

## 📁 Project Structure

```bash
simple-react-ecommerce/
├── public/
│   └── ...
├── src/
│   ├── components/
│   ├── context/         # Context API for Cart
│   ├── pages/           # Home, Product, About, Cart, NotFound
│   ├── data/            # Static product data (JSON or JS file)
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js   # If using Tailwind CSS
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/simple-react-ecommerce.git
cd simple-react-ecommerce
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will run on [http://localhost:5173](http://localhost:5173) by default.

### Live WebSite Link: [https://interactive-react-e-commerce.netlify.app/](https://interactive-react-e-commerce.netlify.app/).

---

## 📌 Pages Overview

### `/` Home

- List of products with image, title, price, short description
- Filter dropdown: "Low to High", "High to Low"
- Search by title or description
- "Add to Cart" button

### `/product/:id` Product Details

- Full product information with "Add to Cart"
- Graceful fallback for invalid product IDs

### `/about` About

- Static page about the store/project

### `/cart` Cart Page

- Shows all items in cart with:

  - Image, title, price, quantity
  - Remove button
  - Total cart value

### `*` 404 Not Found

- Displayed for invalid routes

---

## 📦 Functional Highlights

- 🛒 Cart state managed using **React Context API**
- 🔄 Quantity updates and total cart price recalculated dynamically
- 📌 Cart persists only during session (no localStorage)
- 📱 Fully responsive design
- ⚙️ Modular, maintainable code using reusable components

---

## 🧪 Requirements Recap

### Functional

- Cart: Add/Remove items, calculate total
- Search & Filter
- Route-based page rendering (React Router)

### Non-functional

- Mobile responsive
- Smooth navigation
- Component-based, clean architecture

---

## 📝 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

Built for learning purposes using **React**, **Context API**, and **React Router**.

```

---

Let me know if you also want:
- A `LICENSE` file (MIT or other)
- `package.json` dependencies
- Or a ZIP of a full starter boilerplate for this project.
```

```

```
