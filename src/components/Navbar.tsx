// src/components/Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  fontWeight: 700,
  color: "#0369a1",
};

export default function Navbar(): JSX.Element {
  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#ffffff",
      boxShadow: "0 2px 8px rgba(2,6,23,0.06)",
      zIndex: 1000
    }}>
      <div style={{ width: "100%", maxWidth: 1100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ fontWeight: 800, color: "#064e3b" }}>☀ Solar Share</div>
          <nav style={{ display: "flex", gap: 12, marginLeft: 12 }}>
            <NavLink to="/" end style={({ isActive }) => (isActive ? activeStyle : undefined)}>Trang chủ</NavLink>
            <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Giới thiệu</NavLink>
            <NavLink to="/technology" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Công nghệ</NavLink>
            <NavLink to="/projects" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Dự án</NavLink>
            <NavLink to="/dashboard" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Dashboard</NavLink>
            <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Liên hệ</NavLink>
          </nav>
        </div>

        <div>
          <a href="/projects" style={{ background: "#059669", color: "#fff", padding: "8px 12px", borderRadius: 8, textDecoration: "none", fontWeight: 600 }}>Tham gia ngay</a>
        </div>
      </div>
    </header>
  );
}
