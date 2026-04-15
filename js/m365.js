function showService(event, service) {

  document.querySelectorAll(".m365-card").forEach(c => {
    c.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  const data = {
    email: [

  {
    title: "Plan Selection & Procurement",
    points: [
      "Choose from Business Basic, Standard, or Premium based on your need for desktop apps and advanced security."
    ]
  },

  {
    title: "Custom Domain Association",
    points: [
      "Connect your professional domain (e.g., @yourbusiness.com) to the Microsoft 365 tenant to establish brand identity."
    ]
  },

  {
    title: "DNS Verification & Records",
    points: [
      "Configure MX, SPF, and DKIM records in your domain’s DNS to ensure mail reaches its destination and avoids spam folders."
    ]
  },

  {
    title: "User Identity Management",
    points: [
      "Create active user accounts in the Admin Center and assign specific licenses to activate their professional mailboxes."
    ]
  },

  {
    title: "Email Alias Strategy",
    points: [
      "Set up secondary email addresses like sales@ or info@ to capture broad inquiries without needing extra paid licenses."
    ]
  },

  {
    title: "Shared Mailbox Implementation",
    points: [
      "Create collaborative folders that allow multiple team members to manage a single support or departmental email address."
    ]
  },

  {
    title: "Multi-Layered Security (MFA)",
    points: [
      "Enable Multi-Factor Authentication and suspicious login alerts to block unauthorized access to sensitive company data."
    ]
  },

  {
    title: "Advanced Threat Protection",
    points: [
      "Activate built-in filters to scan for malware, phishing attempts, and malicious links before they reach the user's inbox."
    ]
  },

  {
    title: "Email Encryption",
    points: [
      "Configure secure message encryption to protect sensitive business communications from being intercepted during transit."
    ]
  },

  {
    title: "Cross-Device Synchronization",
    points: [
      "Sync Outlook on desktop, web, and mobile (iOS/Android) so your emails, calendars, and contacts are always updated."
    ]
  },

  {
    title: "Legacy Data Migration",
    points: [
      "Securely transfer your historical email data, contacts, and calendar schedules from your previous provider to the new cloud."
    ]
  },

  {
    title: "Compliance & Retention Policies",
    points: [
      "Set up legal holds and data retention rules to ensure your business meets regulatory standards and protects information."
    ]
  },

  {
    title: "Admin Control & Monitoring",
    points: [
      "Utilize the Admin Center to monitor service health, manage user roles, and enforce company-wide email policies."
    ]
  }

],
    teams: [
      { title: "Meetings", points: ["Video calls", "Recording"] },
      { title: "Channels", points: ["Team structure", "Chat system"] }
    ],
    sharepoint: [
      { title: "Documents", points: ["Storage", "Access control"] },
      { title: "Automation", points: ["Workflow", "Approvals"] }
    ],
    onedrive: [
      { title: "Storage", points: ["Cloud save", "Backup"] },
      { title: "Sync", points: ["Multi-device", "Real-time"] }
    ]
  };

  const container = document.getElementById("service-details");
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
