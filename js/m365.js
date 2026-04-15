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
  },
  {
    title: "Ongoing Health & License Optimization",
    points: [
          "Periodically review your setup to eliminate waste and secure offboarded accounts."
    ]
  }
],
teams: [
  {
    title: "Teams Architecture Planning",
    points: [
      "Design a logical organizational structure by defining high-level Teams and focused Channels for efficient communication."
    ]
  },
  {
    title: "Global Admin Configuration",
    points: [
      "Set organization-wide defaults within the Teams Admin Center for chat, meetings, and data-sharing permissions."
    ]
  },
  {
    title: "Core Team & Channel Creation",
    points: [
      "Build dedicated workspaces for departments and projects to centralize searchable discussions and resources."
    ]
  },
  {
    title: "External & Guest Access Governance",
    points: [
      "Establish secure protocols for collaborating with external partners and vendors while maintaining internal data privacy."
    ]
  },
  {
    title: "SharePoint & OneDrive Backend Sync",
    points: [
      "Integrate Teams with Microsoft cloud storage to enable real-time document co-authoring and version control."
    ]
  },
  {
    title: "Standardized Naming Conventions",
    points: [
      "Apply a consistent naming framework to keep your digital workspace organized and scalable as the company grows."
    ]
  },
  {
    title: "Meeting & Live Event Policies",
    points: [
      "Standardize meeting lobby settings, recording rights, and screen-sharing rules for professional virtual engagement."
    ]
  },
  {
    title: "Teams Phone & Voice Integration",
    points: [
      "Configure cloud-based telephony, including auto-attendants and call queues, to unify business communications."
    ]
  },
  {
    title: "Third-Party App & Bot Integration",
    points: [
      "Connect productivity tools and automated bots directly into channels to streamline workflows."
    ]
  },
  {
    title: "Microsoft Copilot & AI Activation",
    points: [
      "Enable AI-driven features for meeting summaries, insights, and task tracking to improve productivity."
    ]
  },
  {
    title: "App Setup & Deployment Policies",
    points: [
      "Deploy Teams applications across corporate and mobile devices for a consistent user experience."
    ]
  },
  {
    title: "Lifecycle & Retention Management",
    points: [
      "Implement expiry policies to archive inactive teams and manage long-term data lifecycle."
    ]
  }
],
  sharepoint: [
  {
    title: "Governance & Information Architecture",
    points: [
      "We design a structured framework to organize, manage, and secure your company data efficiently."
    ]
  },
  {
    title: "Site Type Strategy (Team vs. Communication)",
    points: [
      "We deploy the right mix of Team Sites for collaboration and Communication Sites for company-wide updates."
    ]
  },
  {
    title: "Hub Site Configuration",
    points: [
      "We connect related sites under unified Hub Sites for seamless navigation and centralized search."
    ]
  },
  {
    title: "Advanced Permissions & Security Groups",
    points: [
      "We configure role-based access so users only see content relevant to their responsibilities."
    ]
  },
  {
    title: "Document Library & Metadata Design",
    points: [
      "We structure your document libraries using metadata for faster search, filtering, and organization."
    ]
  },
  {
    title: "Version Control & Co-Authoring",
    points: [
      "We enable real-time collaboration with version history to prevent data loss and duplication."
    ]
  },
  {
    title: "External Sharing Governance",
    points: [
      "We implement secure sharing controls for collaborating with external clients without compromising data."
    ]
  },
  {
    title: "Intranet Branding & Customization",
    points: [
      "We design your SharePoint intranet with your branding for a professional internal experience."
    ]
  },
  {
    title: "Workflow Automation (Power Automate)",
    points: [
      "We automate approvals and repetitive tasks to improve efficiency and reduce manual work."
    ]
  },
  {
    title: "OneDrive Sync Integration",
    points: [
      "We enable seamless file access by syncing SharePoint libraries with local devices."
    ]
  },
  {
    title: "Managed Metadata & Term Store",
    points: [
      "We standardize naming and classification for consistent data organization across your system."
    ]
  },
  {
    title: "Sensitivity Labels & Data Protection",
    points: [
      "We secure sensitive documents with restrictions on sharing, printing, and downloading."
    ]
  },
  {
    title: "Search Optimization & Indexing",
    points: [
      "We enhance search capabilities to help your team quickly find critical documents and resources."
    ]
  },
  {
    title: "Site Lifecycle & Archiving",
    points: [
      "We manage site lifecycle with automated archiving to reduce clutter and optimize storage."
    ]
  }
],

onedrive: [
  {
    title: "Personal Cloud Storage Provisioning",
    points: [
      "We set up secure personal cloud storage for each user to store and manage their work files efficiently."
    ]
  },
  {
    title: "Secure File Access & Sharing",
    points: [
      "We configure controlled sharing options to enable secure collaboration both internally and externally."
    ]
  },
  {
    title: "OneDrive Sync Configuration",
    points: [
      "We enable seamless synchronization between cloud and local devices for easy file access."
    ]
  },
  {
    title: "Cross-Device Accessibility",
    points: [
      "We ensure your files are accessible across desktop, web, and mobile devices for flexible working."
    ]
  },
  {
    title: "File Versioning & Recovery",
    points: [
      "We activate version history and recovery options to restore files in case of accidental changes or deletion."
    ]
  },
  {
    title: "Offline Access Enablement",
    points: [
      "We configure offline access so users can work without internet and sync changes later."
    ]
  },
  {
    title: "Security & Access Controls",
    points: [
      "We implement advanced security policies to protect data and prevent unauthorized access."
    ]
  },
  {
    title: "Data Loss Prevention (DLP)",
    points: [
      "We apply policies to prevent accidental sharing of sensitive business information."
    ]
  },
  {
    title: "External Collaboration Controls",
    points: [
      "We define secure sharing rules with expiry links and permission-based access."
    ]
  },
  {
    title: "Storage Management & Optimization",
    points: [
      "We monitor and optimize storage usage to ensure efficient data management."
    ]
  },
  {
    title: "Backup & Ransomware Protection",
    points: [
      "We configure built-in protection to safeguard data from deletion and ransomware threats."
    ]
  },
  {
    title: "Microsoft 365 App Integration",
    points: [
      "We integrate OneDrive with Office apps for real-time collaboration and auto-saving."
    ]
  },
  {
    title: "Admin Monitoring & Reporting",
    points: [
      "We provide admin insights to track usage, sharing activity, and potential risks."
    ]
  },
  {
    title: "Lifecycle & Cleanup Policies",
    points: [
      "We implement cleanup and lifecycle policies to maintain an organized storage environment."
    ]
  }
],

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
