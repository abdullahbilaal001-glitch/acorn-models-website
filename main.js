// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('open');
      });
    });
  }

  // Smooth scroll behavior for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Show success message
      const formData = new FormData(this);
      console.log('Form submitted:', Object.fromEntries(formData));
      alert('Thank you for reaching out! We\'ll be in touch soon.');
      this.reset();
    });
  }

  // Add scroll animation for elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
      }
    });
  }, observerOptions);

  // Observe cards and panels
  document.querySelectorAll('.model-card, .panel').forEach(el => {
    el.style.opacity = '0.8';
    observer.observe(el);
  });
});