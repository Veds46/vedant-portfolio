
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function reveal() {
    // Only run the animation if the screen is wider than 600px
    if (window.innerWidth > 600) {
        var reveals = document.querySelectorAll("section, .details-container, .skills-category, .project-details, footer");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    } else {
        // On mobile, just make everything active immediately
        var reveals = document.querySelectorAll("section, footer, .details-container, .skills-category, .project-details");
        reveals.forEach(el => el.classList.add("active"));
    }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Run the function every time the user scrolls
window.addEventListener("scroll", reveal);
// Automatically updates the year in the footer
document.getElementById("display-year").innerText = new Date().getFullYear();

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function reveal() {
    // Select all elements that should animate
    var reveals = document.querySelectorAll("section, .details-container, .skills-category, .project-details, footer");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        
        // Adjust trigger point: 150px for desktop, 50px for mobile
        var elementVisible = window.innerWidth > 600 ? 150 : 50;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Event Listeners
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Update Year
const yearSpan = document.getElementById("display-year");
if(yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}

