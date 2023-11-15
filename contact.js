document.addEventListener("DOMContentLoaded", function () {
    // Add JavaScript functionality here
    const linkedin = document.getElementById('linkedin');
    const contactNumber = document.getElementById('contact-number');
    const email = document.getElementById('email');

    linkedin.addEventListener('click', function () {
        // Add LinkedIn-specific functionality
        alert('Opening LinkedIn profile');
    });

    contactNumber.addEventListener('click', function () {
        // Add Contact Number-specific functionality
        alert('Dialing contact number');
    });

    email.addEventListener('click', function () {
        // Add Email-specific functionality
        alert('Opening email client');
    });
});
