document.querySelector('.mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.mode-toggle').textContent = document.body.classList.contains('dark-mode') ? '🌕' : '🌙';
});// Fonction pour changer la langue
function changeLanguage(language) {
    const translations = {
        en: {
            title: "Welcome to My Website",
            description: "This is a sample page with a language switcher.",
            searchPlaceholder: "Search...",
        },
        fr: {
            title: "Bienvenue sur mon site Web",
            description: "Ceci est une page d'exemple avec un sélecteur de langue.",
            searchPlaceholder: "Rechercher...",
        },
        es: {
            title: "Bienvenido a mi sitio web",
            description: "Esta es una página de ejemplo con un selector de idioma.",
            searchPlaceholder: "Buscar...",
        }
    };

    // Vérification de l'existence des éléments avant de les modifier
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');
    const searchBar = document.getElementById('search-bar');

    if (titleElement) {
        titleElement.textContent = translations[language].title;
    }
    if (descriptionElement) {
        descriptionElement.textContent = translations[language].description;
    }
    if (searchBar) {
        searchBar.placeholder = translations[language].searchPlaceholder;
    }
}

// Écouter le changement de langue
document.getElementById('language-select').addEventListener('change', (event) => {
    changeLanguage(event.target.value);
});

// Mode sombre
document.querySelector('.mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.mode-toggle').textContent = document.body.classList.contains('dark-mode') ? '🌕' : '🌙';
});

// Changer la langue par défaut si nécessaire
document.addEventListener('DOMContentLoaded', function () {
    changeLanguage('en'); // Définir la langue par défaut comme l'anglais
});
