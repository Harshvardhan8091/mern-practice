import './Login.css';

// Login page includes input fields for email/password.
function Login() {
  return (
    <section className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <p className="login-description">
          Enter your credentials to access the dashboard.
        </p>
        <form className="login-form">
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
}

export default Login;
