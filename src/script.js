const counter = document.querySelector(".counter");
let count = 0;

// Store the interval ID
const interval = setInterval(() => {
  if (count >= 92) {
    clearInterval(interval); // stop correctly
  } else {
    count += 1;
    counter.textContent = count + "%";
  }
}, 42);

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.header-link');
  const pages = document.querySelectorAll('.page');
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

  // Mobile menu toggle
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      mobileMenuOverlay.classList.toggle('active');
    });

    // Close mobile menu when clicking overlay
    if (mobileMenuOverlay) {
      mobileMenuOverlay.addEventListener('click', function() {
        navMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
      });
    }

    // Close button functionality
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', function() {
        navMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
      });
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links and pages
      navLinks.forEach(l => l.classList.remove('active'));
      pages.forEach(p => p.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Get the target page id from data-page attribute
      const targetPage = this.getAttribute('data-page');
      
      // Show the target page
      const targetPageElement = document.getElementById(targetPage + '-page');
      if (targetPageElement) {
        targetPageElement.classList.add('active');
      }

      // Close mobile menu after navigation
      if (navMenu) {
        navMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
      }
    });
  });
});
