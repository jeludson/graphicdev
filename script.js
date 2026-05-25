document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle Control Setup
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close full-screen menu as soon as a navigation item is tapped
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Parallax Motion for Nature Accents
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const purpleBlob = document.querySelector('.blob-purple');
        const magentaBlob = document.querySelector('.blob-magenta');

        if (purpleBlob && magentaBlob) {
            purpleBlob.style.transform = `translateY(${scrolled * 0.2}px) scale(${1 + scrolled * 0.0002})`;
            magentaBlob.style.transform = `translateY(-${scrolled * 0.15}px) scale(${1 - scrolled * 0.0001})`;
        }
    });
});
