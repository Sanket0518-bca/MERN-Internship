function Dashboard() {
  return (
    <section className="page">
      <p className="eyebrow">YOUR WORKSPACE</p>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard. Here is a quick project summary.</p>

      <div className="stats">
        <div className="info-card">
          <h3>04</h3>
          <p>Static Pages</p>
        </div>

        <div className="info-card">
          <h3>01</h3>
          <p>Dynamic Route</p>
        </div>

        <div className="info-card">
          <h3>100%</h3>
          <p>Ready to Learn</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
