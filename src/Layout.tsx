import React from "react";
import Navbar from "./components/Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar chung */}
      <Navbar />

      {/* Nội dung từng page */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer đơn giản */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2025 Solar Share. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
