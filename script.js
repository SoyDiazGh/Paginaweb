/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function showImage(index) {
        const width = images[0].clientWidth;
        carouselImages.style.transform = `translateX(${-index * width}px)`;
    }

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    window.addEventListener('resize', function() {
        showImage(currentIndex);
    });

    showImage(currentIndex);
});

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, idx) => {
            item.style.display = idx === index ? 'block' : 'none';
        });
    }

    document.querySelector('.carousel-button.prev').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        showItem(currentIndex);
    });

    document.querySelector('.carousel-button.next').addEventListener('click', function() {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        showItem(currentIndex);
    });

    showItem(currentIndex);
});
