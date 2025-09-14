// src/components/Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout(): JSX.Element {
  return (
    <div className="app-root">
      <Navbar />
      {/* Padding-top to avoid content hidden under fixed navbar */}
      <main style={{ paddingTop: 72, minHeight: "70vh" }}>
        <Outlet />
      </main>
      <footer style={{ background: "#0f172a", color: "#cbd5e1", padding: "1.25rem 0", textAlign: "center" }}>
        © {new Date().getFullYear()} Solar Share — All rights reserved.
      </footer>
    </div>
  );
}
