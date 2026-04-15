function showSupportService(event, service) {

  document.querySelectorAll(".m365-card").forEach(c => {
    c.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  const data = {

    helpdesk: [
      {
        title: "24/7 Helpdesk Support",
        points: [
          "Round-the-clock IT support for your business",
          "Quick issue resolution via phone, email, or remote access"
        ]
      },
      {
        title: "Incident & Ticket Management",
        points: [
          "Structured ticketing system",
          "Priority-based issue handling",
          "Faster resolution time"
        ]
      },
      {
        title: "Remote Troubleshooting",
        points: [
          "Instant remote access support",
          "Fix issues without on-site visits",
          "Reduce downtime"
        ]
      }
    ],

    monitoring: [
      {
        title: "24/7 System Monitoring",
        points: [
          "Continuous monitoring of servers and endpoints",
          "Real-time alerts for failures",
          "Prevent downtime"
        ]
      },
      {
        title: "Proactive Maintenance",
        points: [
          "Regular system health checks",
          "Preventive fixes before issues occur",
          "Improved system stability"
        ]
      },
      {
        title: "Patch & Update Management",
        points: [
          "Automated OS and software updates",
          "Security patching",
          "Vulnerability reduction"
        ]
      }
    ],

    managed: [
      {
        title: "End-to-End IT Management",
        points: [
          "Complete IT infrastructure handling",
          "Reduce internal IT workload",
          "Focus on business growth"
        ]
      },
      {
        title: "Cloud & Infrastructure Support",
        points: [
          "Support for Azure, AWS, and GCP",
          "Server and network management",
          "Performance optimization"
        ]
      },
      {
        title: "Backup & Disaster Recovery",
        points: [
          "Automated backup solutions",
          "Disaster recovery planning",
          "Business continuity"
        ]
      }
    ],

    consulting: [
      {
        title: "IT Strategy & Planning",
        points: [
          "Align IT with business goals",
          "Technology roadmap",
          "Scalable solutions"
        ]
      },
      {
        title: "Digital Transformation",
        points: [
          "Modernize legacy systems",
          "Cloud adoption strategies",
          "Improve efficiency"
        ]
      },
      {
        title: "Security & Compliance Advisory",
        points: [
          "Risk assessment",
          "Compliance guidance",
          "Security improvements"
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
