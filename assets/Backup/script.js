// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Modular JavaScript code can be added here

    // Example: Smooth Scrolling for Internal Links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.hash);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Example: Dynamic Content Loading (if needed)
    // Fetch and insert content dynamically using fetch API or AJAX

    // Additional modular scripts can be included as separate JS files
    // and imported using ES6 modules if using a build tool like Webpack
});