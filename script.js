// =============================
// CANVAS BACKGROUND (IMPROVED)
// =============================
const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];

function initParticles() {
  particles = [];
  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random() - 0.5,
      vy: Math.random() - 0.5
    });
  }
}

initParticles();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    // bounce on edges
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#38bdf8";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();


// =============================
// SERVICE DETAIL LOGIC (UPGRADED)
// =============================
function showService(service) {
  const box = document.getElementById("service-details");
  const title = document.getElementById("service-title");
  const content = document.getElementById("service-content");

  const data = {
    email: {
      title: "Business Email Setup",
      sections: [
        {
          heading: "Domain & Email Configuration",
          points: [
            "Custom domain email setup (yourname@company.com)",
            "DNS & MX record configuration",
            "Professional email identity setup",
            "Mailbox creation & user management"
          ]
        },
        {
          heading: "Security & Protection",
          points: [
            "Advanced spam filtering",
            "Email encryption setup",
            "Multi-factor authentication (MFA)",
            "Threat protection policies"
          ]
        }
      ]
    },

    teams: {
      title: "Teams Integration",
      sections: [
        {
          heading: "Team Setup",
          points: [
            "Microsoft Teams deployment",
            "Team & channel structuring",
            "User role configuration",
            "Department-based setup"
          ]
        },
        {
          heading: "Collaboration Tools",
          points: [
            "Meeting & video conferencing setup",
            "File sharing integration",
            "App integrations (Planner, OneNote)",
            "Workflow automation"
          ]
        }
      ]
    },

    sharepoint: {
      title: "SharePoint Setup",
      sections: [
        {
          heading: "Document Management",
          points: [
            "Centralized file storage",
            "Version control setup",
            "Access permissions",
            "Secure document sharing"
          ]
        },
        {
          heading: "Automation & Workflow",
          points: [
            "Approval workflows",
            "Automated document routing",
            "Integration with Microsoft apps",
            "Custom business workflows"
          ]
        }
      ]
    },

    onedrive: {
      title: "OneDrive Configuration",
      sections: [
        {
          heading: "Storage Setup",
          points: [
            "Cloud storage configuration",
            "Auto backup setup",
            "Folder structure organization",
            "Secure access control"
          ]
        },
        {
          heading: "Sync & Access",
          points: [
            "Multi-device sync setup",
            "Mobile & desktop access",
            "Offline file access",
            "Secure sharing options"
          ]
        }
      ]
    }
  };

  // update title
  title.innerText = data[service].title;

  // clear old content
  content.innerHTML = "";

  // create sections dynamically
  data[service].sections.forEach(sec => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("detail-section");

    const heading = document.createElement("h3");
    heading.innerText = sec.heading;

    const ul = document.createElement("ul");

    sec.points.forEach(p => {
      const li = document.createElement("li");
      li.innerText = p;
      ul.appendChild(li);
    });

    sectionDiv.appendChild(heading);
    sectionDiv.appendChild(ul);
    content.appendChild(sectionDiv);
  });

  // show box
  box.style.display = "block";

  // smooth scroll
  box.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
