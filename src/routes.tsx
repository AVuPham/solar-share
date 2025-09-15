import React from "react";
import { RouteObject } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout><Home /></Layout>,
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
];

export default routes;
