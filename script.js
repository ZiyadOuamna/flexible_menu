document.querySelector('.mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.mode-toggle').textContent = document.body.classList.contains('dark-mode') ? '🌕' : '🌙';
});

// Définir les traductions pour chaque langue
const translations = {
    en: {
        rename: "Rename",
        addMember: "Add Member",
        settings: "Settings",
        delete: "Delete",
        teamAccess: "Team Access",
        title: "Welcome to My Website",
        description: "This is a sample page with a language switcher."
    },
    fr: {
        rename: "Renommer",
        addMember: "Ajouter un membre",
        settings: "Paramètres",
        delete: "Supprimer",
        teamAccess: "Accès à l'équipe",
        title: "Bienvenue sur mon site web",
        description: "C'est une page d'exemple avec un sélecteur de langue."
    },
    es: {
        rename: "Renombrar",
        addMember: "Agregar miembro",
        settings: "Configuraciones",
        delete: "Eliminar",
        teamAccess: "Acceso al equipo",
        title: "Bienvenido a mi sitio web",
        description: "Esta es una página de ejemplo con un selector de idioma."
    }
};

// Fonction pour changer la langue
function changeLanguage(language) {
    // Mettre à jour le texte du menu
    document.getElementById("rename").textContent = translations[language].rename;
    document.getElementById("add-member").textContent = translations[language].addMember;
    document.getElementById("settings").textContent = translations[language].settings;
    document.getElementById("delete").textContent = translations[language].delete;
    document.getElementById("team-access").textContent = translations[language].teamAccess;

    // Mettre à jour le texte du contenu principal
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("description").textContent = translations[language].description;
}

// Écouteur d'événement pour le changement de langue
document.getElementById("language-select").addEventListener("change", function () {
    const selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
});

// Initialiser la langue par défaut (anglais)
window.onload = function () {
    changeLanguage("en");
};
