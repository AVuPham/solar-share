// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Technology from "./pages/Technology";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // 👈 tất cả page đều dùng Layout
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "technology", element: <Technology /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }
    ],
  },
]);
