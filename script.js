function handleRegistration(event) {
    // This stops the browser from trying to submit the form traditionally
    event.preventDefault(); 

    // Define your home page URL
    const homePageUrl = 'login.html'; 

    // Redirect the user
    window.location.href = homePageUrl;
}

// Function to calculate age and display the plant gift message
function calculatePlantsGift() {
    const dobInput = document.getElementById('dob');
    const messageElement = document.getElementById('plant-message');
    
    // Check if the input has a value
    if (!dobInput.value) {
        messageElement.textContent = '';
        return;
    }

    const birthDate = new Date(dobInput.value);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
    // Adjust age if the birthday hasn't passed yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Only display the message if the age is a valid, non-negative number
    if (age >= 0) {
        // Your rule: "20 years old, 20 plants gifted"
        const plantsToGift = age; 
        
        messageElement.textContent = `🥳 Happy Birthday! You will be gifted ${plantsToGift} plants when you join!`;
    } else {
        messageElement.textContent = 'Please enter a valid date of birth.';
    }
}

// Keep your existing handleRegistration function for redirecting
function handleRegistration(event) {
    event.preventDefault(); 
    
    // You can optionally add a final check here that the user selected a DOB
    const dobInput = document.getElementById('dob');
    if (!dobInput || !dobInput.value) {
        alert("Please enter your date of birth to proceed.");
        return;
    }
    
    const homePageUrl = 'login.html'; 
    window.location.href = homePageUrl;
}

// Function to toggle the mobile navigation menu
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // This toggles the 'open' class defined in the CSS media query
            navLinks.classList.toggle('open');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // 1. Get references to the button and the link container
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // 2. Add an event listener to the toggle button
    menuToggle.addEventListener('click', function() {
        // 3. Toggle the 'open' class on the nav-links container
        // Your CSS handles what 'open' does (i.e., display: flex)
        navLinks.classList.toggle('open');
    });

    // OPTIONAL: Close the menu when a link is clicked (useful for single-page sites)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            // Check if the menu is open and if it's a mobile view
            if (navLinks.classList.contains('open') && window.innerWidth <= 768) {
                navLinks.classList.remove('open');
            }
        });
    });
});