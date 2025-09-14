import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      style={{
        background: "#0369a1",
        color: "white",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 700 }}>
        ☀ Solar Share
      </h1>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
          Trang chủ
        </NavLink>
        <NavLink to="/about" style={{ color: "white", textDecoration: "none" }}>
          Giới thiệu
        </NavLink>
        <NavLink
          to="/technology"
          style={{ color: "white", textDecoration: "none" }}
        >
          Công nghệ
        </NavLink>
        <NavLink
          to="/projects"
          style={{ color: "white", textDecoration: "none" }}
        >
          Dự án
        </NavLink>
        <NavLink
          to="/dashboard"
          style={{ color: "white", textDecoration: "none" }}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/contact"
          style={{ color: "white", textDecoration: "none" }}
        >
          Liên hệ
        </NavLink>
      </nav>
    </header>
  );
}
