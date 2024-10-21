
// Select the toggle button and menu elements
const toggleButton = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle the menu on click
toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
// Toggle mobile products dropdown
const productsToggleMobile = document.getElementById('products-toggle-mobile');
const mobileProductsDropdown = document.getElementById('mobile-products-dropdown');
console.log(productsToggleMobile, mobileProductsDropdown);

productsToggleMobile.addEventListener('click', () => {
    console.log('clicked');
    // e.preventDefault();
    mobileProductsDropdown.classList.toggle('hidden');
});