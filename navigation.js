// File: navigation.js (Phiên bản cuối cùng)

document.addEventListener('DOMContentLoaded', () => {
    const slides = [
        'index.html', 'slide2.html', 'slide3.html', 'slide4.html',
        'slide5.html', 'slide6.html', 'slide7.html', 'slide8.html',
        'slide9.html', 'slide10.html', 'slide11.html'
    ];

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const currentIndex = slides.indexOf(currentPage);

    // Cập nhật số trang, NHƯNG chỉ khi không phải là slide đầu tiên (currentIndex > 0)
    const counterElement = document.getElementById('slide-counter');
    if (counterElement && currentIndex > 0) {
        counterElement.textContent = `${currentIndex} / ${slides.length - 1}`;
        // Thay đổi logic hiển thị: Bỏ qua slide đầu tiên trong việc đếm
        // Ví dụ: slide 2 sẽ là "1 / 10"
    }
    // Nếu là slide đầu tiên, counterElement sẽ không được điền gì cả và vẫn trống.


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

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight' || event.key === ' ') {
            event.preventDefault();
            goToNextSlide();
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            goToPrevSlide();
        }
    });

    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');

    if (prevButton) {
        prevButton.addEventListener('click', goToPrevSlide);
        if (currentIndex > 0) {
            prevButton.href = slides[currentIndex - 1];
        }
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', goToNextSlide);
        if (currentIndex < slides.length - 1) {
            nextButton.href = slides[currentIndex + 1];
        }
    }
    
    if (currentIndex === 0 && prevButton) {
        prevButton.style.display = 'none';
    }

    if (currentIndex === slides.length - 1 && nextButton) {
        nextButton.style.display = 'none';
    }
});