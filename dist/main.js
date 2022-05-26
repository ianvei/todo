/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/category.js":
/*!*************************!*\
  !*** ./src/category.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



class Category{
    constructor(categoryRoot){
        this.categoryRoot = categoryRoot
        this.taskList = []
        // return this.taskList
    }

    pushTask(task){
        this.taskList.push(task)
        // console.log(this.taskList)
    }

    createNewCategory(){
        let formData = new FormData(document.querySelector('#new-category'))
        let newCategory = {}
        for (let [key, value] of formData){
            this.key = value
            this["identifier"] = newCategory.category + Math.floor(Math.random()*(999-100+1)+100)
            // newCategory[key] = value
            // newCategory['identifier'] = newCategory.category + Math.floor(Math.random()*(999-100+1)+100)
            
          } 
        return newCategory;
    }
    
   
}

/***/ }),

/***/ "./src/currentcategory.js":
/*!********************************!*\
  !*** ./src/currentcategory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CurrentCategory)
/* harmony export */ });
class CurrentCategory{
    constructor(name){
        this.setName(name);
    }

    getName() {
        return this.name;
    }

    setName(categoryName){
        this.name = categoryName
    }
}

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostCategory)
/* harmony export */ });




class PostCategory{
    constructor(){
        // this.categoryRoot = categoryRoot
    }

    updateCategoryDom(category, categoryStatus){
        console.log(category.category)
        let categoryRoot = document.querySelector('.category-card')
        console.log(categoryRoot)
        
        // console.log(this.categoryRoot)
        let newCategoryDiv = document.createElement('div')
        newCategoryDiv.classList.add('category-container')
        let newCategoryText = document.createElement('p')
        let categoryDeleteImg = document.createElement('img')
        newCategoryDiv.setAttribute('id', `${category.identifier}`)
        categoryDeleteImg.classList.add('delete-category')
        newCategoryDiv.addEventListener('click', function(){
            console.log(`I am ${category.identifier}`)
            category["current"] = true
            categoryStatus.setName(category.identifier)
            console.log(categoryStatus)
           
        })
        newCategoryText.textContent = category.category
        newCategoryDiv.appendChild(newCategoryText)
        newCategoryDiv.appendChild(categoryDeleteImg)
        categoryRoot.appendChild(newCategoryDiv)
        
    }
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task{
    constructor(){
        // get name of the category that the task is supposed to be in
    }

    createNewTask(){
        let formData = new FormData(document.querySelector('#todo-submit'))
        let newTask = {}
        for (let [key, value] of formData){
            newTask[key] = value
          } 
        return newTask;
    }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ "./src/category.js");
/* harmony import */ var _currentcategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentcategory */ "./src/currentcategory.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");






let categoryForm = document.getElementById('new-category')
let categoryRoot = document.querySelector('.category-card')
// let taskRoot = document.querySelector('.todo-item-container')
let taskForm = document.getElementById('todo-submit')
let currentCategory = ''

let currentCategories = []

let testCategory = new _category__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById('new-category'), document.querySelector('.category-card'))
let categoryStatus = new _currentcategory__WEBPACK_IMPORTED_MODULE_1__["default"]
categoryStatus.setName('default')

categoryForm.onsubmit = function(e) {
  let newCategory = testCategory.createNewCategory()
  let testingCategory = new _category__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById('new-category'), document.querySelector('.category-card'))
  let updateCategory = new _dom__WEBPACK_IMPORTED_MODULE_2__["default"]()
  // console.log(updateCategory)
  updateCategory.updateCategoryDom(newCategory, categoryStatus);
  currentCategories.push(newCategory)
  // console.log(currentCategories)
  // console.log(JSON.stringify(currentCategories))
  // delete, this will go in the category selection logic
  // currentCategory = newCategory.identifier
  // console.log(currentCategory)
  // 
  // console.log(`I am in index ${JSON.stringify(categoryStatus)}`)
  console.log(`this is testing category ${JSON.stringify(testingCategory)}`)
  console.log(categoryStatus.getName())
  console.log(currentCategories)
  e.preventDefault();
}



