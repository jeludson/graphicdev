document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle System
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu instantly when a navigation item link is tapped
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Interactive Natural Scroll Parallax for Blobs
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
