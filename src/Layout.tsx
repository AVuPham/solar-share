import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-1 bg-gray-50 py-10 px-6 md:px-16">{children}</main>
      <Footer />
    </div>
  );
}
