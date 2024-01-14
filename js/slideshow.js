document.addEventListener('DOMContentLoaded', function() {
    var currentIndex = 0;
    var slides = document.querySelectorAll('.app-functions .slide');

    function updateSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'flex' : 'none';
        });
    }

    slides.forEach((slide, index) => {
        let prevButton = slide.querySelector('.prevButton');
        let nextButton = slide.querySelector('.nextButton');

        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
            updateSlide(currentIndex);
        });

        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            updateSlide(currentIndex);
        });
    });

    updateSlide(currentIndex); // Initialize the first slide
});
