var sliderIndex = 0;
const changeSlideContent = (direction) => {
    // Get parents
    const heroContainer = document.getElementsByClassName('hero-container')[0];
    const contentContainerSection = document.getElementsByClassName('content');
    const pictElements = heroContainer.getElementsByTagName('picture');
    for (let index = 0; index < pictElements.length; index++) {
        const picture = pictElements[index];
        picture.classList.add('inactive');
        const content = contentContainerSection[index];
        content.classList.add('inactive');
    }

    if (direction == 'up') {
        sliderIndex = (sliderIndex + 1) % 3;
    }
    else {
        if (sliderIndex >= 1) {
            sliderIndex = (sliderIndex - 1) % 3;
        }
    }

    pictElements[sliderIndex].classList.remove('inactive'); 
    contentContainerSection[sliderIndex].classList.remove('inactive');

}