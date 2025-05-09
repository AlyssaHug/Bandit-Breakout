let currentIndex = 0;
const images = document.querySelectorAll(".flipper-image");

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });
    currentIndex = index;
}

function nextImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
}

setInterval(nextImage, 2000);
