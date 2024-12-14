document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");
    const sections = document.querySelectorAll(".section");

    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            // Remove active class from all menu items
            menuItems.forEach((el) => el.classList.remove("active"));

            // Add active class to the clicked menu item
            item.classList.add("active");

            // Show the corresponding section
            const sectionId = item.dataset.section;
            sections.forEach((section) => {
                section.classList.remove("active");
                if (section.id === sectionId) {
                    section.classList.add("active");
                }
            });
        });
    });
});
