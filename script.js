import { changeLevel, setupCards} from './components/cards/cards.js';
import { setupGallery } from './components/gallery/gallery.js';
import { showMessage } from './components/message/message.js';
import { setupMenu } from './components/menu/menu.js';
import { getProgress } from './components/progress.js';

setupMenu();
setupCards();
setupGallery();

const currentLevel = getProgress();
if (currentLevel) changeLevel(currentLevel);
else showMessage('🌍 EN / RU ?', 'Welcome!', 'languages');


// add media queries
// add translation
