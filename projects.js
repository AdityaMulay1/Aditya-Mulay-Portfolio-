function animateProjects() {
    const projects = document.querySelectorAll('.project');

    // Loop through each project and apply a staggered fade-in effect
    projects.forEach((project, index) => {
        project.style.animation = `fadeIn 1.5s ease-in-out ${index * 0.5}s forwards`;
    });

    // Prevent default behavior of anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
