function slidesPlugin(activeSlide = 0) {

    const slides = document.querySelectorAll('.slide');
    console.log(slides)
    // slides[activeSlide].classList.add('active');

    for (const slide of slides) {
        slide.addEventListener('click', changeClass);
    }

    function changeClass() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            clearActiveClasses()
            this.classList.add('active');
        }
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin(2)


