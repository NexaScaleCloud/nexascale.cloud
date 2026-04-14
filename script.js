// NETWORK BACKGROUND
const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 40; i++) {
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    vx: Math.random()-0.5,
    vy: Math.random()-0.5
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.x+=p.vx;
    p.y+=p.vy;

    ctx.beginPath();
    ctx.arc(p.x,p.y,2,0,Math.PI*2);
    ctx.fillStyle="#38bdf8";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();
