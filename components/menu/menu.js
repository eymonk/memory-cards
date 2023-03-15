import state, { startGame } from '../state.js';
import { openGallery } from '../gallery/gallery.js';
import { changeLevel } from '../cards/cards.js';
import { resetProgress } from '../progress.js';
import changeLanguage from '../languages/languages.js';
import { showMessage } from '../message/message.js';

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const messageContainer = document.querySelector('.message__container');
    if (messageContainer.classList.contains('hidden')) menu.classList.toggle('hidden');
}

function closeMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.add('hidden');
}

function showMenuBtn(btnName) {
    const btn = chooseBtn(btnName);
    btn.classList.remove('hidden');
}

function hideMenuBtn(btnName) {
    const btn = chooseBtn(btnName);
    btn.classList.add('hidden');
}


const galleryBtn = document.querySelector('.menu__btn_gallery');
const nextLevelBtn = document.querySelector('.menu__btn_next-level');
const resetProgressBtn = document.querySelector('.menu__btn_reset-progress');

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


function setupMenu() {
    const menuBtn = document.querySelector('.header__btn_menu');
    menuBtn.addEventListener('click', toggleMenu);

    const closeBtn = document.querySelector('.menu__btn_close');
    closeBtn.addEventListener('click', closeMenu);

    const languageBtn = document.querySelector('.menu__btn_languages');
    languageBtn.addEventListener('click', changeLanguage);

    const retryBtn = document.querySelector('.menu__btn_retry');
    retryBtn.addEventListener('click', () => {
        closeMenu();
        startGame();
    })

    nextLevelBtn.addEventListener('click', () => {
        closeMenu();
        changeLevel();
    });

    galleryBtn.addEventListener('click', () => {
        closeMenu();
        openGallery();
    });

    resetProgressBtn.addEventListener('click', resetProgress);

    const contactsBtn = document.querySelector('.menu__btn_contacts');
    contactsBtn.addEventListener('click', () => {
        const title = state.language === 'en' ? 'Contacts' : 'Контакты';
        const message = state.language === 'en' ? 'You are welcome!' : 'Добро пожаловать!';
        closeMenu();
        showMessage(message, title, 'contacts');
    });
}

export {
    setupMenu,
    closeMenu,
    showMenuBtn,
    hideMenuBtn,
};
