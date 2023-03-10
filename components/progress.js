function saveProgress(currentLevel) {
    localStorage.setItem('currentLevel', currentLevel);
}

function getProgress() {
    return localStorage.getItem('currentLevel');
}

function deleteProgress(){
    localStorage.clear();
}

export {
    saveProgress,
    getProgress,
    deleteProgress
}