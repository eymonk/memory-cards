import { startGame } from '../state.js';
import { openGallery } from '../gallery/gallery.js';

const menu = document.querySelector('.menu');
const galleryBtn = document.querySelector('.menu__btn_gallery');

function toggleMenu() {
    const messageContainer = document.querySelector('.message__container');
    if (messageContainer.classList.contains('hidden')) menu.classList.toggle('hidden');
}

function closeMenu() {
    menu.classList.add('hidden');
}

function showMenuBtnGallery() {
    galleryBtn.classList.remove('hidden');
}

function hideMenuBtnGallery() {
    galleryBtn.classList.add('hidden');
}

function setupMenu() {
    const menuBtn = document.querySelector('.header__btn_menu');
    const retryBtn = document.querySelector('.menu__btn_retry');
    const closeBtn = document.querySelector('.menu__btn_close');

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', closeMenu);
    galleryBtn.addEventListener('click', () => openGallery());
    retryBtn.addEventListener('click', () => {
        closeMenu();
        startGame();
    })
}

export {
    setupMenu,
    showMenuBtnGallery,
    hideMenuBtnGallery,
};
