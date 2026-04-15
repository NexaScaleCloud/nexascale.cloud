function showSecurityService(event, service) {

  document.querySelectorAll(".m365-card").forEach(c => {
    c.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  const data = {

    identity: [
      {
        title: "Identity & Access Management",
        points: [
          "User identity lifecycle management",
          "Role-based access control (RBAC)",
          "Single Sign-On (SSO) implementation",
          "Multi-Factor Authentication (MFA)",
          "Conditional access policies"
        ]
      },
      {
        title: "Privileged Access Security",
        points: [
          "Admin role protection",
          "Just-in-time access",
          "Privileged identity monitoring"
        ]
      }
    ],

    endpoint: [
      {
        title: "Endpoint Protection",
        points: [
          "Device security policies",
          "Antivirus and threat protection",
          "Real-time attack detection",
          "Device compliance enforcement"
        ]
      },
      {
        title: "Mobile Device Management",
        points: [
          "Secure mobile access",
          "Remote wipe capabilities",
          "App protection policies"
        ]
      }
    ],

    network: [
      {
        title: "Network Security",
        points: [
          "Firewall configuration",
          "VPN setup and management",
          "Secure remote access",
          "Traffic monitoring"
        ]
      },
      {
        title: "Threat Detection & Response",
        points: [
          "Intrusion detection systems",
          "Real-time alerts",
          "Incident response planning"
        ]
      }
    ],

    compliance: [
      {
        title: "Data Protection",
        points: [
          "Data encryption",
          "Information protection policies",
          "Secure file sharing"
        ]
      },
      {
        title: "Compliance Management",
        points: [
          "Regulatory compliance setup",
          "Audit logs and reporting",
          "Data retention policies"
        ]
      },
      {
        title: "Backup & Recovery",
        points: [
          "Automated backups",
          "Disaster recovery planning",
          "Business continuity strategy"
        ]
      }
    ]

  };

  const container = document.getElementById("security-details");
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

