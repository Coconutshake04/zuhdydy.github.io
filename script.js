function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
    document.getElementById('current-date-time').innerText = dateTimeString;
  }
  
  // Update the date and time every second
  setInterval(updateDateTime, 1000);
  updateDateTime(); // Call immediately to show date/time on page load