// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// ===== Typed Text Effect =====
const typedTextEl = document.getElementById('typedText');
const phrases = [
  'Lead RPA Developer',
  'UiPath Specialist',
  'Power Automate Expert',
  'Process Automation Architect'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typedTextEl.textContent = currentPhrase.substring(0, charIndex);

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentPhrase.length) {
    typeSpeed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typeSpeed = 400;
  }

  setTimeout(typeEffect, typeSpeed);
}

typeEffect();

// ===== Scroll Reveal Animations =====
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => revealObserver.observe(el));

// ===== Animated Counters =====
const stats = document.querySelectorAll('.stat h3');
let countersStarted = false;

function animateCounters() {
  stats.forEach((stat) => {
    const target = parseInt(stat.getAttribute('data-count'), 10);
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 60));

    const update = () => {
      current += increment;
      if (current >= target) {
        stat.textContent = target;
      } else {
        stat.textContent = current;
        requestAnimationFrame(update);
      }
    };
    update();
  });
}

const aboutSection = document.getElementById('about');
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !countersStarted) {
        animateCounters();
        countersStarted = true;
      }
    });
  },
  { threshold: 0.3 }
);

if (aboutSection) counterObserver.observe(aboutSection);

// ===== Navbar background + active link on scroll =====
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[data-link]');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navAnchors.forEach((a) => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
});

// ===== Footer Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Contact Form (placeholder handler) =====
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for reaching out! This form is not yet connected to an email service. Please email jayavardhan77@gmail.com directly for now.');
  contactForm.reset();
});
