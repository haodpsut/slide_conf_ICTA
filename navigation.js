// File: navigation.js

document.addEventListener('DOMContentLoaded', () => {
    // IMPORTANT: Update this list with all your slide HTML files in order.
    const slides = [
        'index.html', 
        'slide2.html', 
        'slide3.html', 
        'slide4.html',
        'slide5.html', 
        'slide6.html', 
        'slide7.html', 
        'slide8.html',
        'slide9.html', 
        'slide10.html', 
        'slide11.html',
        'slide12.html'
    ];

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const currentIndex = slides.indexOf(currentPage);

    // Update slide counter
    const counterElement = document.getElementById('slide-counter');
    if (counterElement) {
        // We show the "page number" starting from slide 2. index.html is the title page.
        if (currentIndex > 0) {
            counterElement.textContent = `${currentIndex} / ${slides.length - 1}`;
        }
    }

    function goToNextSlide() {
        if (currentIndex < slides.length - 1) {
            window.location.href = slides[currentIndex + 1];
        }
    }

    function goToPrevSlide() {
        if (currentIndex > 0) {
            window.location.href = slides[currentIndex - 1];
        }
    }

    // Keyboard navigation
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight' || event.key === ' ') {
            event.preventDefault();
            goToNextSlide();
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            goToPrevSlide();
        }
    });

    // Button navigation
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');

    if (prevButton) {
        if (currentIndex === 0) {
            prevButton.style.display = 'none';
        } else {
            prevButton.href = slides[currentIndex - 1];
        }
    }
    
    if (nextButton) {
        if (currentIndex === slides.length - 1) {
            nextButton.style.display = 'none';
        } else {
            nextButton.href = slides[currentIndex + 1];
        }
    }
});