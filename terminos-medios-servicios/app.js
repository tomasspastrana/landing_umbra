(() => {
  'use strict';
  const printButton = document.querySelector('.print-button');
  if (printButton) {
    printButton.hidden = false;
    printButton.addEventListener('click', () => window.print());
  }

  const links = Array.from(document.querySelectorAll('.sidebar nav a[href^="#"]'));
  const setCurrent = (id) => {
    for (const link of links) {
      if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  };
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setCurrent(entry.target.id);
      }
    }, { rootMargin: '-5% 0px -70% 0px', threshold: 0 });
    for (const link of links) {
      const section = document.getElementById(link.hash.slice(1));
      if (section) observer.observe(section);
    }
  }
  for (const link of links) link.addEventListener('click', () => setCurrent(link.hash.slice(1)));
})();
