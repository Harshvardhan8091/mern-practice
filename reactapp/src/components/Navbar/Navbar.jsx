import { Link } from 'react-router-dom';
import './Navbar.css';

// Navbar displays the site name, navigation links, and theme toggle.
function Navbar({ onToggleTheme, currentTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ReactApp</div>
      <div className="navbar-end">
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={currentTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {currentTheme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
