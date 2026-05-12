import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">

      <h2>FitZone</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/bmi">BMI</Link></li>
        <li><Link to="/trainers">Trainers</Link></li>
      </ul>

    </nav>
  );
}