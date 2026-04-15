function showSupportService(event, service) {
  document.querySelectorAll(".m365-card").forEach(c => {
    c.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  const data = {
    managed: [
      {
        title: "24/7 Proactive Monitoring",
        points: [
          "We continuously monitor your systems to detect and resolve issues before they impact your business operations."
        ]
      },
      {
        title: "Dedicated Account Management",
        points: [
          "You get a single point of contact who understands your infrastructure and business goals."
        ]
      },
      {
        title: "Preventive Maintenance",
        points: [
          "Regular system health checks, updates, and optimizations to ensure peak performance."
        ]
      }
    ],

    helpdesk: [
      {
        title: "Remote IT Support",
        points: [
          "Fast and secure remote assistance to resolve user issues without delays."
        ]
      },
      {
        title: "Ticketing System",
        points: [
          "Structured issue tracking with priority-based resolution for faster turnaround."
        ]
      },
      {
        title: "User Assistance",
        points: [
          "Support for day-to-day IT challenges including login issues, software errors, and access problems."
        ]
      }
    ],

    monitoring: [
      {
        title: "System Performance Monitoring",
        points: [
          "Real-time tracking of servers, networks, and endpoints to ensure uptime."
        ]
      },
      {
        title: "Patch Management",
        points: [
          "Automated updates to keep systems secure and compliant."
        ]
      },
      {
        title: "Backup Monitoring",
        points: [
          "Ensure all backups are running successfully and data is recoverable when needed."
        ]
      }
    ],

    consulting: [
      {
        title: "Technology Roadmap",
        points: [
          "Strategic planning aligned with your business growth and digital transformation goals."
        ]
      },
      {
        title: "Infrastructure Planning",
        points: [
          "Design scalable and secure IT environments tailored to your needs."
        ]
      },
      {
        title: "Cost Optimization",
        points: [
          "Identify areas to reduce IT spend while improving performance and reliability."
        ]
      }
    ]
  };

  const container = document.getElementById("support-details");
  container.innerHTML = "";

  data[service].forEach(item => {
    const box = document.createElement("div");
    box.className = "box";

    const h3 = document.createElement("h3");
    h3.innerText = item.title;

    const ul = document.createElement("ul");

    item.points.forEach(p => {
      const li = document.createElement("li");
      li.innerText = p;
      ul.appendChild(li);
    });

    box.appendChild(h3);
    box.appendChild(ul);
    container.appendChild(box);
  });
}
