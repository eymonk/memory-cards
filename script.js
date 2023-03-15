import { changeLevel, setupCards} from './components/cards/cards.js';
import changeLanguage from './components/languages/languages.js';
import { setupGallery } from './components/gallery/gallery.js';
import { showMessage } from './components/message/message.js';
import { getProgress } from './components/progress.js';
import { setupMenu } from './components/menu/menu.js';

setupMenu();
setupCards();
setupGallery();

const currentLevel = getProgress();
if (currentLevel) {
    changeLanguage(localStorage.getItem('language'));
    changeLevel(currentLevel);
} else showMessage('🌍 EN / RU ?', 'Welcome!', 'languages');

