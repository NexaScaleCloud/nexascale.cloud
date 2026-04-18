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

/* CURSOR EFFECT */
document.querySelectorAll(".box, .card").forEach(el => {
  el.addEventListener("mousemove", e => {
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", e.clientX - rect.left + "px");
    el.style.setProperty("--y", e.clientY - rect.top + "px");
  });
});

function showHomeService(event, service) {
  // remove active from all cards
  document.querySelectorAll(".home-card").forEach(c => {
    c.classList.remove("active");
  });

  // add active to clicked
  event.currentTarget.classList.add("active");

  // (OPTIONAL) details data
  const data = {
    cloud: [
      { title: "Infrastructure", points: ["AWS", "Azure"] },
      { title: "Scaling", points: ["Auto scale", "Load balance"] }
    ],
    security: [
      { title: "Protection", points: ["Firewall", "Monitoring"] },
      { title: "Compliance", points: ["Policies", "Audits"] }
    ]
  };

  const container = document.getElementById("home-details");

  if (!container) return; // safety

  container.innerHTML = "";

  if (!data[service]) return;

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


function openContactPopup() {
  document.getElementById("contactPopup").style.display = "block";
}

function closeContactPopup() {
  document.getElementById("contactPopup").style.display = "none";
}

/* Close when clicking outside */
window.onclick = function(event) {
  const popup = document.getElementById("contactPopup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
};

