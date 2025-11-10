Project Structure

Use backticks around the folder structure so it looks like code:

**Project Structure**
```
ECommerce-Website/
│
├── client/              # Frontend (React + Vite)
│   ├── src/
│   └── public/
│
├── server/              # Backend (Node.js + Express)
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
└── docs/                # Documentation (optional)
```
Step 1: Create Project Structure

Use bash or powershell for terminal commands (looks colorful on GitHub):

Step 1: Create Project Structure**

```bash
# Create main project folder
mkdir ECommerce-Website
cd ECommerce-Website

# Create subfolders
mkdir client server docs
mkdir client\src client\public
mkdir server\models server\routes server\middleware
```
Step 2: Setup Client
Step 2: Setup Client (Frontend)**

```bash
cd client
npm init -y
npm install react react-dom react-router-dom axios
npm install -D vite @vitejs/plugin-react
```
Run Vite Setup
**Run Vite Setup**
```bash
npm run dev
```
Step 3: Setup Server
**Step 3: Setup Server (Backend)**
```bash
cd ..\server
npm init -y
npm install express mongoose cors dotenv
npm install -D nodemon
```
Step 4: Environment File
**Step 4: Environment File**

Create a file named `.env` inside the **server** folder:
```env
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.mongodb.net/ecommerce
```
Step 5: server.js Code
**Step 5: Create `server.js`**
```js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/products.js";
import cartRoutes from "./routes/cart.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(" Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.json({ message: "E-Commerce API is running!" });
});

app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
```

Step 6: Frontend Entry File
**Step 6: Create Frontend Entry File**
```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>E-Commerce Store</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Git Commands
**GitHub Setup**
```bash
cd ECommerce-Website
git init
git add .
git commit -m "Initial E-Commerce Website setup"
git remote add origin https://github.com/deepa-sh04/E-commercewebsite.git
git branch -M main
git push -u origin main
```
