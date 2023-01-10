const scroll = new SmoothScroll('[data-scroll], a[href*="#"]', {
    speed: 600,
    easing: 'easeInOutCubic',
    topOnEmptyHash: true,
    clip: true,
});


ScrollReveal().reveal('.reveal-delay-0', {
    delay: 220, 
});

ScrollReveal().reveal('.reveal-delay-1', {
    delay: 300, 
});

ScrollReveal().reveal('.reveal-delay-2', {
    delay: 450, 
});

ScrollReveal().reveal('.reveal-delay-3', {
    delay: 550, 
});