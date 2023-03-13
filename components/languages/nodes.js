const nodesToTranslate = [];

function addNodeToTranslate(nodeClassName, en, ru) {
    const newNode = {
        nodeClassName,
        en,
        ru
    }
    nodesToTranslate.push(newNode);
}


addNodeToTranslate('header__title', 'Memory Cards', 'Карты памяти');
addNodeToTranslate('header__label-text_level', 'level', 'уровень');
addNodeToTranslate('header__label-text_time', 'time', 'время');
addNodeToTranslate('menu-btn-text', 'menu', 'меню');
addNodeToTranslate('menu__btn_next-level', 'next level', 'следующий уровень');
addNodeToTranslate('menu__btn_retry', 'retry', 'начать заново');
addNodeToTranslate('menu__btn_gallery', 'gallery', 'галерея');
addNodeToTranslate('menu__btn_reset-progress', 'reset progress', 'сбросить прогресс');
addNodeToTranslate('menu__btn_close', 'close menu', 'закрыть меню');
addNodeToTranslate('message__btn_start', 'start', 'старт');
addNodeToTranslate('message__btn_retry', 'retry', 'начать заново');
addNodeToTranslate('message__btn_open-gallery', 'open gallery', 'открыть галерею');
addNodeToTranslate('message__btn_level-next', 'next level', 'следующий уровень');
addNodeToTranslate('message__btn_close', 'close', 'закрыть');

export default nodesToTranslate;