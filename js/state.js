const state = {
    cardsNumber: 8,
    level: 1,
    imageSources: [],
}

function shuffleArray(array) {
    let randomIndex, currentIndex = array.length;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex--);
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}


function createImageSources() {
    for (let i = 0; i < (state.cardsNumber / 2); i++) {
        state.imageSources.push(`../assets/img/${i + 1}.jpg`);
        state.imageSources.push(`../assets/img/${i + 1}.jpg`);
    };
    shuffleArray(state.imageSources);

    const imgElements = document.querySelectorAll('.card__img');
    imgElements.forEach((img, ind) => img.setAttribute('src', state.imageSources[ind]));
}

export default state;
export {
    createImageSources,
}