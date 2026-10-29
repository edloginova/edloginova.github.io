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
  window.matchMedia('(min-width: 1121px)').addEventListener('change', () => setOpen(false));
  document.documentElement.classList.add('js');
})();

/* The travel list remains fully readable without this enhancement. */
(() => {
  const search = document.querySelector('#country-search');
  if (search) {
    const countries = [...document.querySelectorAll('[data-country]')];
    const updateCountries = () => {
      const term = search.value.trim().toLocaleLowerCase();
      let count = 0;
      countries.forEach(country => {
        country.hidden = !country.dataset.country.includes(term);
        if (!country.hidden) count++;
      });
      document.querySelector('#country-result').textContent = `${count} of ${countries.length} countries`;
      document.querySelector('#country-empty').hidden = count !== 0;
    };
    search.addEventListener('input', updateCountries);
    search.form.addEventListener('reset', () => {
      search.value = '';
      updateCountries();
      search.focus();
    });
  }

  const map = document.querySelector('#map-dialog');
  if (map && typeof map.showModal === 'function') {
    document.querySelector('[data-map-open]').addEventListener('click', event => {
      event.preventDefault();
      map.showModal();
    });
    map.querySelector('[data-map-close]').addEventListener('click', () => map.close());
    map.addEventListener('click', event => {
      if (event.target === map) map.close();
    });
    map.querySelector('#map-zoom').addEventListener('input', event => {
      map.style.setProperty('--zoom', event.target.value);
    });
  }
})();
