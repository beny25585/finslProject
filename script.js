// script.js

// Get references to popup elements
const loginPopup = document.getElementById('loginPopup');
const closePopup = document.getElementById('closePopup');
const loginButton = document.getElementById('loginButton');

// Function to open the popup
function openPopup() {
    loginPopup.style.display = 'flex';
}

// Function to close the popup
function closePopupFunction() {
    loginPopup.style.display = 'none';
}

// Add event listener to close button
closePopup.addEventListener('click', closePopupFunction);

// Add event listener to login button
loginButton.addEventListener('click', openPopup);

// Optional: Automatically open the popup for demonstration
// Remove this line if you want to open it manually
// openPopup();
