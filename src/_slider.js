import rightArrowIcon from './icons/211607_right_arrow_icon.svg'
import leftArrowIcon from './icons/211689_left_arrow_icon.svg'
import { get } from './_DOM'

export const renderNavigation = (() => {

    const renderDots = () => {
    }   
    const appendArrows =(() => {
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

export const slider = (() => {

    const allSlides = [get.firstSlide, get.secondSlide, get.thirdSlide];

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
     
get.leftArrowBtn.addEventListener('click', () => {
    let sliderIndex;

    for (let i = 0; i < slider.allSlides.length; i++) {
    slider.allSlides[i].classList.contains('current-slide') ? 
       sliderIndex = slider.allSlides[i].dataset.value : false;
    }

    sliderIndex--;
    sliderIndex >= 0 && sliderIndex <= slider.allSlides.length -1 ? 
    slider.currentSlide(sliderIndex) : slider.currentSlide(slider.allSlides.length -1);
    
})
get.rightArrowBtn.addEventListener('click', () => {
    let sliderIndex;

    for (let i = 0; i < slider.allSlides.length; i++) {
        slider.allSlides[i].classList.contains('current-slide') ? 
           sliderIndex = slider.allSlides[i].dataset.value : false;
        }

    sliderIndex++;
    sliderIndex >= 0 && sliderIndex <= slider.allSlides.length -1 ?
    slider.currentSlide(sliderIndex) : slider.currentSlide(0);
})
