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


  // CURSOR GLOW FOLLOW EFFECT
document.querySelectorAll(".box, .card").forEach(el => {
  el.addEventListener("mousemove", e => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--x", x + "px");
    el.style.setProperty("--y", y + "px");
  });
});


function showService(service) {
  const container = document.getElementById("service-details");

  let data = {
    email: [
      {
        title: "Business Email Setup",
        points: [
          "Custom domain email setup",
          "Microsoft 365 account configuration",
          "Secure email access across devices",
          "Spam protection & security setup"
        ]
      },
      {
        title: "User Management",
        points: [
          "Create & manage users",
          "Assign licenses",
          "Password policy setup",
          "Access control management"
        ]
      },
      {
        title: "Security & Protection",
        points: [
          "Multi-factor authentication",
          "Anti-spam protection",
          "Data security policies",
          "Admin control setup"
        ]
      }
    ]
  };

  container.innerHTML = "";

  data[service].forEach(section => {
    const box = document.createElement("div");
    box.className = "service-box";

    const title = document.createElement("h3");
    title.innerText = section.title;

    const ul = document.createElement("ul");

    section.points.forEach(point => {
      const li = document.createElement("li");
      li.innerText = point;
      ul.appendChild(li);
    });

    box.appendChild(title);
    box.appendChild(ul);
    container.appendChild(box);
  });

  container.scrollIntoView({ behavior: "smooth" });
}
