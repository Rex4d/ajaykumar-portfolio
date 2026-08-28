const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');

function setMenu(open) {
  nav.classList.toggle('open', open);
  menu?.setAttribute('aria-expanded', String(open));
  menu?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

menu?.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));

const year = document.querySelector('.year');
if (year) year.textContent = new Date().getFullYear();
