function showSupport(event, type) {
  const container = document.getElementById("support-details");

  let content = "";

  if (type === "managed") {
    content = `
      <h2>Managed IT Support</h2>

      <h3>24/7 Proactive Monitoring</h3>
      <p>We continuously monitor your systems to detect and resolve issues before they impact your business operations.</p>

      <h3>Dedicated Account Management</h3>
      <p>You get a single point of contact who understands your infrastructure and business goals.</p>

      <h3>Preventive Maintenance</h3>
      <p>Regular system health checks, updates, and optimizations to ensure peak performance.</p>
    `;
  }

  if (type === "helpdesk") {
    content = `
      <h2>Helpdesk Services</h2>

      <h3>Remote IT Support</h3>
      <p>Fast and secure remote assistance to resolve user issues without delays.</p>

      <h3>Ticketing System</h3>
      <p>Structured issue tracking with priority-based resolution for faster turnaround.</p>

      <h3>User Assistance</h3>
      <p>Support for day-to-day IT challenges including login issues, software errors, and access problems.</p>
    `;
  }

  if (type === "monitoring") {
    content = `
      <h2>Monitoring & Maintenance</h2>

      <h3>System Performance Monitoring</h3>
      <p>Real-time tracking of servers, networks, and endpoints to ensure uptime.</p>

      <h3>Patch Management</h3>
      <p>Automated updates to keep systems secure and compliant.</p>

      <h3>Backup Monitoring</h3>
      <p>Ensure all backups are running successfully and data is recoverable when needed.</p>
    `;
  }

  if (type === "consulting") {
    content = `
      <h2>IT Consulting</h2>

      <h3>Technology Roadmap</h3>
      <p>Strategic planning aligned with your business growth and digital transformation goals.</p>

      <h3>Infrastructure Planning</h3>
      <p>Design scalable and secure IT environments tailored to your needs.</p>

      <h3>Cost Optimization</h3>
      <p>Identify areas to reduce IT spend while improving performance and reliability.</p>
    `;
  }

  container.innerHTML = content;
}
