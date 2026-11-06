// Mobile menu toggle
const menu = document.getElementById('menu');
const links = document.getElementById('links');

menu.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

// Close the menu after tapping a link
links.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }
});

// Auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();
