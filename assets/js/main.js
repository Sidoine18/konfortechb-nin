// KONFORTECH BÉNIN — script partagé
document.documentElement.classList.add('js-ready');

document.addEventListener('DOMContentLoaded', function () {

  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Header : ombre légère au scroll
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.style.boxShadow = window.scrollY > 8 ? '0 4px 16px rgba(18,22,28,.06)' : 'none';
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Révélation au scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Formulaires (devis / contact) — démo front-end, sans backend pour l'instant
  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var note = form.querySelector('.form-note');
      form.querySelectorAll('input, textarea, select').forEach(function (f) { f.disabled = true; });
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Envoyé ✓'; }
      if (note) { note.classList.add('success'); note.setAttribute('role', 'status'); }
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  // Filtres réalisations (si présents)
  var filterButtons = document.querySelectorAll('.filters [data-filter]');
  var filterItems = document.querySelectorAll('[data-category]');
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.getAttribute('data-filter');
      filterItems.forEach(function (item) {
        item.style.display = (f === 'all' || item.getAttribute('data-category') === f) ? '' : 'none';
      });
    });
  });
});
