import state from './state.js';

function changeLanguage() {
    state.language = state.language === 'en' ? 'ru' : 'en';
}

export default changeLanguage;
