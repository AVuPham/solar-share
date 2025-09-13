// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./index.css";

// Nếu 404.html đã lưu đường dẫn vào sessionStorage, khôi phục trước khi mount app
const redirectFrom404 = sessionStorage.getItem("gh_redirect");
if (redirectFrom404) {
  sessionStorage.removeItem("gh_redirect");
  // Thay đổi URL trong history để React Router đọc đúng route
  window.history.replaceState({}, "", redirectFrom404);
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
