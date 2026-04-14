const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});
