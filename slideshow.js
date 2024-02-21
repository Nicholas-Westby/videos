class GeneralSlideshow extends HTMLElement {
    dotActiveClass;
    slideEls;
    prevEl;
    nextEl;
    dotEls;
    slideIndex;

    constructor() {
        super();
    }

    connectedCallback() {
        this.storeElements();
        this.initializeVariables();
        this.attachEvents();
    }

    initializeVariables() {
        this.slideIndex = 0;
        this.dotActiveClass = 'g-slideshow__dot--active';
    }

    attachEvents() {
        this.prevEl.addEventListener('click', () => this.previousSlide());
        this.nextEl.addEventListener('click', () => this.nextSlide());
    }

    previousSlide() {
        //TODO: Handle reaching the start of the slideshow.
        this.slideIndex--;
        this.advanceToSlide();
    }

    nextSlide() {
        //TODO: Handle reaching the end of the slideshow.
        this.slideIndex++;
        this.advanceToSlide();
    }

    advanceToSlide() {
        let nextSlide = this.slideEls[this.slideIndex];
        nextSlide.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        });
        this.showActiveDots();
    }

    showActiveDots() {
        this.dotEls.forEach((dot, index) => {
            dot.classList.toggle(this.dotActiveClass, index === this.slideIndex);
        });
    }

    storeElements() {
        this.slideEls = this.querySelectorAll('[data-js-slide]');
        this.prevEl = this.querySelector('[data-js-previous]');
        this.nextEl = this.querySelector('[data-js-next]');
        this.dotEls = this.querySelectorAll('[data-js-dot]');
    }
}

customElements.define('general-slideshow', GeneralSlideshow);