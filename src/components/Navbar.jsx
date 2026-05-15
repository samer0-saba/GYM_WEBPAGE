import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home",      path: "/" },
  { label: "About",     path: "/about" },
  { label: "BMI",       path: "/bmi" },
  { label: "Programs",  path: "/programs" },
  { label: "Dashboard", path: "/dashboard" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen]  = useState(false);
  const location = useLocation();
  const menuRef  = useRef(null);

  // Close menu on route change
  const [prevLoc, setPrevLoc] = useState(location);
  if (location !== prevLoc) {
    setPrevLoc(location);
    if (menuOpen) setMenuOpen(false);
  }

  // Scroll-shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`} ref={menuRef}>
      <Link className="logo" to="/">
        Fit<span>Zone</span>
      </Link>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Link className="nav-button" to="/login">
          Login
        </Link>

        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}