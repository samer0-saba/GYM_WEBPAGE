export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        Fit<span>Zone</span>
      </div>
      <p>&copy; {new Date().getFullYear()} FitZone. Designed for performance.</p>
    </footer>
  );
}