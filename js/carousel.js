document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "media/camaras.webp",
        "media/pc.webp",
        "media/web.webp",
        "media/wifi.webp"
    ];
    const imageElement = document.querySelector('.carousel-inner img');
    const prev = document.querySelector('.carousel-button.left')
    const next = document.querySelector('.carousel-button.right')
    let index = 0
    let interval

    function showImage(index) {
        imageElement.src = images[index]
    }

    showImage(index)

    function nextImage() {
        index = (index + 1) % images.length
        showImage(index)
    }

    function prevImage() {
        index = (index - 1 + images.length) % images.length
        showImage(index)
    }

    prev.addEventListener('click', () => {
        prevImage()
        resetInterval()
    })

    next.addEventListener('click', () => {
        nextImage()
        resetInterval()
    })

    function startCarousel() {
        interval = setInterval(nextImage, 3000)
    }

    function resetInterval() {
        clearInterval(interval)
        startCarousel()
    }

    showImage(index)
    startCarousel()
})