console.log("dom");

export const get = (() => {
  const wrapper = document.getElementById("wrapper");
  const carouselWrapper = document.getElementById("carousel-wrapper");
  const leftArrowBtn = document.getElementById("arrow-left");
  const rightArrowBtn = document.getElementById("arrow-right");
  const dotNavContainer = document.getElementById("bottom-dot-container");
  const slides = document.getElementById("slides");
  const firstSlide = document.getElementById("first-slide");
  const secondSlide = document.getElementById("second-slide");
  const thirdSlide = document.getElementById("third-slide");
  const fourthSlide = document.getElementById("fourth-slide");

  return {
    wrapper,
    carouselWrapper,
    leftArrowBtn,
    rightArrowBtn,
    dotNavContainer,
    slides,
    firstSlide,
    secondSlide,
    thirdSlide,
    fourthSlide,
  };
})();
