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

  const data = {
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

  const selected = data[service];

  if (!selected) return;

  container.innerHTML = "";

  const box = document.createElement("div");
  box.className = "box";

  const title = document.createElement("h2");
  title.innerText = selected.title;

  const list = document.createElement("ul");

  selected.points.forEach(point => {
    const li = document.createElement("li");
    li.innerText = point;
    list.appendChild(li);
  });

  const backBtn = document.createElement("div");
  backBtn.className = "back-btn";
  backBtn.innerText = "Back";
  backBtn.onclick = () => {
    container.innerHTML = "";
  };

  box.appendChild(title);
  box.appendChild(list);
  box.appendChild(backBtn);

  container.appendChild(box);

  setTimeout(() => {
    container.scrollIntoView({
      behavior: "smooth"
    });
  }, 100);
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
