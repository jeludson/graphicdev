 document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Reveal Flip Animation on Click
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // 2. Parallax Motion for Nature Background Elements based on Scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const orb1 = document.querySelector('.orb-1');
        const orb2 = document.querySelector('.orb-2');

        // Gently shifts natural orbs to follow scroll pattern smoothly
        if(orb1 && orb2) {
            orb1.style.transform = `translateY(${scrolled * 0.15}px)`;
            orb2.style.transform = `translateY(-${scrolled * 0.1}px)`;
        }
    });

    // 3. Header Text Reveal Effect on Load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }
});