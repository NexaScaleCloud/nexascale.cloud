function showSecurityService(event, service) {

  document.querySelectorAll(".m365-card").forEach(c => {
    c.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  const data = {

    identity: [
      {
        title: "Custom Identity Strategy & Roadmap",
        points: [
          "We evaluate your current user landscape to design a seamless identity framework that balances high security with user productivity."
        ]
      },
      {
        title: "Multi-Factor Authentication (MFA) Enrollment",
        points: [
          "We enforce robust secondary verification methods across your entire organization to block 99.9% of identity-based cyberattacks."
        ]
      },
      {
        title: "Single Sign-On (SSO) Integration",
        points: [
          "We implement SSO solutions that allow your employees to access all business applications with one secure login, reducing password fatigue."
        ]
      },
      {
        title: "Privileged Access Management (PAM)",
        points: [
          "We secure your most sensitive \"admin\" accounts with time-bound access and automated password rotation to prevent high-level data breaches."
        ]
      },
      {
        title: "Automated User Lifecycle Management",
        points: [
          "We build automated workflows that instantly provision access for new hires and revoke it for offboarded staff to maintain a secure perimeter."
        ]
      },
      {
        title: "Conditional Access Policy Design",
        points: [
          "We set intelligent rules that grant or block access based on the user's location, device health, and real-time risk level."
        ]
      },
      {
        title: "Self-Service Password Reset (SSPR)",
        points: [
          "We empower your employees to securely reset their own passwords, significantly reducing your internal IT support tickets."
        ]
      },
      {
        title: "Role-Based Access Control (RBAC)",
        points: [
          "We ensure your staff has exactly the level of access they need for their specific job—and nothing more—following the \"Principle of Least Privilege.\""
        ]
      },
      {
        title: "External Identity & Guest Governance",
        points: [
          "We manage how clients and partners access your shared resources, ensuring collaboration is productive without compromising your internal data."
        ]
      },
      {
        title: "Identity Protection & Risk Monitoring",
        points: [
          "We deploy AI-driven tools that monitor for suspicious login patterns and automatically lock accounts if a \"leaked credential\" is detected."
        ]
      },
      {
        title: "B2B and B2C Identity Solutions",
        points: [
          "We help you manage customer and partner identities at scale, providing a secure and branded login experience for your external portals."
        ]
      },
      {
        title: "Identity Auditing & Reporting",
        points: [
          "We provide detailed logs and reports on who accessed what and when, ensuring you stay fully prepared for security audits."
        ]
      }
    ],

    endpoint: [
      {
        title: "Unified Endpoint Management (UEM)",
        points: [
          "We provide a single dashboard to manage and secure every device in your fleet, including laptops, smartphones, and tablets."
        ]
      },
      {
        title: "Next-Gen Antivirus & EDR Deployment",
        points: [
          "We replace traditional antivirus with AI-powered Endpoint Detection and Response (EDR) to stop sophisticated malware before it executes."
        ]
      },
      {
        title: "Automated Patch & Update Management",
        points: [
          "We ensure all your devices are running the latest security patches for OS and third-party apps, closing vulnerabilities instantly."
        ]
      },
      {
        title: "Mobile Application Management (MAM)",
        points: [
          "We secure your business data within mobile apps (like Outlook or Teams) without interfering with an employee's personal phone content."
        ]
      },
      {
        title: "Device Health & Compliance Monitoring",
        points: [
          "We set \"compliance baselines\" that block devices from accessing company data if they are jailbroken, unencrypted, or outdated."
        ]
      },
      {
        title: "Remote Wipe & Lock Capabilities",
        points: [
          "We provide the ability to instantly erase company data from lost or stolen devices to prevent sensitive information from falling into the wrong hands."
        ]
      },
      {
        title: "Disk & Removable Media Encryption",
        points: [
          "We enforce BitLocker or FileVault encryption across all company laptops to ensure data remains unreadable if a device is physically stolen."
        ]
      },
      {
        title: "USB & Peripheral Control",
        points: [
          "We manage and restrict the use of USB drives and other external hardware to prevent data exfiltration and \"rubber ducky\" attacks."
        ]
      },
      {
        title: "Host-Based Firewall Configuration",
        points: [
          "We manage individual device firewalls to protect your employees whether they are working from the office, home, or a public Wi-Fi."
        ]
      },
      {
        title: "Attack Surface Reduction (ASR)",
        points: [
          "We disable high-risk legacy features on your devices that are commonly exploited by hackers to gain an initial foothold."
        ]
      },
      {
        title: "Ransomware Rollback & Recovery",
        points: [
          "We implement endpoint tools that can automatically \"roll back\" files to their original state if a ransomware encryption event is detected."
        ]
      },
      {
        title: "Zero-Touch Deployment",
        points: [
          "We set up systems like Windows Autopilot or Apple Business Manager so new devices are secured the moment your employee unboxes them."
        ]
      }
    ],

    network: [
      {
        title: "Next-Generation Firewall (NGFW) Management",
        points: [
          "We deploy and manage intelligent firewalls that go beyond simple port-blocking to inspect deep traffic for hidden threats."
        ]
      },
      {
        title: "Zero Trust Network Access (ZTNA)",
        points: [
          "We transition your business from \"open networks\" to a Zero Trust model where every connection is verified before access is granted."
        ]
      },
      {
        title: "Secure Site-to-Site & Client VPNs",
        points: [
          "We establish encrypted tunnels that allow your remote offices and \"work-from-home\" employees to connect to your resources safely."
        ]
      },
      {
        title: "Intrusion Detection & Prevention (IDS/IPS)",
        points: [
          "We monitor your network traffic in real-time to identify and automatically block known malicious patterns and exploit attempts."
        ]
      },
      {
        title: "Network Segmentation & Micro-Segmentation",
        points: [
          "We divide your network into isolated zones so that even if one device is compromised, the threat cannot spread to the rest of the business."
        ]
      },
      {
        title: "Web Content Filtering & Security",
        points: [
          "We block access to malicious websites and harmful categories (like phishing or adult sites) to protect your users while they browse."
        ]
      },
      {
        title: "Cloud-Native Network Security",
        points: [
          "We secure your Azure, AWS, or GCP environments with virtual appliances that provide the same level of protection as a physical data center."
        ]
      },
      {
        title: "DDoS Protection & Mitigation",
        points: [
          "We implement layers of defense to protect your public-facing websites and services from Distributed Denial of Service (DDoS) attacks."
        ]
      },
      {
        title: "Email Gateway Security",
        points: [
          "We scan all incoming and outgoing email traffic at the network level to catch spam, malware, and phishing links before they reach the user."
        ]
      },
      {
        title: "Secure Wi-Fi & Wireless Auditing",
        points: [
          "We secure your office Wi-Fi with enterprise-grade authentication (802.1X) to ensure only authorized company devices can connect."
        ]
      },
      {
        title: "Vulnerability Scanning & Assessment",
        points: [
          "We perform regular scans of your network perimeter to identify weak points and outdated software before hackers find them."
        ]
      },
      {
        title: "SD-WAN Implementation",
        points: [
          "We optimize your branch office connectivity with Software-Defined WAN, providing faster performance and integrated security for your cloud apps."
        ]
      }
    ],

    compliance: [
      {
        title: "Data Discovery & Classification",
        points: [
          "We scan your environment to find and label sensitive information (like credit cards or IDs) so you know exactly where your critical data lives."
        ]
      },
      {
        title: "Data Loss Prevention (DLP) Policies",
        points: [
          "We implement rules that prevent employees from accidentally (or intentionally) sharing sensitive company data via email or chat."
        ]
      },
      {
        title: "Regulatory Compliance Mapping (GDPR/HIPAA/SOC2)",
        points: [
          "We align your IT security controls with specific legal requirements to ensure your business remains compliant and avoids heavy fines."
        ]
      },
      {
        title: "End-to-End Data Encryption",
        points: [
          "We ensure your data is encrypted \"at rest\" (on disks) and \"in transit\" (as it travels over the web) using industry-standard protocols."
        ]
      },
      {
        title: "Email & Document Sensitivity Labeling",
        points: [
          "We empower your team to mark files as \"Confidential,\" which automatically restricts printing, downloading, or forwarding to unauthorized users."
        ]
      },
      {
        title: "Records Management & Retention",
        points: [
          "We set automated policies that keep important data for the required legal duration and securely delete it once it is no longer needed."
        ]
      },
      {
        title: "eDiscovery & Legal Hold",
        points: [
          "We provide the tools to quickly search and \"freeze\" company data in the event of a legal request or internal investigation."
        ]
      },
      {
        title: "Internal Insider Risk Management",
        points: [
          "We deploy tools that detect high-risk activities—like mass file downloads or unauthorized cloud uploads—by employees or contractors."
        ]
      },
      {
        title: "Security Posture Assessments",
        points: [
          "We provide a clear \"Security Score\" for your business, highlighting exactly where you need to improve to stay ahead of modern threats."
        ]
      },
      {
        title: "Privacy Management & Consent",
        points: [
          "We help you manage customer data privacy requests and ensure your data handling practices align with global privacy standards."
        ]
      },
      {
        title: "Audit-Ready Reporting & Documentation",
        points: [
          "We generate the technical documentation and reports needed to prove your security posture to auditors, clients, and stakeholders."
        ]
      },
      {
        title: "Continuous Compliance Monitoring",
        points: [
          "We monitor your environment 24/7 for \"configuration drift\" to ensure a single accidental change doesn't leave your business out of compliance."
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
