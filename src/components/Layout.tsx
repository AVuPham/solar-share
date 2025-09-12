// src/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-16 px-6">
        <Outlet />
      </main>
    </>
  );
}
