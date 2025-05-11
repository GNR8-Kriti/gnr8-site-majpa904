// script.js
// Add event listener to the search button
document.querySelector('.search-bar button').addEventListener('click', () => {
    // Get the search input value
    const searchValue = document.querySelector('.search-bar input').value;
    // Log the search value to the console
    console.log(searchValue);
});

// Add event listener to the book now button
document.querySelector('.book-now-button').addEventListener('click', () => {
    // Log a message to the console
    console.log('Book now button clicked');
});

// Add event listener to the learn more buttons
const learnMoreButtons = document.querySelectorAll('.learn-more-button');
learnMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Log a message to the console
        console.log('Learn more button clicked');
    });
});

// Add event listener to the window to handle scrolling
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;
    // Log the scroll position to the console
    console.log(scrollPosition);
});