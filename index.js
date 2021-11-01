// DOM
const buttons = Array.from(document.querySelectorAll('#button ul li a'));

// Valiable
const length = document.querySelectorAll('#slide li').length;
const interval = 3000;
const duration = 800;
let current = 1;
let next = 2;
let intervalId;

// Default style
const hideElememts = Array.from(document.querySelectorAll('#slide li:not(:first-child)'));
hideElememts.forEach(li => {
    li.style.opacity = 0;
});

// Function
const fadeOut = el => {
    el.style.transition = `opacity ${duration}ms`;
    el.style.opacity = 0;
}

const fadeIn = el => {
    el.style.transition = `opacity ${duration}ms`;
    el.style.opacity = 1;
};

const currentBtn = () => {
    buttons.forEach(button => {
        button.classList.remove('target');
    });
    document.querySelector(`#button li:nth-child(${current}) a`).classList.add('target');
};

const slideTimer = () => {
    fadeOut(document.querySelector(`#slide li:nth-child(${current})`));
    fadeIn(document.querySelector(`#slide li:nth-child(${next})`));
    current = next;
    next++;
    if(next > length) {
        next = 1;
    }
    currentBtn();
};

const clickEvent = e => {
    e.preventDefault();
    const el = e.target;
    next = el.innerHTML;
    clearInterval(intervalId);
    intervalId = setInterval(slideTimer, interval);
    slideTimer();
};

// Event
buttons.forEach(button => {
    button.addEventListener('click', clickEvent);
});

// Run
intervalId = setInterval(slideTimer, interval);

