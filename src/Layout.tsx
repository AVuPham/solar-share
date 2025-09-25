import React from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 pt-20 px-6 md:px-16">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
