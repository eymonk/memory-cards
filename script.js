import { changeLevel, setupCards} from './components/cards/cards.js';
import { setupGallery } from './components/gallery/gallery.js';
import { showMessage } from './components/message/message.js';
import { setupMenu } from './components/menu/menu.js';
import { getProgress } from './components/progress.js';
import changeLanguage from './components/languages/languages.js';

setupMenu();
setupCards();
setupGallery();

const currentLevel = getProgress();
if (currentLevel) {
    changeLanguage(localStorage.getItem('language'));
    changeLevel(currentLevel);
} else showMessage('🌍 EN / RU ?', 'Welcome!', 'languages');


// add media queries
// add translation
