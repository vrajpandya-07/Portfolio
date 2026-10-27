// Theme and Navigation Controller for Vraj Pandya's Portfolio

(function () {
  'use strict';

  // --- Theme Toggle Logic ---
  const THEME_STORAGE_KEY = 'vp_portfolio_theme';
  const root = document.documentElement;

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    // Default to dark as per original design, or adapt to system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    updateThemeToggleButtons(theme);
  }

  function updateThemeToggleButtons(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle');
    toggleBtns.forEach((btn) => {
      const isLight = theme === 'light';
      btn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
      btn.innerHTML = isLight
        ? `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
           </svg>`
        : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
           </svg>`;
    });
  }

  // Initial theme application
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  document.addEventListener('DOMContentLoaded', () => {
    // Re-sync buttons after DOM is ready
    updateThemeToggleButtons(getPreferredTheme());

    // Theme toggle button click
    document.querySelectorAll('.theme-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
      });
    });

    // --- Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('nav-open');
        mobileBtn.setAttribute('aria-expanded', isOpen);
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!mobileBtn.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('nav-open')) {
          navLinks.classList.remove('nav-open');
          mobileBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // --- Copy Email Button (if present) ---
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
      const email = copyEmailBtn.getAttribute('data-email') || 'pandyavraj0808@gmail.com';
      copyEmailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(email).then(() => {
          const feedback = copyEmailBtn.querySelector('.copy-feedback');
          if (feedback) {
            feedback.textContent = 'Copied to clipboard!';
            setTimeout(() => {
              feedback.textContent = 'Click to copy';
            }, 2500);
          }
        }).catch(() => {
          // Fallback if clipboard API is restricted
          window.location.href = `mailto:${email}`;
        });
      });
    }
  });
})();
