// Menyudagi linkni bosganda telefonda menyu yopilsin
const menu = document.getElementById('navbarSupportedContent');

document
    .querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle), .dropdown-item')
    .forEach((link) => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('show')) {
                bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });

// Bo'limlar scroll qilganda silliq paydo bo'lsin
const sections = document.querySelectorAll('.about, .capabilities, .work, .footer');
sections.forEach((el) => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach((el) => observer.observe(el));