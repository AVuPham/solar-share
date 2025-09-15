import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";

// Import các pages
import Home from "./pages/Home";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Định nghĩa router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Layout><NotFound /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>,
  },
  {
    path: "/technology",
    element: <Layout><Technology /></Layout>,
  },
  {
    path: "/projects",
    element: <Layout><Projects /></Layout>,
  },
  {
    path: "/dashboard",
    element: <Layout><Dashboard /></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
