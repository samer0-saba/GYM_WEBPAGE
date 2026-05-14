import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "BMI", path: "/bmi" },
  { label: "Programs", path: "/programs" },
  { label: "Dashboard", path: "/dashboard" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <Link className="logo" to="/">
        Fit<span>Zone</span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <Link className="nav-button" to="/login">
        Login
      </Link>
    </header>
  );
}