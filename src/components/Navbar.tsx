// src/components/Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-sky-700" : "text-gray-700 hover:text-sky-600"}`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  return (
    <header className="bg-white shadow fixed top-0 left-0 right-0 z-40">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-xl font-bold text-sky-700">Solar Share</div>
        <nav className="flex items-center gap-2">
          <NavItem to="/">Trang chủ</NavItem>
          <NavItem to="/about">Giới thiệu</NavItem>
          <NavItem to="/technology">Công nghệ</NavItem>
          <NavItem to="/projects">Dự án</NavItem>
          <NavItem to="/dashboard">Dashboard</NavItem>
          <NavItem to="/contact">Liên hệ</NavItem>
        </nav>
      </div>
    </header>
  );
}
