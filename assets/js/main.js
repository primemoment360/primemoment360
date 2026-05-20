/* ===================================================================
   PrimeMoment360 — site interactions
   =================================================================== */
(function () {
  'use strict';

  /* ---- Sticky header shadow on scroll ---- */
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav toggle ---- */
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  function closeNav() {
    nav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  /* Close mobile nav when a link is tapped */
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  /* ---- FAQ accordion ---- */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      /* close all */
      faqItems.forEach(function (other) {
        other.classList.remove('open');
        other.querySelector('.faq-a').style.maxHeight = null;
      });
      /* open this one if it wasn't already */
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---- Deposit button: warn if Stripe link not yet set ---- */
  var depositBtn = document.getElementById('depositBtn');
  if (depositBtn && depositBtn.getAttribute('href').indexOf('REPLACE_WITH_YOUR_PAYMENT_LINK') !== -1) {
    depositBtn.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Online deposit payment is being set up. Please use the contact form below or email primemoment360@gmail.com to reserve your date.');
    });
  }

})();
