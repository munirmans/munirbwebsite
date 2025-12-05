// ========================================
// Main JavaScript for Munir B. Portfolio
// ========================================

(function() {
  'use strict';

  // ========================================
  // Mobile Menu Toggle
  // ========================================
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const nav = document.querySelector('.nav');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-link');
    navLinkItems.forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = nav.contains(event.target);
      if (!isClickInsideNav && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }
    });
  }

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#" (for Cal.com links)
      if (href === '#') {
        return;
      }

      e.preventDefault();

      const target = document.querySelector(href);
      if (target) {
        const navHeight = nav.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // Navbar Scroll Effect
  // ========================================
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    // Hide/show navbar on scroll (optional - can be enabled)
    // if (currentScroll > lastScroll && currentScroll > 100) {
    //   nav.style.transform = 'translateY(-100%)';
    // } else {
    //   nav.style.transform = 'translateY(0)';
    // }

    lastScroll = currentScroll;
  });

  // ========================================
  // Intersection Observer for Fade-in Animations
  // ========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for fade-in animation
  const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .about-content, .about-image-container');
  animatedElements.forEach(function(el) {
    observer.observe(el);
  });

  // ========================================
  // Cal.com Integration Placeholder
  // ========================================
  // TODO: Add Cal.com embed or link
  // Replace '#' in HTML with actual Cal.com booking link
  // Example: https://cal.com/munirb/30min

  const calLinks = document.querySelectorAll('#cal-link, #cal-cta');
  calLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      // Temporary alert - replace with actual Cal.com link
      alert('Cal.com booking link will be added here. Please provide your Cal.com URL.');
      e.preventDefault();
    });
  });

  // ========================================
  // Email Protection (Simple obfuscation)
  // ========================================
  // Note: Email is already in HTML. This is an optional enhancement
  // for additional protection against spam bots

  // ========================================
  // Form Validation (if adding a contact form)
  // ========================================
  // Placeholder for future contact form functionality

  // ========================================
  // Performance: Lazy Loading Images
  // ========================================
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(function(img) {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
  }

  // ========================================
  // Accessibility: Focus Management
  // ========================================
  // Ensure keyboard navigation works properly
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      // Close mobile menu on Escape key
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
      }
    }
  });

  // ========================================
  // Analytics Tracking (Placeholder)
  // ========================================
  // TODO: Add Google Analytics or other tracking
  // Example: Track button clicks, scroll depth, etc.

  function trackEvent(category, action, label) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', category, action, label);
    // Replace with actual analytics code:
    // gtag('event', action, { 'event_category': category, 'event_label': label });
  }

  // Track CTA button clicks
  const ctaButtons = document.querySelectorAll('.btn-primary');
  ctaButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const buttonText = this.textContent.trim();
      trackEvent('CTA', 'click', buttonText);
    });
  });

  // ========================================
  // Console Message (Optional branding)
  // ========================================
  console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #D97706;');
  console.log('%cInterested in how this site was built? Let\'s talk!', 'font-size: 14px; color: #6B7280;');
  console.log('%cContact: contact@munirb.com', 'font-size: 12px; color: #D97706;');

})();
