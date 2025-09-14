// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
  return (
    <div style={{ textAlign: "center", padding: "6rem 1rem" }}>
      <h1 style={{ fontSize: 96, margin: 0, color: "#0ea5a4" }}>404</h1>
      <p style={{ fontSize: 18, color: "#334155", marginTop: 12 }}>Trang bạn tìm không tồn tại hoặc đã bị di chuyển.</p>
      <Link to="/" style={{ display: "inline-block", marginTop: 20, padding: "10px 18px", background: "#0369a1", color: "#fff", borderRadius: 8, textDecoration: "none" }}>
        Quay về trang chủ
      </Link>
    </div>
  );
}
