import state from './state.js';

const nodesToTranslate = [];

function addNodeToTranslate(nodeClassName, en, ru) {
    const newNode = {
        nodeClassName,
        en,
        ru
    }
    nodesToTranslate.push(newNode);
}

function changeLanguage() {
    state.language = state.language === 'en' ? 'ru' : 'en';
    nodesToTranslate.forEach(node => {
        const element = document.querySelector(`.${node.nodeClassName}`);
        element.textContent = node[state.language];
    });
}


export default changeLanguage;
