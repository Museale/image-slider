import rightArrowIcon from "./icons/211607_right_arrow_icon.svg";
import leftArrowIcon from "./icons/211689_left_arrow_icon.svg";

import { get } from "./_DOM";

export const slider = (() => {
  let slideTimer;

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
    clearTimeout(slideTimer);
    slideTimer = timer(index);
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

  const timer = (index) => {
    return setTimeout(() => {
      if (index + 1 < allSlides.length) {
        currentSlide(index + 1);
        get.dotNavContainer.childNodes.forEach((element) => {
          element.dataset.value == index + 1
            ? element.classList.add("fill")
            : element.classList.remove("fill");
        });
      }
      if (index + 1 == allSlides.length) {
        currentSlide(0);
        get.dotNavContainer.childNodes.forEach((element) => {
          element.dataset.value == 0
            ? element.classList.add("fill")
            : element.classList.remove("fill");
        });
      }
    }, 5000);
  };

  return {
    currentSlide,
    allSlides,
    setVisibility,
    prevNext,
    timer,
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
