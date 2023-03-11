const levelMessagesEN = [];
const levelMessagesRU = [];

function addLevelMessage(lang, text, title) {
    const newMessage = {
        text,
        title,
    }
    if (lang === 'en') levelMessagesEN.push(newMessage);
    else levelMessagesRU.push(newMessage);
}


addLevelMessage('en', 'Now choose what to do next - show photos from the cards or go to the next level right away.<br><br>(The next levels contain all the photos from this level.)', 'Good👍');
addLevelMessage('ru', 'Теперь выбери что делать дальше - посмотреть фотографии с карточек или сразу пойти на следующий уровень <br><br> (Все фото с этого уровня будут и во всех следующих.)', 'Хорошо👍');

addLevelMessage('en','It was a bit harder, but still pretty easy!😉 <br><br> Opportunities are the same - you can go to the next level, or to see photos at first!', 'Well done!');
addLevelMessage('ru', 'Было чуть посложнее, но всё ещё довольно легко!😉 <br><br> Возможности те же - можешь пойти на следующий уровень, а можешь сначала посмотреть фотографии.', 'Исполнено отлично!');

addLevelMessage('en', 'Now I see that you have a pretty sharp mind! <br><br> 😎C O O L😎', 'Excellent!');
addLevelMessage('ru', '', '');

addLevelMessage('en', 'Only 1 level left to win the whole game! <br><br> 😮😮😮', 'WOW!!!');
addLevelMessage('ru', 'Всего лишь 1 уровень остался, чтобы пройти всю игру! <br><br> 😮😮😮', 'УОУ!!!');

addLevelMessage('en', `You proved to be a real MIND! <br> I'm truly astonished! 😲 <br><br> Thanks for your time. I hope you liked the game! <br> Well, at least it trained your cognitive skills a little bit😊 <br><br> Good luck!`, 'UNBELIEVABLE ❗❕❗');
addLevelMessage('ru', 'Ты доказал, что ты реально МОЗГ! <br> Я искренне поражён! 😲 <br><br> Спасибо за твоё время. Надеюсь, тебе понравилась игра! <br> Ну, по крайней мере она немного потренила твои когнитивные навыки😊 <br><br> Удачи!', 'НЕВЕРОЯТНО❗❕❗');

export { levelMessagesEN, levelMessagesRU };

