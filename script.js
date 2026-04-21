// Email obfuscation
(function () {
  const u = 'falkoneitan';
  const d = 'gmail.com';
  const href = 'mailto:' + u + '\u0040' + d;
  ['email-btn', 'email-btn-2'].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.href = href;
  });
})();

// Nav scroll effect
(function () {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
})();

// Scroll fade-in via IntersectionObserver
(function () {
  const targets = document.querySelectorAll('.fade-in');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('visible'); });
    return;
  }
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  targets.forEach(function (el) { observer.observe(el); });
})();
