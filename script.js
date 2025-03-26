// pauses marquee when you hover it
// const partners = document.querySelector('.partners');
// partners.addEventListener('mouseover', () => {
//     partners.style.animationPlayState = 'paused';
// });
// partners.addEventListener('mouseout', () => {
//     partners.style.animation = 'slide 10s linear infinite';
// });

// hero animation
const gradient = document.querySelector('.rd-gradient');

document.addEventListener('mousemove', function (event) {
    const x = event.pageX;
    const y = event.pageY;
    gradient.style.background = `radial-gradient(circle at ${x}px ${y}px, #7c75ff49 0.1%, var(--background-color) 30%)`;
});

const questions = document.getElementsByClassName('question');


// show/hide answers
for (let question of questions) {
    question.addEventListener('click', () => {
        question.querySelector('div:nth-child(2)').classList.toggle("show");
        const icon = question.querySelector('i');

        if (icon.classList.contains('bx-plus')) {
            icon.classList.remove('bx-plus');
            icon.classList.add('bx-minus');
        } else {
            icon.classList.remove('bx-minus');
            icon.classList.add('bx-plus');
        }

    });
}