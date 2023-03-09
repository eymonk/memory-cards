import { startGame } from '../state.js';
import { openGallery } from '../gallery/gallery.js';
import { changeLevel } from '../cards/cards.js';

const menu = document.querySelector('.menu');
const galleryBtn = document.querySelector('.menu__btn_gallery');
const nextLevelBtn = document.querySelector('.menu__btn_next-level')

function toggleMenu() {
    const messageContainer = document.querySelector('.message__container');
    if (messageContainer.classList.contains('hidden')) menu.classList.toggle('hidden');
}

function closeMenu() {
    menu.classList.add('hidden');
}

function showMenuBtnNextLevel() {
    nextLevelBtn.classList.remove('hidden');
}

function hideMenuBtnNextLevel() {
    nextLevelBtn.classList.add('hidden');
}

function showMenuBtnGallery() {
    galleryBtn.classList.remove('hidden');
}

function hideMenuBtnGallery() {
    galleryBtn.classList.add('hidden');
}



function setupMenu() {
    const menuBtn = document.querySelector('.header__btn_menu');
    const nextLevelBtn = document.querySelector('.menu__btn_next-level');
    const retryBtn = document.querySelector('.menu__btn_retry');
    const closeBtn = document.querySelector('.menu__btn_close');

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', closeMenu);
    nextLevelBtn.addEventListener('click', () => {
        closeMenu();
        changeLevel();
    });
    retryBtn.addEventListener('click', () => {
        closeMenu();
        startGame();
    })
    galleryBtn.addEventListener('click', () => {
        closeMenu();
        openGallery();
    });

}

export {
    setupMenu,
    closeMenu,
    showMenuBtnNextLevel,
    hideMenuBtnNextLevel,
    showMenuBtnGallery,
    hideMenuBtnGallery,
};
