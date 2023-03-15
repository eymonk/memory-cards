import { changeLevel, setupCards} from './components/cards/cards.js';
import changeLanguage from './components/languages/languages.js';
import { showMessage } from './components/message/message.js';
import { getProgress } from './components/progress.js';

setupCards();

const currentLevel = getProgress();
if (currentLevel) {
    changeLanguage(localStorage.getItem('language'));
    changeLevel(currentLevel);
} else showMessage('🌍 EN / RU ?', 'Welcome!', 'languages');

