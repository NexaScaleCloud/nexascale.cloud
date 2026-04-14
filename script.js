// PAGE LOAD
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// NAVBAR
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

// GSAP
gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero h1", { y:100, opacity:0, duration:1 });
gsap.from(".hero p", { y:50, opacity:0, delay:0.3 });

// NETWORK
const canvas = document.getElementById("network");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 50; i++) {
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
        ctx.fill();

        particles.forEach(p2=>{
            let dist=Math.hypot(p.x-p2.x,p.y-p2.y);
            if(dist<100){
                ctx.beginPath();
                ctx.moveTo(p.x,p.y);
                ctx.lineTo(p2.x,p2.y);
                ctx.stroke();
            }
        });
    });

    requestAnimationFrame(animate);
}

animate();
