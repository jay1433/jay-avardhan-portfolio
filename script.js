const nav = document.getElementById('nav');
const progress = document.getElementById('progress');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const links = [...navLinks.querySelectorAll('a')];
const sections = links.map((a) => document.querySelector(a.getAttribute('href')));

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
links.forEach((a) => a.addEventListener('click', () => {
  burger.classList.remove('open');
  navLinks.classList.remove('open');
}));

function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 10);
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${(y / max) * 100}%`;

  let current = -1;
  sections.forEach((s, i) => { if (s && s.offsetTop - 140 <= y) current = i; });
  links.forEach((a, i) => a.classList.toggle('active', i === current));
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    io.unobserve(e.target);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  io.observe(el);
});

const counters = document.querySelectorAll('.num[data-count]');
const countIO = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / 1400, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countIO.unobserve(el);
  });
}, { threshold: 0.6 });
counters.forEach((c) => countIO.observe(c));

document.getElementById('year').textContent = new Date().getFullYear();
