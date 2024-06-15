// Carrousel
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
  
    let currentIndex = 0;
  
    function updateCarousel() {
      const offset = -currentIndex * 100;
      carouselInner.style.transform = `translateX(${offset}%)`;
    }
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
      updateCarousel();
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    });
  });
  
// Dark Mode
function applyTheme(darkModeEnabled) {
    if (darkModeEnabled) {
        console.log("Applying dark mode colors");
        document.documentElement.style.setProperty('--cor-blue', 'var(--dark-cor-blue)');
        document.documentElement.style.setProperty('--cor-white', 'var(--dark-cor-white)');
        document.documentElement.style.setProperty('--cor-black', 'var(--dark-cor-black)');
        document.documentElement.style.setProperty('--cor-gray', 'var(--dark-cor-gray)');
        document.documentElement.style.setProperty('--cor-text', '#f2f2f2');
        document.body.style.backgroundColor = 'var(--dark-cor-white)';
    } else {
        console.log("Applying light mode colors");
        document.documentElement.style.setProperty('--cor-blue', '#0739ff');
        document.documentElement.style.setProperty('--cor-white', '#f2fafc');
        document.documentElement.style.setProperty('--cor-black', '#00000030');
        document.documentElement.style.setProperty('--cor-gray', '#DADADA');
        document.documentElement.style.setProperty('--cor-text', '#000000');
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
