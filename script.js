document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');

    // Function to show a specific section and activate its button
    const showSection = (targetId) => {
        // Deactivate all buttons and hide all sections
        navButtons.forEach(button => button.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));

        // Activate the clicked button
        const activeButton = document.querySelector(`.nav-button[data-target="${targetId}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }

        // Show the target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    };

    // Add click event listener to each navigation button
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            showSection(targetId);
        });
    });

    // Show the "Introducción" section by default when the page loads
    showSection('intro');
});
