import state from '../state.js';

const body = document.querySelector('body');
const gallery = document.querySelector('.gallery');
const galleryImage = document.querySelector('.gallery__image');

function openGallery(number = 1) {
    gallery.style.transform = `translateY(${scrollY}px)`;
    gallery.style.display = 'flex';
    body.classList.add('stop-scrolling');
    galleryImage.src = `./assets/img/${number}.jpg`;
    setIndicator(number);
}


function closeGallery() {
    body.classList.remove('stop-scrolling');
    gallery.style.display = 'none';
}


function flipThrough(direction) {
    const photosNumber = state.cards.totalNumber / 2;
    let number = state.gallery.activeIndicatorNumber;

    if (direction === 'next') number = number >= photosNumber ? 1 : (number + 1);
    else number = number === 1 ? photosNumber : (number - 1);

    setIndicator(number);
    galleryImage.src = `./assets/img/${number}.jpg`;
}


function setupIndicator(indicator) {
    const regex = /\d+/g;
    const number = parseInt(indicator.id.match(regex)[0]);

    indicator.addEventListener('click', () => {
        galleryImage.src = `./assets/img/${number}.jpg`;
        setIndicator(number);
    });
}


function createImageIndicator(number) {
    const indicator = document.createElement('li');
    indicator.classList.add('gallery__indicator');
    indicator.id = `indicator-${number}`;
    setupIndicator(indicator);

    const indicatorsList = document.querySelector('.gallery__indicators-list');
    indicatorsList.append(indicator);
}


function setIndicator(number) {
    const activeIndicator = document.getElementById(`indicator-${state.gallery.activeIndicatorNumber}`);
    const newActiveIndicator = document.getElementById(`indicator-${number}`);

    activeIndicator && activeIndicator.classList.remove('gallery__indicator_active');
    newActiveIndicator.classList.add('gallery__indicator_active');
    state.gallery.activeIndicatorNumber = number;
}

function setupGallery() {
    const galleryBtnClose = document.querySelector('.gallery__button_close');
    const galleryBtnPrevious = document.querySelector('.gallery__button_previous');
    const galleryBtnNext = document.querySelector('.gallery__button_next');
    const indicators = document.querySelectorAll('.gallery__indicator');

    galleryBtnClose.addEventListener('click', closeGallery);
    galleryBtnPrevious.addEventListener('click', () => flipThrough('previous'));
    galleryBtnNext.addEventListener('click', () => flipThrough('next'));
    indicators.forEach(indicator => setupIndicator(indicator));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') flipThrough('previous');
        else if (e.key === 'ArrowRight') flipThrough('next');
        else if (e.key === 'Escape') closeGallery();
    });
}


export {
    openGallery,
    setupGallery,
    createImageIndicator
};
