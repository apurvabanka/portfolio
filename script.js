function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const body = document.body;

  // Helper to set icon
  function setIcon(isDark) {
    if (themeToggle) themeToggle.textContent = isDark ? '☀️' : '🌙';
    if (themeToggleMobile) themeToggleMobile.textContent = isDark ? '☀️' : '🌙';
  }

  // Load theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    setIcon(true);
  } else {
    setIcon(false);
  }

  function toggleTheme() {
    const isDark = body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setIcon(isDark);
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
});
