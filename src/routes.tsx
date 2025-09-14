// src/routes.tsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

// Pages (bạn cần đảm bảo các file này tồn tại trong src/pages/)
import Home from "./pages/Home";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/**
 * NOTE:
 * - basename: "/solar-share".
 * - children paths không bắt đầu bằng '/' (React Router xử lý relative paths).
 */
const routesArray = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "technology", element: <Technology /> },
      { path: "projects", element: <Projects /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }, // fallback
    ],
  },
];

const router = createBrowserRouter(routesArray, {
  basename: "/solar-share", // ← QUAN TRỌNG cho GitHub Pages under repo
});

export default router;
