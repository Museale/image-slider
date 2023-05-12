"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksrc"] = self["webpackChunksrc"] || []).push([
  ["src__events_js"],
  {
    /***/ "./src/_events.js":
      /*!************************!*\
  !*** ./src/_events.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"events\": () => (/* binding */ events)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_DOM */ \"./src/_DOM.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_slider */ \"./src/_slider.js\");\n\n\n\nconst events = (() => {\n    document.addEventListener('DOMContentLoaded', () => {\n        _slider__WEBPACK_IMPORTED_MODULE_1__.renderNavigation.renderDots()\n        _slider__WEBPACK_IMPORTED_MODULE_1__.renderNavigation.appendArrows()\n    })\n_DOM__WEBPACK_IMPORTED_MODULE_0__.get.leftArrowBtn.addEventListener('click', () => {\n    let sliderIndex;\n\n    for (let i = 0; i < _slider__WEBPACK_IMPORTED_MODULE_1__.slider.allSlides.length; i++) {\n    _slider__WEBPACK_IMPORTED_MODULE_1__.slider.allSlides[i].classList.contains('current-slide') ? \n       sliderIndex = _slider__WEBPACK_IMPORTED_MODULE_1__.slider.allSlides[i].dataset.value : false;\n    }\n\n    sliderIndex--;\n    sliderIndex >= 0 && sliderIndex <= _slider__WEBPACK_IMPORTED_MODULE_1__.slider.allSlides.length -1 ? \n    _slider__WEBPACK_IMPORTED_MODULE_1__.slider.currentSlide(sliderIndex) : _slider__WEBPACK_IMPORTED_MODULE_1__.slider.currentSlide(_slider__WEBPACK_IMPORTED_MODULE_1__.slider.allSlides.length -1);\n    \n})\n_DOM__WEBPACK_IMPORTED_MODULE_0__.get.rightArrowBtn.addEventListener('click', () => {\n    let sliderIndex;\n\n    for (let i = 0; i < _slider__WEBPACK_IMPORTED_MODULE_1__.slider.allSlides.length; i++) {\n        _slider__WEBPACK_IMPORTED_MODULE_1__.slider.allSlides[i].classList.contains('current-slide') ? \n           sliderIndex = _slider__WEBPACK_IMPORTED_MODULE_1__.slider.allSlides[i].dataset.value : false;\n        }\n\n    sliderIndex++;\n    sliderIndex >= 0 && sliderIndex <= _slider__WEBPACK_IMPORTED_MODULE_1__.slider.allSlides.length -1 ?\n    _slider__WEBPACK_IMPORTED_MODULE_1__.slider.currentSlide(sliderIndex) : _slider__WEBPACK_IMPORTED_MODULE_1__.slider.currentSlide(0);\n})\n\n_DOM__WEBPACK_IMPORTED_MODULE_0__.get.dotNavContainer.addEventListener('click', (e) => {\n    const filterdots = Array.from(_DOM__WEBPACK_IMPORTED_MODULE_0__.get.dotNavContainer.childNodes).filter(node => node.nodeType === node.ELEMENT_NODE);\n   \n    if(e.target.classList.contains('dot')) {\n        for (let i = 0; i < filterdots.length; i++) {\n            if (filterdots[i].classList.contains('fill'))\n            filterdots[i].classList.toggle('fill')\n         }\n        e.target.classList.toggle('fill');\n        _slider__WEBPACK_IMPORTED_MODULE_1__.slider.currentSlide(e.target.dataset.value) \n    }\n})\n})();\n\n//# sourceURL=webpack://src/./src/_events.js?"
        );

        /***/
      },
  },
]);
