// dark-mode-toggle.js

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleButton.textContent = body.classList.contains('dark-mode') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
});

// Save the user's theme preference to localStorage
toggleButton.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Load the user's theme preference from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Toggle Light Mode';
  }
});
