const partners = document.querySelector('.partners');
partners.addEventListener('mouseover', () => {
    partners.style.animationPlayState = 'paused';
});
partners.addEventListener('mouseout', () => {
    partners.style.animation = 'slide 10s linear infinite';
});

const gradient = document.querySelector('.rd-gradient');

document.addEventListener('mousemove', function(event) {
    const x = event.pageX;
    const y = event.pageY;
    gradient.style.background = `radial-gradient(circle at ${x}px ${y}px, #7c75ff49 0.1%, var(--background-color) 30%)`;
    console.log(`Mouse X: ${x}, Mouse Y: ${y}`);
});