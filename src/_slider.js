import rightArrowIcon from './icons/211607_right_arrow_icon.svg'
import leftArrowIcon from './icons/211689_left_arrow_icon.svg'
import { get } from './_DOM';

console.log('slider')

export const slider = (() => {

    const dots = Array.from(get.dotNavContainer.childNodes).filter(node => node.nodeType === ELEMENT_NODE);
    const allSlides = [get.firstSlide, get.secondSlide, get.thirdSlide, get.fourthSlide];

    const setVisibility = (index) => {
        allSlides.forEach(e => {
            e.classList.contains('current-slide') ? e.classList.toggle('current-slide') : false;
        })
        allSlides[index].classList.toggle('current-slide');
    }
    const currentSlide = (index) => {
        setVisibility(index);
        return allSlides[index];
    }

    return {
        currentSlide,
        allSlides,
        setVisibility, 
    }

})();

export const renderNavigation = (() => {
    const renderDots = (() => {
        slider.allSlides.forEach(e => {
            const dot = document.createElement('div');
            dot.dataset.value = e.dataset.value;
            dot.classList.add('dot')
            get.dotNavContainer.appendChild(dot);
            e.classList.contains('current-slide') ? 
            dot.classList.toggle('fill') : false;
        })
        
    })()

    const appendArrows =( () => {
        const leftArrow = new Image;
        leftArrow.src = leftArrowIcon;
        get.leftArrowBtn.appendChild(leftArrow)

        const rightArrow = new Image;
        rightArrow.src = rightArrowIcon;
        get.rightArrowBtn.appendChild(rightArrow)

    })();
    
    return {
        renderDots,
        appendArrows
    }
})();

