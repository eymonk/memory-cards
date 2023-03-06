import state from '../state.js';

const body = document.querySelector('body');
const gallery = document.querySelector('.gallery');
const galleryImage = document.querySelector('.gallery__image');

function openGallery() {
    gallery.style.transform = `translateY(${scrollY}px)`;
    gallery.style.display = 'flex';
    body.classList.add('stop-scrolling');
    galleryImage.src = './assets/img/1.jpg';
    setIndicator(1);
}


function closeGallery() {
    body.classList.remove('stop-scrolling');
    gallery.style.display = 'none';
}


function flipThrough(direction) {
    const photosNumber = state.cards.totalNumber / 2;
    let number = state.gallery.currentImgNumber;

    if (direction === 'next') number = number >= photosNumber ? 1 : (number + 1);
    else number = number === 1 ? photosNumber : (number - 1);

    setIndicator(number);
    galleryImage.src = `./assets/img/${number}.jpg`;
    state.gallery.currentImgNumber = number;
}


function createImageIndicator(number) {
    const indicator = document.createElement('li');
    indicator.classList.add('gallery__indicator');
    indicator.id = `indicator-${number}`;

    indicator.addEventListener('click', () => {
        galleryImage.src = `./assets/img/${number}.jpg`;
        state.gallery.currentImgIndex = number;
    });

    const indicatorsList = document.querySelector('.gallery__indicators-list');
    indicatorsList.append(indicator);
}


function setIndicator(number) {
    const activeIndicator = document.getElementById(`indicator-${state.activeIndicator}`);
    activeIndicator && activeIndicator.classList.remove('gallery__indicator_active');

    const newActiveIndicator = document.getElementById(`indicator-${number}`);
    newActiveIndicator.classList.add('gallery__indicator_active');
    state.activeIndicator = number;
}

function setupGallery() {
    const galleryBtnClose = document.querySelector('.gallery__button_close');
    const galleryBtnPrevious = document.querySelector('.gallery__button_previous');
    const galleryBtnNext = document.querySelector('.gallery__button_next');
    galleryBtnClose.addEventListener('click', closeGallery);
    galleryBtnPrevious.addEventListener('click', () => flipThrough('previous'));
    galleryBtnNext.addEventListener('click', () => flipThrough('next'));

    const indicators = document.querySelectorAll('.gallery__indicator');
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const regex = /\d+/g;
            const number = indicator.id.match(regex)[0];

            galleryImage.src = `./assets/img/${number}.jpg`;
            state.gallery.currentImgIndex = number;
            setIndicator(number);
        });
    });

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
