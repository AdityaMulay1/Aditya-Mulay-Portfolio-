document.addEventListener("DOMContentLoaded", function () {
    animateText();
});

function animateText() {
    const animatedText = document.querySelector('.animated-text');
    animatedText.style.opacity = 1;
}

document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty(
        '--x', (e.clientX + window.scrollX) + 'px'
    );
    document.documentElement.style.setProperty(
        '--y', (e.clientY + window.scrollY) + 'px'
    );
}
