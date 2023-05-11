import rightArrowIcon from "./icons/211607_right_arrow_icon.svg";
import leftArrowIcon from "./icons/211689_left_arrow_icon.svg";
import firstSliderImg from "./icons/pexels-torsten-dettlaff-971546.jpg";

import { get } from "./_DOM";

console.log("slider");

export const slider = (() => {
  const allSlides = [
    get.firstSlide,
    get.secondSlide,
    get.thirdSlide,
    get.fourthSlide,
  ];

  const setVisibility = (index) => {
    allSlides.forEach((e) => {
      e.classList.contains("current-slide")
        ? e.classList.toggle("current-slide")
        : false;
    });
    allSlides[index].classList.toggle("current-slide");
  };
  const currentSlide = (index) => {
    prevNext(index);
    setVisibility(index);
    return allSlides[index];
  };

  const prevNext = (index) => {
    allSlides.forEach((e) => {
      if (e.dataset.value < allSlides[index].dataset.value) {
        e.classList.remove("next");
        e.classList.add("previous");
      } else if (e.dataset.value > allSlides[index].dataset.value) {
        e.classList.remove("previous");
        e.classList.add("next");
      } else {
        e.classList.remove("previous", "next");
      }
    });
  };

  return {
    currentSlide,
    allSlides,
    setVisibility,
    prevNext,
  };
})();

export const renderNavigation = (() => {
  const renderDots = (() => {
    slider.allSlides.forEach((e) => {
      const dot = document.createElement("div");
      dot.dataset.value = e.dataset.value;
      dot.classList.add("dot");
      get.dotNavContainer.appendChild(dot);
      e.classList.contains("current-slide")
        ? dot.classList.toggle("fill")
        : false;
    });
  })();

  const appendArrows = (() => {
    const leftArrow = new Image();
    leftArrow.src = leftArrowIcon;
    get.leftArrowBtn.appendChild(leftArrow);

    const rightArrow = new Image();
    rightArrow.src = rightArrowIcon;
    get.rightArrowBtn.appendChild(rightArrow);
  })();

  return {
    renderDots,
    appendArrows,
  };
})();
