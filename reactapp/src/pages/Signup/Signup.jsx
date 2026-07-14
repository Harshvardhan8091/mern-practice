import './Signup.css';

// Signup page includes fields for name, email, and password.
function Signup() {
  return (
    <section className="signup-page">
      <div className="signup-card">
        <h2>Signup</h2>
        <p className="signup-description">
          Create an account to get started with the dashboard.
        </p>
        <form className="signup-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Create password" />
          </label>
          <label>
            Confirm Password
            <input type="password" placeholder="Repeat password" />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
