// BACKGROUND ANIMATION
const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 40; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: Math.random() - 0.5,
    vy: Math.random() - 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#38bdf8";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();


// 🔥 SERVICE FUNCTION (MAIN FIX)
function showService(service) {
  const container = document.getElementById("service-details");

  // REMOVE ACTIVE FROM ALL
  document.querySelectorAll(".card").forEach(c => {
    c.classList.remove("active");
  });

  // ADD ACTIVE TO CLICKED
  event.currentTarget.classList.add("active");

  const data = {
    email: [
      {
        title: "Custom Domain Email",
        points: [
          "Professional business email",
          "Domain-based identity",
          "Easy management",
          "Scalable setup"
        ]
      },
      {
        title: "Microsoft 365 Setup",
        points: [
          "Account creation",
          "License configuration",
          "Admin setup",
          "User management"
        ]
      },
      {
        title: "Secure Access",
        points: [
          "Multi-device login",
          "Encryption enabled",
          "Secure protocols",
          "Access control"
        ]
      },
      {
        title: "Spam Protection",
        points: [
          "Anti-spam filters",
          "Threat detection",
          "Email security",
          "Safe inbox"
        ]
      }
    ],

    teams: [
      {
        title: "Teams Setup",
        points: [
          "Account configuration",
          "User onboarding",
          "Access setup",
          "Permissions"
        ]
      },
      {
        title: "Channels",
        points: [
          "Structured teams",
          "Department channels",
          "Private groups",
          "Better communication"
        ]
      },
      {
        title: "Meetings",
        points: [
          "Video calls",
          "Screen sharing",
          "Recording",
          "Scheduling"
        ]
      },
      {
        title: "Integrations",
        points: [
          "Apps connection",
          "Workflow tools",
          "Automation",
          "Collaboration"
        ]
      }
    ],

    sharepoint: [
      {
        title: "Document Management",
        points: [
          "Central storage",
          "File organization",
          "Version control",
          "Access tracking"
        ]
      },
      {
        title: "Team Sites",
        points: [
          "Collaboration hubs",
          "Shared workspace",
          "Internal portals",
          "Easy navigation"
        ]
      },
      {
        title: "Permissions",
        points: [
          "Role-based access",
          "Security control",
          "User restrictions",
          "Safe sharing"
        ]
      },
      {
        title: "Automation",
        points: [
          "Workflow creation",
          "Task automation",
          "Approval flows",
          "Efficiency boost"
        ]
      }
    ],

    onedrive: [
      {
        title: "Cloud Storage",
        points: [
          "Secure storage",
          "Anywhere access",
          "Scalable space",
          "Fast upload"
        ]
      },
      {
        title: "Backup",
        points: [
          "Auto backup",
          "File recovery",
          "Version restore",
          "Safe data"
        ]
      },
      {
        title: "Sharing",
        points: [
          "Easy sharing",
          "Link access",
          "Permissions",
          "Secure transfer"
        ]
      },
      {
        title: "Sync",
        points: [
          "Device sync",
          "Real-time updates",
          "Offline access",
          "Seamless usage"
        ]
      }
    ]
  };

  const selected = data[service];

  container.innerHTML = "";

  selected.forEach(item => {
    const box = document.createElement("div");
    box.className = "box";

    const title = document.createElement("h3");
    title.innerText = item.title;

    const list = document.createElement("ul");

    item.points.forEach(p => {
      const li = document.createElement("li");
      li.innerText = p;
      list.appendChild(li);
    });

    box.appendChild(title);
    box.appendChild(list);
    container.appendChild(box);
  });
}


// CURSOR GLOW EFFECT
document.querySelectorAll(".box, .card, .back-btn").forEach(el => {
  el.addEventListener("mousemove", e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--x", x + "px");
    el.style.setProperty("--y", y + "px");
  });
});
