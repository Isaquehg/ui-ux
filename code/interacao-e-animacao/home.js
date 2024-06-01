// Hide and show data picker filter
document.getElementById('toggle-date-picker').addEventListener('click', function() {
    var datePickerContainer = document.getElementById('date-picker-container');
    datePickerContainer.classList.toggle('show');
});

// Light and Dark mode
document.addEventListener('DOMContentLoaded', function () {
    const icon = document.getElementById('dark-mode-icon');

    icon.addEventListener('click', function () {
        icon.classList.toggle('dark-mode');
        // Toggle the icon between light and dark mode
        if (icon.classList.contains('dark-mode')) {
            icon.textContent = 'brightness_7'; // Change icon to represent light mode
        } else {
            icon.textContent = 'brightness_4'; // Change icon to represent dark mode
        }
    });
});

