/* A little navigation behavior. The content works without JavaScript. */
(() => {
  const nav = document.querySelector('.site-nav');
  const menu = document.querySelector('.menu-btn');
  if (!nav || !menu) return;
  const links = nav.querySelector('.nav-links');
  const setOpen = (open, restoreFocus = false) => {
    nav.classList.toggle('menu-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menu.textContent = open ? '×' : '☰';
    if (restoreFocus) menu.focus();
  };
  menu.addEventListener('click', () => {
    const open = !nav.classList.contains('menu-open');
    setOpen(open);
    if (open) links.querySelector('a').focus();
  });
  nav.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('menu-open')) setOpen(false, true);
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target)) setOpen(false);
  });
  nav.addEventListener('focusout', event => {
    if (!nav.contains(event.relatedTarget)) setOpen(false);
  });
  window.matchMedia('(min-width: 961px)').addEventListener('change', () => setOpen(false));
  document.documentElement.classList.add('js');
})();
