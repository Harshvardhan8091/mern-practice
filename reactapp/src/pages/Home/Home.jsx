import { Link } from 'react-router-dom';
import './Home.css';

// Home page introduces the user and links to login.
function Home() {
  return (
    <section className="home-page">
      <div className="home-hero">
        <h1>Welcome to ReactApp</h1>
        <p>
          This beginner-friendly app shows how to use React Router, components,
          and CSS modules in a simple layout.
        </p>
        <Link className="home-button" to="/login">
          Go to Login
        </Link>
      </div>
    </section>
  );
}

export default Home;
