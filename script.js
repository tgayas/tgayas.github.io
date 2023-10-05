// Get all the navigation items by their class name
const navItems = document.querySelectorAll('.nav-item');

// Add a click event listener to each navigation item
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Redirect to the link's href when the button area is clicked
        window.location.href = item.querySelector('a').getAttribute('href');
    });
});
