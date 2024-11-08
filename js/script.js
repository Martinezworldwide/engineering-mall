// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Example: Animate store items on load
    const stores = document.querySelectorAll('.store');
    stores.forEach((store, index) => {
        store.style.transitionDelay = `${index * 100}ms`;
        store.classList.add('visible');
    });
});
