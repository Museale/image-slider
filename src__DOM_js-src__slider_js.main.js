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
  ["src__DOM_js-src__slider_js"],
  {
    /***/ "./src/_DOM.js":
      /*!*********************!*\
  !*** ./src/_DOM.js ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get\": () => (/* binding */ get),\n/* harmony export */   \"renderNavigation\": () => (/* binding */ renderNavigation)\n/* harmony export */ });\n/* harmony import */ var _icons_211607_right_arrow_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/211607_right_arrow_icon.svg */ \"./src/icons/211607_right_arrow_icon.svg\");\n/* harmony import */ var _icons_211689_left_arrow_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/211689_left_arrow_icon.svg */ \"./src/icons/211689_left_arrow_icon.svg\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_slider */ \"./src/_slider.js\");\n\n\n\nconsole.log('dom')\n\nconst get = (() => {\n    const wrapper = document.getElementById('wrapper');\n    const carouselWrapper = document.getElementById('carousel-wrapper');\n    const leftArrowBtn = document.getElementById('arrow-left');\n    const rightArrowBtn = document.getElementById('arrow-right');\n    const dotNavContainer = document.getElementById('bottom-dot-container');\n    const slides = document.getElementById('slides');\n    const firstSlide = document.getElementById('first-slide');\n    const secondSlide = document.getElementById('second-slide');\n    const thirdSlide = document.getElementById('third-slide');\n    const fourthSlide = document.getElementById('fourth-slide')\n\n\n    return {\n        wrapper,\n        carouselWrapper,\n        leftArrowBtn,\n        rightArrowBtn,\n        dotNavContainer,\n        slides,\n        firstSlide,\n        secondSlide,\n        thirdSlide,\n        fourthSlide\n    }\n})();\n\n\nconst renderNavigation = (() => {\n    const renderDots = () => {\n        _slider__WEBPACK_IMPORTED_MODULE_2__.slider.allSlides.forEach(e => {\n            const dot = document.createElement('div');\n            dot.dataset.value = e.dataset.value;\n            dot.classList.add('dot')\n            get.dotNavContainer.appendChild(dot);\n        })\n\n    };\n\n    const appendArrows =() => {\n        const leftArrow = new Image;\n        leftArrow.src = _icons_211689_left_arrow_icon_svg__WEBPACK_IMPORTED_MODULE_1__;\n        get.leftArrowBtn.appendChild(leftArrow)\n\n        const rightArrow = new Image;\n        rightArrow.src = _icons_211607_right_arrow_icon_svg__WEBPACK_IMPORTED_MODULE_0__;\n        get.rightArrowBtn.appendChild(rightArrow)\n\n    };\n    \n    return {\n        renderDots,\n        appendArrows\n    }\n})();\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    renderNavigation.renderDots();\n    renderNavigation.appendArrows();\n  });\n\n//# sourceURL=webpack://src/./src/_DOM.js?"
        );

        /***/
      },

    /***/ "./src/_slider.js":
      /*!************************!*\
  !*** ./src/_slider.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNavigation\": () => (/* binding */ renderNavigation),\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_DOM.js */ \"./src/_DOM.js\");\n\n\nconsole.log('slider')\n\nconst slider = (() => {\n\n    const dots = Array.from(_DOM_js__WEBPACK_IMPORTED_MODULE_0__.get.dotNavContainer.childNodes).filter(node => node.nodeType === ELEMENT_NODE);\n    const allSlides = [_DOM_js__WEBPACK_IMPORTED_MODULE_0__.get.firstSlide, _DOM_js__WEBPACK_IMPORTED_MODULE_0__.get.secondSlide, _DOM_js__WEBPACK_IMPORTED_MODULE_0__.get.thirdSlide, _DOM_js__WEBPACK_IMPORTED_MODULE_0__.get.fourthSlide];\n\n    const setVisibility = (index) => {\n        allSlides.forEach(e => {\n            e.classList.contains('current-slide') ? e.classList.toggle('current-slide') : false;\n        })\n        allSlides[index].classList.toggle('current-slide');\n        dots[index].classList.toggle('fill');\n\n    }\n    const currentSlide = (index) => {\n        setVisibility(index);\n        return allSlides[index];\n    }\n\n    return {\n        currentSlide,\n        allSlides,\n        setVisibility, \n    }\n\n})();\n\n\n\nconst renderNavigation = (() => {\n    const renderDots = (() => {\n        slider.allSlides.forEach(e => {\n            const dot = document.createElement('div');\n            dot.dataset.value = e.dataset.value;\n            dot.classList.add('dot')\n            _DOM_js__WEBPACK_IMPORTED_MODULE_0__.get.dotNavContainer.appendChild(dot);\n        })\n\n    })();\n\n    const appendArrows =(() => {\n        const leftArrow = new Image;\n        leftArrow.src = leftArrowIcon;\n        _DOM_js__WEBPACK_IMPORTED_MODULE_0__.get.leftArrowBtn.appendChild(leftArrow)\n\n        const rightArrow = new Image;\n        rightArrow.src = rightArrowIcon;\n        _DOM_js__WEBPACK_IMPORTED_MODULE_0__.get.rightArrowBtn.appendChild(rightArrow)\n\n    })();\n    \n    return {\n        renderDots,\n        appendArrows\n    }\n})();\n\n\n\n//# sourceURL=webpack://src/./src/_slider.js?"
        );

        /***/
      },

    /***/ "./src/icons/211607_right_arrow_icon.svg":
      /*!***********************************************!*\
  !*** ./src/icons/211607_right_arrow_icon.svg ***!
  \***********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "50703ef55bbe55adf8ce.svg";\n\n//# sourceURL=webpack://src/./src/icons/211607_right_arrow_icon.svg?'
        );

        /***/
      },

    /***/ "./src/icons/211689_left_arrow_icon.svg":
      /*!**********************************************!*\
  !*** ./src/icons/211689_left_arrow_icon.svg ***!
  \**********************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "4b3f44230b8182191341.svg";\n\n//# sourceURL=webpack://src/./src/icons/211689_left_arrow_icon.svg?'
        );

        /***/
      },
  },
]);
