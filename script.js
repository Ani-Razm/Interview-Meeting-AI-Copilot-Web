// pauses marquee when you hover it
const partners = document.querySelector('.partners');
partners.addEventListener('mouseover', () => {
    partners.style.animationPlayState = 'paused';
});
partners.addEventListener('mouseout', () => {
    partners.style.animation = 'slide 10s linear infinite';
});

// hero background animation
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

// scroll reveal
const sr1 = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
    reset: false
})

sr1.reveal(".testimonial:nth-child(1)", { delay: 100 });
sr1.reveal(".testimonial:nth-child(2)", { delay: 300 });
sr1.reveal(".testimonial:nth-child(3)", { delay: 500 });

const sr2 = ScrollReveal({
    origin: "top",
    distance: "0px",
    duration: 1000,
    reset: true
})

sr2.reveal(".step:nth-child(1)", { delay: 100 });
sr2.reveal(".step:nth-child(2)", { delay: 400 });
sr2.reveal(".step:nth-child(3)", { delay: 700 });

// menu
const menu = document.querySelector('.bx-menu');
const navList = document.querySelector('.nav-wrapper')

menu.addEventListener('click', () => {
    menu.classList.toggle("bx-x");
    navList.classList.toggle("drop");
});

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navList.classList.remove("drop");
};