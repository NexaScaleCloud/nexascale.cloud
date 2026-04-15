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
          "We utilize advanced AI-driven sensors to watch your infrastructure every second of the day, catching and resolving issues before they impact your business."
        ]
      },
      {
        title: "Dedicated Account Management",
        points: [
          "We provide you with a single point of contact who understands your business goals, ensuring your IT strategy is personalized and consistently optimized."
        ]
      },
      {
        title: "Preventive Maintenance",
        points: [
          "We perform routine \"under-the-hood\" system tuning and hardware health checks to eliminate the root causes of technical failures and downtime."
        ]
      },
      {
        title: "Proactive Infrastructure Management",
        points: [
          "We take full ownership of your technology environment, ensuring all systems are updated and perfectly aligned with your operational needs."
        ]
      },
      {
        title: "Vendor & Third-Party Management",
        points: [
          "We act as your single point of contact for all technology vendors, handling everything from internet service providers to software subscriptions."
        ]
      },
      {
        title: "Strategic IT Roadmap Development",
        points: [
          "We partner with your leadership to create a multi-year technology plan that supports your growth while controlling long-term costs."
        ]
      }
    ],

    helpdesk: [
      {
        title: "Remote IT Support",
        points: [
          "We provide instant technical assistance through secure remote-access tools, allowing us to fix software glitches and connectivity issues without waiting for an on-site technician."
        ]
      },
      {
        title: "Ticketing System Management",
        points: [
          "We utilize a prioritized request system that ensures your most critical issues are addressed first, providing full transparency on the status of every support case."
        ]
      },
      {
        title: "User Assistance & Training",
        points: [
          "We empower your employees with direct access to expert guidance, helping them navigate software challenges and adopt IT best practices."
        ]
      },
      {
        title: "New Employee Onboarding",
        points: [
          "We streamline the transition for new hires by handling their complete technical setup, from hardware configuration to account permissions."
        ]
      },
      {
        title: "24/7 Helpdesk Availability",
        points: [
          "We provide your team with around-the-clock access to expert technicians who can resolve IT issues the moment they arise."
        ]
      },
      {
        title: "Multi-Channel Support Access",
        points: [
          "We allow your employees to request help via phone, email, or a dedicated chat portal, ensuring assistance is always within reach."
        ]
      }
    ],

    monitoring: [
      {
        title: "System Performance Monitoring",
        points: [
          "We track CPU, memory, and network health trends in real-time to ensure your workstations and servers always run at peak efficiency."
        ]
      },
      {
        title: "Patch Management",
        points: [
          "We automate the deployment of critical security updates and software patches during off-hours to protect your systems without disrupting your workday."
        ]
      },
      {
        title: "Backup Monitoring & Verification",
        points: [
          "We perform daily automated checks on all data backups to guarantee your business-critical information is always saved and ready for instant recovery."
        ]
      },
      {
        title: "Network & Connectivity Oversight",
        points: [
          "We continuously monitor your internet stability and internal network speeds to ensure your team remains connected to the cloud and each other."
        ]
      },
      {
        title: "Server Health & Performance Tracking",
        points: [
          "We monitor resource usage trends to prevent system crashes and ensure your servers always have the capacity to handle your workload."
        ]
      },
      {
        title: "Antivirus & Security Suite Monitoring",
        points: [
          "We verify that your security software is active, updated, and scanning on every device, responding immediately to any detected threats."
        ]
      }
    ],

    consulting: [
      {
        title: "Technology Roadmap Development",
        points: [
          "We partner with your leadership to design a multi-year technology plan that supports your future growth and prevents technical obsolescence."
        ]
      },
      {
        title: "Infrastructure Planning",
        points: [
          "We provide expert blueprints for scalable networks and cloud environments, ensuring your IT foundation is built to handle increasing data demands."
        ]
      },
      {
        title: "Cost Optimization",
        points: [
          "We perform deep-dive audits of your technology spending to eliminate waste, consolidate licenses, and maximize the return on your IT investment."
        ]
      },
      {
        title: "Digital Transformation Strategy",
        points: [
          "We guide your business through the adoption of modern cloud workflows, helping you replace legacy systems with agile, high-performance solutions."
        ]
      },
      {
        title: "Cybersecurity Posture Assessment",
        points: [
          "We evaluate your existing security controls against industry benchmarks to build a roadmap for hardening your business defenses."
        ]
      },
      {
        title: "Compliance & Regulatory Consulting",
        points: [
          "We guide you through the technical requirements of GDPR, HIPAA, or SOC2, ensuring your IT setup meets all legal and industry standards."
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
