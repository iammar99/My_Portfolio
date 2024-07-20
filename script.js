/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    navLinks = document.querySelectorAll('.nav__link');

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* Close menu when a link is clicked */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});


/*=============== Email Sending ===============*/

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_3g2e9sl', 'template_mfuvswl', '#contact-form', '715ijZbzCUnGRIiLh')
            .then(() => {
                // Show an alert when the message is sent successfully
                Swal.fire({
                    title: "Message Sent!",
                    text: "Thank you for reaching out to us. We appreciate your feedback and inquiries.",
                    icon: "success"
                });

                setTimeout(() => {
                    contactMessage.innerHTML = '';
                }, 5000);

                contactForm.reset();
            })

            .catch(() => {
                console.log('Message not sent because of a service problem');
            });
};

// contactForm.addEventListener('submit', sendEmail);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');
const navLinks2 = document.querySelectorAll('.nav__item a');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((section, index) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Add 'active-link' class to the corresponding link
            navLinks2[index].classList.add('active-link');
        } else {
            // Remove 'active-link' class from other links
            navLinks2[index].classList.remove('active-link');
        }
    });
}

// Call the function on scroll
window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '0',
    reset: 'true'
});

sr.reveal('.home__profile, .about__image', { origin: 'right' })
sr.reveal('.projects__container', { origin: 'top' })
sr.reveal('.home__name, .home__info, .about__container, .section__title-1, .about__info', { origin: 'left' })
sr.reveal('.services__card, .projects__section-button, .tab', { interval: 100 })

/*=============== CURSOR ANIMATION ===============*/

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = "white";
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    cursor.style.top = x;
    cursor.style.left = y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();


/*=============== DARK LIGHT MODE ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});

/*=============== SHOW SCROLL UP BUTTON ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
    window.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header');
};

window.addEventListener('scroll', scrollHeader);


/*=============== Toastify ===============*/

const toastify = () => {
    Swal.fire({
        title: "Notification!",
        text: "This website is still under working . It is almost completed and working . Only few things are under construction",
        icon: "error"
    });
}

/*=============== Projects Navbar ===============*/

document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
    if (!button.classList.contains('delete')) {
        button.classList.add('delete');
        setTimeout(() => button.classList.remove('delete'), 3200);
    }
    e.preventDefault();
}));

$(document).ready(function () {
    var value = $(this).attr('data-filter');

    if (value == "all") {
        $('.filter').show('1000');
    }

    else {
        $('.filter').not('.' + value).hide('3000');
        $('.filter').filter('.' + value).show('3000');
    }
});

if ($('.filter-button').removeClass('active')) {
    $(this).removeClass('active');
}

$(this).addClass('active')

/*=============== CHANGE TITLE WHEN WINDOW IS NOT IS FOCUS ===============*/

window.addEventListener("blur", () => {
    document.title = "Come Back 😃";
});
window.addEventListener("focus", () => {
    document.title = "document.title";
});