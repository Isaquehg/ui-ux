// Hide and show data picker filter
document.getElementById('toggle-date-picker').addEventListener('click', function() {
    var datePickerContainer = document.getElementById('date-picker-container');
    datePickerContainer.classList.toggle('show');
});

// Dark mode
console.log("Script started");

// Função para aplicar o tema baseado no estado do darkModeEnabled
function applyTheme(darkModeEnabled) {
    if (darkModeEnabled) {
        console.log("Applying dark mode colors");
        document.documentElement.style.setProperty('--cor-blue', 'var(--dark-cor-blue)');
        document.documentElement.style.setProperty('--cor-white', 'var(--dark-cor-white)');
        document.documentElement.style.setProperty('--cor-black', 'var(--dark-cor-black)');
        document.documentElement.style.setProperty('--cor-gray', 'var(--dark-cor-gray)');
        document.body.style.backgroundColor = 'var(--dark-cor-white)';
    } else {
        console.log("Applying light mode colors");
        document.documentElement.style.setProperty('--cor-blue', '#0739ff');
        document.documentElement.style.setProperty('--cor-white', '#f2fafc');
        document.documentElement.style.setProperty('--cor-black', '#00000030');
        document.documentElement.style.setProperty('--cor-gray', '#DADADA');
        document.body.style.backgroundColor = '#f2fafc';
    }
}

// Obtenha o estado inicial do localStorage
var darkModeEnabled = localStorage.getItem('darkMode') === 'true';
console.log("Initial darkModeEnabled:", darkModeEnabled);
applyTheme(darkModeEnabled); // Aplica o tema inicial

document.getElementById('dark-mode').addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    
    // Alterna o estado
    darkModeEnabled = !darkModeEnabled;
    console.log("Toggled darkModeEnabled to:", darkModeEnabled);

    // Atualiza o localStorage
    localStorage.setItem('darkMode', darkModeEnabled ? 'true' : 'false');
    console.log("Updated localStorage with darkMode:", localStorage.getItem('darkMode'));

    // Aplica o tema atualizado
    applyTheme(darkModeEnabled);
});

