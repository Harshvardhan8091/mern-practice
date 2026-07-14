import './Dashboard.css';

// Dashboard page shows quick stats using simple cards.
function Dashboard() {
  return (
    <section className="dashboard-page">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <p>Here is an overview of your application stats.</p>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Users</h3>
          <p>1,250</p>
        </div>
        <div className="dashboard-card">
          <h3>Active Users</h3>
          <p>860</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Projects</h3>
          <p>42</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
