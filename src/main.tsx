// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { Toaster } from 'react-hot-toast';
// Нормалізація стилів
import "modern-normalize";
// Глобальні стилі (додатково)
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <App />
  </React.StrictMode>
);
