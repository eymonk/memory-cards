import { startGame } from '../state.js';
import { openGallery } from '../gallery/gallery.js';
import { changeLevel } from '../cards/cards.js';
import { resetProgress } from '../progress.js';

const menu = document.querySelector('.menu');
const galleryBtn = document.querySelector('.menu__btn_gallery');
const nextLevelBtn = document.querySelector('.menu__btn_next-level');
const resetProgressBtn = document.querySelector('.menu__btn_reset-progress');

function toggleMenu() {
    const messageContainer = document.querySelector('.message__container');
    if (messageContainer.classList.contains('hidden')) menu.classList.toggle('hidden');
}

function closeMenu() {
    menu.classList.add('hidden');
}

function chooseBtn(btnName) {
    let btn;

    switch(btnName) {
        case 'next-level':
            btn = nextLevelBtn;
            break;
        case 'gallery':
            btn = galleryBtn;
            break;
        default:
            btn = resetProgressBtn;
    }

    return btn;
}


function showMenuBtn(btnName) {
    const btn = chooseBtn(btnName);
    btn.classList.remove('hidden');
}


function hideMenuBtn(btnName) {
    const btn = chooseBtn(btnName);
    btn.classList.add('hidden');
}



function setupMenu() {
    const menuBtn = document.querySelector('.header__btn_menu');
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
    resetProgressBtn.addEventListener('click', resetProgress);
}

export {
    setupMenu,
    closeMenu,
    showMenuBtn,
    hideMenuBtn,
};
