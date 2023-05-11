import { get } from "./_DOM";
import { renderNavigation, slider } from "./_slider";

export const events = (() => {
  const filterdots = Array.from(get.dotNavContainer.childNodes).filter(
    (node) => node.nodeType === node.ELEMENT_NODE
  );

  get.leftArrowBtn.addEventListener("click", () => {
    let sliderIndex;

    for (let i = 0; i < slider.allSlides.length; i++) {
      slider.allSlides[i].classList.contains("current-slide")
        ? (sliderIndex = slider.allSlides[i].dataset.value)
        : false;
    }
    sliderIndex--;
    sliderIndex >= 0 && sliderIndex <= slider.allSlides.length - 1
      ? slider.currentSlide(sliderIndex)
      : slider.currentSlide(slider.allSlides.length - 1);
    filterdots.forEach((dot) => {
      console.log(dot.dataset.value, sliderIndex);
      if (dot.classList.contains("fill")) {
        dot.classList.toggle("fill");
      }
      if (
        dot.dataset.value == sliderIndex ||
        (dot.dataset.value == slider.allSlides.length - 1 && sliderIndex == -1)
      ) {
        dot.classList.toggle("fill");
      }
    });
  });

  get.rightArrowBtn.addEventListener("click", () => {
    let sliderIndex;
    for (let i = 0; i < slider.allSlides.length; i++) {
      slider.allSlides[i].classList.contains("current-slide")
        ? (sliderIndex = slider.allSlides[i].dataset.value)
        : false;
    }

    sliderIndex++;
    sliderIndex >= 0 && sliderIndex < slider.allSlides.length
      ? slider.currentSlide(sliderIndex)
      : slider.currentSlide(0);
    filterdots.forEach((dot) => {
      if (dot.classList.contains("fill")) {
        dot.classList.toggle("fill");
      }
      if (
        dot.dataset.value == sliderIndex ||
        (dot.dataset.value == 0 && sliderIndex == 4)
      ) {
        dot.classList.toggle("fill");
      }
    });
  });

  get.dotNavContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
      for (let i = 0; i < filterdots.length; i++) {
        if (filterdots[i].classList.contains("fill"))
          filterdots[i].classList.toggle("fill");
      }
      e.target.classList.toggle("fill");
      slider.currentSlide(e.target.dataset.value);
    }
  });
})();
