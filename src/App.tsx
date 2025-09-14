import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Technology from "./pages/Technology";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">
            <Link to="/">🌞 Solar Share</Link>
          </h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <Link to="/technology" className="hover:underline">Technology</Link>
            <Link to="/projects" className="hover:underline">Projects</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Nội dung trang */}
      <main className="flex-grow container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2 className="text-red-600">404 - Page Not Found</h2>} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-4 mt-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Solar Share. All rights reserved.</p>
          <p className="text-sm">Built with ❤️ using React + Vite + Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
