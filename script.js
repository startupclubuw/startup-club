/* Created by Akshith Saravanan and Aditya Kumar */
/* Documented clearly for understanding purposes */

// ======= Toggle Mobile Navigation Menu =======
function toggleMenu() {
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('mobile-menu-icon');

  if (mobileNav.classList.contains('hidden')) {
    mobileNav.classList.remove('hidden');

    // Slight delay to trigger transition
    setTimeout(() => {
      mobileNav.classList.add('show');
      menuIcon.classList.add('rotated');
    }, 10);
  } else {
    mobileNav.classList.remove('show');
    menuIcon.classList.remove('rotated');

    // Delay hiding until animation completes
    setTimeout(() => {
      mobileNav.classList.add('hidden');
    }, 300);
  }
}

// ======= Alert Placeholder for Future Save Feature =======
function saveDraft() {
  alert('Draft saved!');
}

// ======= Opens External Application Form in New Tab =======
function openLink() {
  window.open('https://forms.gle/DC8XvXnLBMp5NhV6', '_blank');
}

// ======= Add Scrolled Class to Header on Scroll =======
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ======= Open Modal for Team Member =======
function openModal(memberId) {
  const modal = document.getElementById(`modal-${memberId}`);
  document.body.style.overflow = 'hidden'; // Prevent background scroll
  modal.classList.add('show');

  // Close modal when clicking outside the content area
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(memberId);
    }
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(memberId);
    }
  });
}

// ======= Close Modal for Team Member =======
function closeModal(memberId) {
  const modal = document.getElementById(`modal-${memberId}`);
  document.body.style.overflow = ''; // Restore scroll
  modal.classList.remove('show');
}
