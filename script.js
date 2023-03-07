import { setupCards } from './components/cards/cards.js';
import { setupGallery } from './components/gallery/gallery.js';
import { showMessage } from './components/message/message.js';
import { setupMenu } from './components/menu/menu.js';

setupMenu();
setupCards();
setupGallery();
showMessage(`Click "start" when you'll be ready to find similar cards-pairs! <br><br> Be careful - you got only 10 seconds🧐`, 'Welcome!', 'start');

/*
NOT TO FORGET list

- add photo compression for small images
- open gallery from the card

*/
