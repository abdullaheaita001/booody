// JavaScript to toggle visibility of sections when clicking the links
document.getElementById("homeLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor link behavior
    toggleSection('mainContent'); // Toggle 'mainContent' section visibility
});

document.getElementById("aboutLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor link behavior
    toggleSection('aboutContent'); // Toggle 'aboutContent' section visibility
});

document.getElementById("offersLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor link behavior
    toggleSection('offersContent'); // Toggle 'offersContent' section visibility
});

// Function to toggle visibility of a section
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);

    // If the section is already visible, hide it, else show it
    if (section.style.display === 'block') {
        section.style.display = 'none'; // Hide the section
    } else {
        // First, hide all sections
        const sections = document.querySelectorAll('#mainContent, #aboutContent, #offersContent');
        sections.forEach(sec => sec.style.display = 'none'); // Hide all sections

        // Then, show the clicked section
        section.style.display = 'block'; // Show the clicked section
    }
}
