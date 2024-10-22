
// Select the toggle button and menu elements
const toggleButton = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');


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

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun'); // Switch to sun icon for light mode
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon'); // Switch to the moon icon for dark mode
    }
});




































// themeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark');

//     if (document.body.classList.contains('dark')) {
//         themeToggle.innerText = "Light Mode";  // Change button text to "Light Mode"
//     } else {
//         themeToggle.innerText = "Dark Mode";   // Change button text to "Dark Mode"
//     }
// });