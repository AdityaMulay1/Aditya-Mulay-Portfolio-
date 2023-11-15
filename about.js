document.addEventListener("DOMContentLoaded", function () {
    animateSection();
});

function animateSection() {
    const container = document.querySelector('.container');
    const descriptions = document.querySelectorAll('.description');

    // Trigger the fade-in animation for the entire container
    container.style.opacity = 1;

    // Loop through each description paragraph and apply a staggered fade-in effect
    descriptions.forEach((description, index) => {
        description.style.animation = `fadeIn 1.5s ease-in-out ${index * 0.5}s forwards`;
    });
}

// Include your inverted circular cursor logic here or link to the existing cursor.js file
