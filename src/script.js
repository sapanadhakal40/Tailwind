
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



// Toggle user dropdown
const userMenuButton = document.getElementById('user-menu-button');
const userDropdown = document.getElementById('user-dropdown');
userMenuButton.addEventListener('click', () => {
    userDropdown.classList.toggle('hidden');
});

// Close dropdown if clicked outside
window.addEventListener('click', function (e) {
    if (!userMenuButton.contains(e.target) && !userDropdown.contains(e.target)) {
        userDropdown.classList.add('hidden');
    }
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


function toggleFAQ(num) {
    const answer = document.getElementById(`answer${num}`);
    const icon = document.getElementById(`icon${num}`);

    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.textContent = '-';
    } else {
        answer.classList.add('hidden');
        icon.textContent = '+';
    }
}

//Array of categories

const categories = ['chair', 'Bed', 'Table', 'sofa'];
const categoryLinksContainer = document.getElementById('category-links');
categories.forEach(category => {
    const categoryLink = document.createElement('a');
    categoryLink.textContent = category;
    categoryLink.href = '#';
    categoryLink.className = 'text-black hover:underline mb-2 md:mb-0';
    categoryLinksContainer.appendChild(categoryLink);
});

//cardofCategoriessection

const cardData = [
    { image: './image/table_1.jpg', title: 'Fabric chair', link: '#tables' },
    { image: './image/bed_5.webp', title: 'Bed', link: '#bed' },
    { image: './image/wooden_sofa_1.jpg', title: 'Sofa', link: '#sofa' },
    { image: './image/dining_1.jpg', title: 'Dinning set', link: '#dinningset' }
];

const cardContainer = document.getElementById('card-container');

cardData.forEach((card) => {
    const cardElement = document.createElement('div');
    cardElement.classList = 'bg-white p-4 rounded-lg shadow-md overflow-hidden';
    cardElement.innerHTML = `
    <img src="${card.image}" alt="${card.title}" class="w-full h-40 object-cover">
    <div class="text-center mt-4">
    <h2 class="text-lg font-semibold">${card.title}</h2>
    <a href="${card.link}" class="block mt-2 text-gray ">See more</a>
    </div>
    `;
    cardContainer.appendChild(cardElement);

});


























// themeToggle.addEventListener('click', () => {
//     document.body.classList.toggle('dark');

//     if (document.body.classList.contains('dark')) {
//         themeToggle.innerText = "Light Mode";  // Change button text to "Light Mode"
//     } else {
//         themeToggle.innerText = "Dark Mode";   // Change button text to "Dark Mode"
//     }
// });