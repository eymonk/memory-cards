import state from '../state.js';
import nodesToTranslate from './nodes.js';
import { playSound } from '../menu/menu.js';


function changeLanguage() {
    const changeLanguageSound = document.getElementById('sound__change-language');
    playSound(changeLanguageSound);

    state.language = state.language === 'en' ? 'ru' : 'en';
    localStorage.setItem('language', state.language);

    nodesToTranslate.forEach(node => {
        const element = document.querySelector(`.${node.nodeClassName}`);
        element.textContent = node[state.language];
    });
}


export default changeLanguage;
