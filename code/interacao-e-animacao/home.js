// Hide and show data picker filter
document.getElementById('toggle-date-picker').addEventListener('click', function() {
    var datePickerContainer = document.getElementById('date-picker-container');
    datePickerContainer.classList.toggle('show');
});

// Dark mode
const icon = document.getElementById('dark-mode-icon');
let darkModeEnabled = false;

function enableDarkMode() {
    darkModeEnabled = true;
    document.documentElement.style.setProperty('--cor-black', '#000030');
    document.documentElement.style.setProperty('--cor-white', '#f2fafc');
    document.documentElement.style.setProperty('--cor-gray', '#808080');
    document.documentElement.style.setProperty('--cor-blue', '#0739ff');
}

function enableLightMode() {
    document.documentElement.style.setProperty('--cor-black', '#ffffff');
    document.documentElement.style.setProperty('--cor-white', '#ffffff');
    document.documentElement.style.setProperty('--cor-gray', '#ffffff');
    document.documentElement.style.setProperty('--cor-blue', '#ffffff');
}

function toggleDarkMode() {
    if (darkModeEnabled) {
        enableLightMode();
    } else {
        enableDarkMode()
    }
}

icon.addEventListener('click', function () {
    toggleDarkMode();
});

