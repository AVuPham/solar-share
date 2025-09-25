import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
