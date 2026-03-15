AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-expo'
});

// FAQ Toggle
const faqButtons = document.querySelectorAll('.faq-button');
faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        button.classList.toggle('active');
        if (button.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = "0";
        }
    });
});

// Contador Animado
const counters = document.querySelectorAll('.counter');
const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace('+', '');
        const increment = target / 50;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment) + (target === 99 ? '' : '+');
            setTimeout(animateCounters, 30);
        } else {
            counter.innerText = target + (target === 99 ? '' : '+');
        }
    });
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
        }
    });
}, { threshold: 0.5 });

counters.forEach(c => observer.observe(c));

