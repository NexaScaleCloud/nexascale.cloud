function showCloudService(event, service) {

  document.querySelectorAll(".m365-card").forEach(c => {
    c.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  const data = {

    aws: [
      {
        title: "Cloud Readiness Assessment & Strategy",
        points: [
          "We evaluate your current IT infrastructure to develop a customized migration roadmap that aligns with your specific business growth and budget."
        ]
      },
      {
        title: "Architecture Design & Landing Zone",
        points: [
          "We build a secure, scalable AWS Landing Zone that serves as the high-performance foundation for all your cloud applications and data."
        ]
      },
      {
        title: "Seamless Cloud Migration",
        points: [
          "We execute the secure transfer of your physical or virtual servers to AWS with minimal downtime, ensuring your business operations continue smoothly."
        ]
      },
      {
        title: "EC2 & Compute Optimization",
        points: [
          "We provision and fine-tune AWS EC2 instances to ensure you have the exact power needed for your workloads without overpaying."
        ]
      },
      {
        title: "AWS RDS & Database Management",
        points: [
          "We deploy and manage high-availability cloud databases (RDS) that provide your business with superior data redundancy, speed, and reliability."
        ]
      },
      {
        title: "App Modernization & Serverless",
        points: [
          "We host and modernize your applications using AWS Lambda and Elastic Beanstalk, allowing for global scaling and faster performance."
        ]
      },
      {
        title: "Identity & Access Management (IAM)",
        points: [
          "We set up robust IAM policies to provide secure, granular access control across your entire cloud environment."
        ]
      },
      {
        title: "Network Security & VPC Integration",
        points: [
          "We establish encrypted Site-to-Site VPNs and Virtual Private Clouds (VPC) to bridge your physical office with the AWS cloud securely."
        ]
      },
      {
        title: "AWS Backup & Disaster Recovery",
        points: [
          "We implement automated backup solutions and AWS S3 storage plans to ensure your mission-critical data is protected against unforeseen failures."
        ]
      },
      {
        title: "Governance & Cost Optimization",
        points: [
          "We set up AWS Cost Explorer and strict governance policies to monitor your spending and eliminate waste, keeping your cloud budget on track."
        ]
      },
      {
        title: "Storage & Data Lake Solutions",
        points: [
          "We configure scalable AWS S3 buckets to handle your company’s massive data needs, from simple file shares to advanced data analytics."
        ]
      },
      {
        title: "Advanced Monitoring & Insights",
        points: [
          "We deploy AWS CloudWatch and CloudTrail to provide you with real-time visibility into the health and security of your entire cloud stack."
        ]
      },
      {
        title: "Security Hardening & GuardDuty",
        points: [
          "We activate Amazon GuardDuty and AWS Shield to provide AI-driven threat detection and continuous security compliance."
        ]
      },
      {
        title: "Automation & Infrastructure as Code",
        points: [
          "We use AWS CloudFormation to automate your environment setup, reducing human error and increasing your team's deployment speed."
        ]
      }
    ],

    gcp: [
      {
        title: "Cloud Migration & Modernization",
        points: [
          "We assess your current environment and migrate your workloads to Google Cloud using \"Lift and Shift\" or modernization strategies."
        ]
      },
      {
        title: "Compute Engine Optimization",
        points: [
          "We provision scalable Virtual Machines (VMs) tailored to your specific processing needs, ensuring high performance at a lower cost."
        ]
      },
      {
        title: "Google Kubernetes Engine (GKE)",
        points: [
          "We deploy managed container environments to help your business run modern, scalable applications with ease."
        ]
      },
      {
        title: "BigQuery Data Warehousing",
        points: [
          "We set up BigQuery to give your business high-speed analytics and insights from massive datasets without the need for server management."
        ]
      },
      {
        title: "Cloud SQL & Managed Databases",
        points: [
          "We implement fully managed MySQL, PostgreSQL, and SQL Server databases to ensure your data is always available and secure."
        ]
      },
      {
        title: "Cloud Storage Solutions",
        points: [
          "We configure secure and durable object storage for your company’s unstructured data, accessible from anywhere in the world."
        ]
      },
      {
        title: "VPC & Global Networking",
        points: [
          "We design a global Virtual Private Cloud (VPC) that connects your resources across regions with Google’s private high-speed fiber network."
        ]
      },
      {
        title: "Identity & Access Management (Cloud IAM)",
        points: [
          "We manage your organizational identities and permissions to ensure only authorized personnel can access sensitive cloud resources."
        ]
      },
      {
        title: "Cloud Operations & Monitoring",
        points: [
          "We utilize Google Cloud’s operations suite to monitor system performance, logs, and health alerts in one centralized dashboard."
        ]
      },
      {
        title: "Vertex AI & Machine Learning",
        points: [
          "We integrate Google’s powerful AI tools into your business to automate data processing and gain predictive business insights."
        ]
      },
      {
        title: "Security Command Center",
        points: [
          "We activate built-in security management to detect vulnerabilities and threats across your Google Cloud infrastructure."
        ]
      },
      {
        title: "Cloud Functions & Serverless",
        points: [
          "We build event-driven functions that execute code automatically in response to business triggers, saving you time and infrastructure costs."
        ]
      }
    ],

    workspace: [
      {
        title: "Professional Business Email Setup",
        points: [
          "We link your custom domain to Gmail, providing your team with professional, branded email addresses (@yourcompany.com)."
        ]
      },
      {
        title: "DNS & Deliverability Configuration",
        points: [
          "We set up SPF, DKIM, and DMARC records to ensure your business emails reach customers’ inboxes and stay out of spam."
        ]
      },
      {
        title: "User & Group Management",
        points: [
          "We provision user accounts and create collaborative groups (e.g., info@, hr@) to streamline your internal and external communications."
        ]
      },
      {
        title: "Google Drive & Shared Drives",
        points: [
          "We establish a centralized cloud storage structure with Shared Drives to ensure your team has secure, organized access to company files."
        ]
      },
      {
        title: "Real-Time Collaboration Tools",
        points: [
          "We train and configure your team on Docs, Sheets, and Slides to enable seamless, simultaneous co-authoring on any project."
        ]
      },
      {
        title: "Google Meet & Calendar Integration",
        points: [
          "We set up professional video conferencing and shared calendars to simplify meeting scheduling and remote team collaboration."
        ]
      },
      {
        title: "Multi-Factor Authentication (MFA)",
        points: [
          "We secure your entire workspace by enforcing 2-Step Verification to protect your company data from unauthorized logins."
        ]
      },
      {
        title: "Data Migration & Transfer",
        points: [
          "We execute a secure migration of your existing emails, contacts, and drive files from Outlook or other providers into Google Workspace."
        ]
      },
      {
        title: "Google Vault for Compliance",
        points: [
          "We implement Google Vault to manage your data retention and eDiscovery requirements for legal and regulatory compliance."
        ]
      },
      {
        title: "Mobile Device Management (MDM)",
        points: [
          "We set up endpoint management to secure your company data on employees' mobile devices, allowing for remote wipes if a device is lost."
        ]
      },
      {
        title: "Google Chat & Spaces",
        points: [
          "We create organized communication hubs within Google Chat to replace cluttered email threads with streamlined team discussions."
        ]
      },
      {
        title: "AppSheet No-Code Automation",
        points: [
          "We help you build custom business apps and automated workflows using AppSheet to digitize your manual processes."
        ]
      }
    ],

    azure: [
      {
        title: "Cloud Readiness Assessment & Strategy",
        points: [
          "We evaluate your current IT infrastructure to develop a customized migration roadmap that aligns with your specific business growth and budget."
        ]
      },
      {
        title: "Architecture Design & Landing Zone",
        points: [
          "We build a secure, scalable Azure Landing Zone that serves as the high-performance foundation for all your cloud applications and data."
        ]
      },
      {
        title: "Seamless Cloud Migration",
        points: [
          "We execute the secure transfer of your physical or virtual servers to Azure with minimal downtime, ensuring your business operations continue smoothly."
        ]
      },
      {
        title: "Virtual Machine & Compute Optimization",
        points: [
          "We provision and fine-tune Azure Virtual Machines (Windows or Linux) to ensure you have the exact power needed for your workloads without overpaying."
        ]
      },
      {
        title: "Azure SQL & Database Management",
        points: [
          "We deploy and manage high-availability cloud databases that provide your business with superior data redundancy, speed, and reliability."
        ]
      },
      {
        title: "App Service & Modernization",
        points: [
          "We host and modernize your web applications using Azure App Services, allowing for global scaling and faster performance across all user regions."
        ]
      },
      {
        title: "Identity & Access Management (Entra ID)",
        points: [
          "We integrate your local identities with Azure Active Directory (now Entra ID) to provide secure, single sign-on access across your entire cloud environment."
        ]
      },
      {
        title: "Network Security & VPN Integration",
        points: [
          "We establish encrypted Site-to-Site VPNs and Firewalls to bridge your physical office with the Azure cloud, creating a secure hybrid network."
        ]
      },
      {
        title: "Azure Backup & Disaster Recovery",
        points: [
          "We implement automated backup solutions and site recovery plans to ensure your mission-critical data is protected against any unforeseen failures."
        ]
      },
      {
        title: "Governance & Cost Optimization",
        points: [
          "We set up Azure Cost Management and strict governance policies to monitor your spending and eliminate waste, keeping your cloud budget on track."
        ]
      },
      {
        title: "Storage & Data Lake Solutions",
        points: [
          "We configure scalable Azure Storage accounts to handle your company’s massive data needs, from simple file shares to advanced data analytics."
        ]
      },
      {
        title: "Advanced Monitoring & Insights",
        points: [
          "We deploy Azure Monitor and Application Insights to provide you with real-time visibility into the health and performance of your entire cloud stack."
        ]
      },
      {
        title: "Security Hardening & Threat Protection",
        points: [
          "We activate Microsoft Defender for Cloud to provide AI-driven threat detection and continuous security compliance across your resources."
        ]
      },
      {
        title: "Cloud Automation & Serverless Logic",
        points: [
          "We build automated workflows using Azure Functions and Logic Apps to handle repetitive business tasks, increasing your team's overall efficiency."
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