taskForm.onsubmit = function(e) {
  console.log('pingas')
  for(let category of currentCategories){
    if(category.identifier === categoryStatus.getName()){
      // category.pushTask('test')
      console.log(category)
    }

  }
  // idea: when task is created, it also gives the name of the object that it is currently being created to

  e.preventDefault();
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7OztBQUdqQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdCZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLG9CQUFvQjtBQUNqRTtBQUNBO0FBQ0EsZ0NBQWdDLG9CQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQ2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ2M7QUFDZjtBQUNQOzs7QUFHekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsaURBQVE7QUFDL0IseUJBQXlCLHdEQUFlO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQVE7QUFDcEMsMkJBQTJCLDRDQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywrQkFBK0I7QUFDakUsMENBQTBDLGdDQUFnQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jdXJyZW50Y2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3N0Q2F0ZWdvcnkgZnJvbSBcIi4vZG9tXCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeXtcbiAgICBjb25zdHJ1Y3RvcihjYXRlZ29yeVJvb3Qpe1xuICAgICAgICB0aGlzLmNhdGVnb3J5Um9vdCA9IGNhdGVnb3J5Um9vdFxuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW11cbiAgICAgICAgLy8gcmV0dXJuIHRoaXMudGFza0xpc3RcbiAgICB9XG5cbiAgICBwdXNoVGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGFza0xpc3QpXG4gICAgfVxuXG4gICAgY3JlYXRlTmV3Q2F0ZWdvcnkoKXtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctY2F0ZWdvcnknKSlcbiAgICAgICAgbGV0IG5ld0NhdGVnb3J5ID0ge31cbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGZvcm1EYXRhKXtcbiAgICAgICAgICAgIHRoaXMua2V5ID0gdmFsdWVcbiAgICAgICAgICAgIHRoaXNbXCJpZGVudGlmaWVyXCJdID0gbmV3Q2F0ZWdvcnkuY2F0ZWdvcnkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDk5OS0xMDArMSkrMTAwKVxuICAgICAgICAgICAgLy8gbmV3Q2F0ZWdvcnlba2V5XSA9IHZhbHVlXG4gICAgICAgICAgICAvLyBuZXdDYXRlZ29yeVsnaWRlbnRpZmllciddID0gbmV3Q2F0ZWdvcnkuY2F0ZWdvcnkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDk5OS0xMDArMSkrMTAwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIG5ld0NhdGVnb3J5O1xuICAgIH1cbiAgICBcbiAgIFxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbnRDYXRlZ29yeXtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5zZXROYW1lKG5hbWUpO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShjYXRlZ29yeU5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBjYXRlZ29yeU5hbWVcbiAgICB9XG59IiwiXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0Q2F0ZWdvcnl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8gdGhpcy5jYXRlZ29yeVJvb3QgPSBjYXRlZ29yeVJvb3RcbiAgICB9XG5cbiAgICB1cGRhdGVDYXRlZ29yeURvbShjYXRlZ29yeSwgY2F0ZWdvcnlTdGF0dXMpe1xuICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeS5jYXRlZ29yeSlcbiAgICAgICAgbGV0IGNhdGVnb3J5Um9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1jYXJkJylcbiAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnlSb290KVxuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jYXRlZ29yeVJvb3QpXG4gICAgICAgIGxldCBuZXdDYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5ld0NhdGVnb3J5RGl2LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LWNvbnRhaW5lcicpXG4gICAgICAgIGxldCBuZXdDYXRlZ29yeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgbGV0IGNhdGVnb3J5RGVsZXRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgbmV3Q2F0ZWdvcnlEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke2NhdGVnb3J5LmlkZW50aWZpZXJ9YClcbiAgICAgICAgY2F0ZWdvcnlEZWxldGVJbWcuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWNhdGVnb3J5JylcbiAgICAgICAgbmV3Q2F0ZWdvcnlEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEkgYW0gJHtjYXRlZ29yeS5pZGVudGlmaWVyfWApXG4gICAgICAgICAgICBjYXRlZ29yeVtcImN1cnJlbnRcIl0gPSB0cnVlXG4gICAgICAgICAgICBjYXRlZ29yeVN0YXR1cy5zZXROYW1lKGNhdGVnb3J5LmlkZW50aWZpZXIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeVN0YXR1cylcbiAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIG5ld0NhdGVnb3J5VGV4dC50ZXh0Q29udGVudCA9IGNhdGVnb3J5LmNhdGVnb3J5XG4gICAgICAgIG5ld0NhdGVnb3J5RGl2LmFwcGVuZENoaWxkKG5ld0NhdGVnb3J5VGV4dClcbiAgICAgICAgbmV3Q2F0ZWdvcnlEaXYuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlEZWxldGVJbWcpXG4gICAgICAgIGNhdGVnb3J5Um9vdC5hcHBlbmRDaGlsZChuZXdDYXRlZ29yeURpdilcbiAgICAgICAgXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2t7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8gZ2V0IG5hbWUgb2YgdGhlIGNhdGVnb3J5IHRoYXQgdGhlIHRhc2sgaXMgc3VwcG9zZWQgdG8gYmUgaW5cbiAgICB9XG5cbiAgICBjcmVhdGVOZXdUYXNrKCl7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1zdWJtaXQnKSlcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSB7fVxuICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgZm9ybURhdGEpe1xuICAgICAgICAgICAgbmV3VGFza1trZXldID0gdmFsdWVcbiAgICAgICAgICB9IFxuICAgICAgICByZXR1cm4gbmV3VGFzaztcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vY2F0ZWdvcnlcIlxuaW1wb3J0IEN1cnJlbnRDYXRlZ29yeSBmcm9tIFwiLi9jdXJyZW50Y2F0ZWdvcnlcIlxuaW1wb3J0IFBvc3RDYXRlZ29yeSBmcm9tIFwiLi9kb21cIlxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiXG5cblxubGV0IGNhdGVnb3J5Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctY2F0ZWdvcnknKVxubGV0IGNhdGVnb3J5Um9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1jYXJkJylcbi8vIGxldCB0YXNrUm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWl0ZW0tY29udGFpbmVyJylcbmxldCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXN1Ym1pdCcpXG5sZXQgY3VycmVudENhdGVnb3J5ID0gJydcblxubGV0IGN1cnJlbnRDYXRlZ29yaWVzID0gW11cblxubGV0IHRlc3RDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWNhdGVnb3J5JyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1jYXJkJykpXG5sZXQgY2F0ZWdvcnlTdGF0dXMgPSBuZXcgQ3VycmVudENhdGVnb3J5XG5jYXRlZ29yeVN0YXR1cy5zZXROYW1lKCdkZWZhdWx0JylcblxuY2F0ZWdvcnlGb3JtLm9uc3VibWl0ID0gZnVuY3Rpb24oZSkge1xuICBsZXQgbmV3Q2F0ZWdvcnkgPSB0ZXN0Q2F0ZWdvcnkuY3JlYXRlTmV3Q2F0ZWdvcnkoKVxuICBsZXQgdGVzdGluZ0NhdGVnb3J5ID0gbmV3IENhdGVnb3J5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctY2F0ZWdvcnknKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWNhcmQnKSlcbiAgbGV0IHVwZGF0ZUNhdGVnb3J5ID0gbmV3IFBvc3RDYXRlZ29yeSgpXG4gIC8vIGNvbnNvbGUubG9nKHVwZGF0ZUNhdGVnb3J5KVxuICB1cGRhdGVDYXRlZ29yeS51cGRhdGVDYXRlZ29yeURvbShuZXdDYXRlZ29yeSwgY2F0ZWdvcnlTdGF0dXMpO1xuICBjdXJyZW50Q2F0ZWdvcmllcy5wdXNoKG5ld0NhdGVnb3J5KVxuICAvLyBjb25zb2xlLmxvZyhjdXJyZW50Q2F0ZWdvcmllcylcbiAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY3VycmVudENhdGVnb3JpZXMpKVxuICAvLyBkZWxldGUsIHRoaXMgd2lsbCBnbyBpbiB0aGUgY2F0ZWdvcnkgc2VsZWN0aW9uIGxvZ2ljXG4gIC8vIGN1cnJlbnRDYXRlZ29yeSA9IG5ld0NhdGVnb3J5LmlkZW50aWZpZXJcbiAgLy8gY29uc29sZS5sb2coY3VycmVudENhdGVnb3J5KVxuICAvLyBcbiAgLy8gY29uc29sZS5sb2coYEkgYW0gaW4gaW5kZXggJHtKU09OLnN0cmluZ2lmeShjYXRlZ29yeVN0YXR1cyl9YClcbiAgY29uc29sZS5sb2coYHRoaXMgaXMgdGVzdGluZyBjYXRlZ29yeSAke0pTT04uc3RyaW5naWZ5KHRlc3RpbmdDYXRlZ29yeSl9YClcbiAgY29uc29sZS5sb2coY2F0ZWdvcnlTdGF0dXMuZ2V0TmFtZSgpKVxuICBjb25zb2xlLmxvZyhjdXJyZW50Q2F0ZWdvcmllcylcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5cblxudGFza0Zvcm0ub25zdWJtaXQgPSBmdW5jdGlvbihlKSB7XG4gIGNvbnNvbGUubG9nKCdwaW5nYXMnKVxuICBmb3IobGV0IGNhdGVnb3J5IG9mIGN1cnJlbnRDYXRlZ29yaWVzKXtcbiAgICBpZihjYXRlZ29yeS5pZGVudGlmaWVyID09PSBjYXRlZ29yeVN0YXR1cy5nZXROYW1lKCkpe1xuICAgICAgLy8gY2F0ZWdvcnkucHVzaFRhc2soJ3Rlc3QnKVxuICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkpXG4gICAgfVxuXG4gIH1cbiAgLy8gaWRlYTogd2hlbiB0YXNrIGlzIGNyZWF0ZWQsIGl0IGFsc28gZ2l2ZXMgdGhlIG5hbWUgb2YgdGhlIG9iamVjdCB0aGF0IGl0IGlzIGN1cnJlbnRseSBiZWluZyBjcmVhdGVkIHRvXG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=