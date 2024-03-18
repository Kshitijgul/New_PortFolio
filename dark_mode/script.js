document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('checkbox');
  const body = document.body;

  // Function to toggle dark mode
  function toggleDarkMode() {
      // Check if dark mode is enabled
      const isDarkMode = body.classList.contains('dark-mode');

      // Toggle dark mode class on body
      body.classList.toggle('dark-mode', !isDarkMode);

      // Update localStorage with current dark mode state
      localStorage.setItem('darkMode', !isDarkMode);
  }

  // Function to initialize dark mode based on localStorage
  function initializeDarkMode() {
      // Check if dark mode preference is stored
      const isDarkMode = localStorage.getItem('darkMode') === 'true';

      // Apply dark mode if preference is true
      if (isDarkMode) {
          body.classList.add('dark-mode');
      }
  }

  // Add event listener to toggle dark mode when checkbox is clicked
  if (checkbox) {
      checkbox.addEventListener('change', toggleDarkMode);
  }

  // Initialize dark mode on page load
  initializeDarkMode();
});
