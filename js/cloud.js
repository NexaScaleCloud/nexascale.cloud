function showCloudService(event, service) {

  // active state
  document.querySelectorAll(".m365-card").forEach(c => {
    c.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  const data = {

    azure: [
      {
        title: "Infrastructure Deployment",
        points: [
          "Deploy virtual machines and scalable cloud infrastructure",
          "Set up networking, storage, and compute resources",
          "Ensure high availability and redundancy"
        ]
      },
      {
        title: "Identity & Access Management",
        points: [
          "Configure user roles and permissions",
          "Enable secure access policies",
          "Implement multi-factor authentication"
        ]
      },
      {
        title: "Backup & Disaster Recovery",
        points: [
          "Automate backups of critical workloads",
          "Implement disaster recovery strategies",
          "Ensure business continuity"
        ]
      },
      {
        title: "Monitoring & Optimization",
        points: [
          "Track performance and resource usage",
          "Optimize cost and efficiency",
          "Set alerts for system health"
        ]
      }
    ],

    aws: [
      {
        title: "Cloud Infrastructure Setup",
        points: [
          "Launch EC2 instances and configure VPC",
          "Set up storage using S3 and EBS",
          "Build scalable architecture"
        ]
      },
      {
        title: "Security & IAM",
        points: [
          "Define IAM roles and policies",
          "Secure APIs and services",
          "Enable logging and monitoring"
        ]
      },
      {
        title: "Cost Management",
        points: [
          "Optimize billing with usage tracking",
          "Implement reserved instances",
          "Reduce unnecessary expenses"
        ]
      },
      {
        title: "Automation & Scaling",
        points: [
          "Auto-scale infrastructure based on demand",
          "Use cloud formation templates",
          "Automate deployments"
        ]
      }
    ],

    gcp: [
      {
        title: "Compute & Storage",
        points: [
          "Deploy virtual machines and containers",
          "Use cloud storage for scalable data",
          "Enable high-speed networking"
        ]
      },
      {
        title: "Data & Analytics",
        points: [
          "Use BigQuery for data analysis",
          "Process large datasets efficiently",
          "Build data-driven insights"
        ]
      },
      {
        title: "Security & Compliance",
        points: [
          "Manage identities and access",
          "Secure applications and APIs",
          "Ensure compliance standards"
        ]
      },
      {
        title: "DevOps & Automation",
        points: [
          "CI/CD pipeline setup",
          "Automate deployments",
          "Improve release cycles"
        ]
      }
    ],

    workspace: [
      {
        title: "Business Email Setup",
        points: [
          "Set up professional Gmail with custom domain",
          "Configure MX records",
          "Ensure secure email delivery"
        ]
      },
      {
        title: "Collaboration Tools",
        points: [
          "Use Docs, Sheets, Slides for real-time work",
          "Enable team collaboration",
          "Centralize file access"
        ]
      },
      {
        title: "Admin & User Management",
        points: [
          "Manage users and permissions",
          "Control access and devices",
          "Enforce company policies"
        ]
      },
      {
        title: "Security & Compliance",
        points: [
          "Enable 2-step verification",
          "Protect data and devices",
          "Set retention policies"
        ]
      }
    ]

  };

  const container = document.getElementById("cloud-details");
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
