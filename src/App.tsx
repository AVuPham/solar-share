import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="technology" element={<Technology />} />
        <Route path="projects" element={<Projects />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
