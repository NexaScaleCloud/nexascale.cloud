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

function showService(service) {
  const title = document.getElementById("service-title");
  const points = document.getElementById("service-points");

  let data = {
    email: {
      title: "Business Email Setup",
      points: [
        "Custom domain email setup",
        "Microsoft 365 account configuration",
        "Secure email access across devices",
        "Spam protection & security setup"
      ]
    },
    teams: {
      title: "Teams Integration",
      points: [
        "Microsoft Teams setup",
        "Channel & team structuring",
        "Meeting & collaboration tools",
        "Integration with apps"
      ]
    },
    sharepoint: {
      title: "SharePoint Setup",
      points: [
        "Document management system",
        "Team collaboration portals",
        "Access control setup",
        "Workflow automation"
      ]
    },
    onedrive: {
      title: "OneDrive Configuration",
      points: [
        "Cloud file storage setup",
        "Auto backup configuration",
        "Secure file sharing",
        "Sync across devices"
      ]
    }
  };

  // Update UI
  title.innerText = data[service].title;

  points.innerHTML = "";
  data[service].points.forEach(p => {
    let li = document.createElement("li");
    li.innerText = p;
    points.appendChild(li);
  });

  // scroll into view (smooth)
  document.getElementById("service-details").scrollIntoView({
    behavior: "smooth"
  });
}

