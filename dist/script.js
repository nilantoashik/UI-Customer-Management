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

// Update time display
function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  
  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be 12
  
  // Format minutes with leading zero
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  
  const timeString = `${hours}.${minutesStr} ${ampm}`;
  const timeElement = document.getElementById('current-time');
  if (timeElement) {
    timeElement.textContent = timeString;
  }
}

// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);

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
