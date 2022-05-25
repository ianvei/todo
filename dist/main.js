/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/category.js":
/*!*************************!*\
  !*** ./src/category.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Category)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nclass Category{\n    constructor(categoryRoot){\n        this.categoryRoot = categoryRoot\n        this.taskList = []\n        // return this.taskList\n    }\n\n    pushTask(task){\n        this.taskList.push(task)\n        // console.log(this.taskList)\n    }\n\n    createNewCategory(){\n        let formData = new FormData(document.querySelector('#new-category'))\n        let newCategory = {}\n        for (let [key, value] of formData){\n            this.key = value\n            this[\"identifier\"] = newCategory.category + Math.floor(Math.random()*(999-100+1)+100)\n            // newCategory[key] = value\n            // newCategory['identifier'] = newCategory.category + Math.floor(Math.random()*(999-100+1)+100)\n            \n          } \n        return newCategory;\n    }\n    \n   \n}\n\n//# sourceURL=webpack://todo/./src/category.js?");

/***/ }),

/***/ "./src/currentcategory.js":
/*!********************************!*\
  !*** ./src/currentcategory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CurrentCategory)\n/* harmony export */ });\nclass CurrentCategory{\n    constructor(name){\n        this.setName(name);\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    setName(categoryName){\n        this.name = categoryName\n    }\n}\n\n//# sourceURL=webpack://todo/./src/currentcategory.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostCategory)\n/* harmony export */ });\n\n\n\n\nclass PostCategory{\n    constructor(){\n        // this.categoryRoot = categoryRoot\n    }\n\n    updateCategoryDom(category, categoryStatus){\n        console.log(category.category)\n        let categoryRoot = document.querySelector('.category-card')\n        console.log(categoryRoot)\n        \n        // console.log(this.categoryRoot)\n        let newCategoryDiv = document.createElement('div')\n        newCategoryDiv.classList.add('category-container')\n        let newCategoryText = document.createElement('p')\n        let categoryDeleteImg = document.createElement('img')\n        newCategoryDiv.setAttribute('id', `${category.identifier}`)\n        categoryDeleteImg.classList.add('delete-category')\n        newCategoryDiv.addEventListener('click', function(){\n            console.log(`I am ${category.identifier}`)\n            category[\"current\"] = true\n            categoryStatus.setName(category.identifier)\n            console.log(categoryStatus)\n           \n        })\n        newCategoryText.textContent = category.category\n        newCategoryDiv.appendChild(newCategoryText)\n        newCategoryDiv.appendChild(categoryDeleteImg)\n        categoryRoot.appendChild(newCategoryDiv)\n        \n    }\n}\n\n//# sourceURL=webpack://todo/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n/* harmony import */ var _currentcategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentcategory */ \"./src/currentcategory.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n\n\nlet categoryForm = document.getElementById('new-category')\nlet categoryRoot = document.querySelector('.category-card')\n// let taskRoot = document.querySelector('.todo-item-container')\nlet taskForm = document.getElementById('todo-submit')\nlet currentCategory = ''\n\nlet currentCategories = []\n\nlet testCategory = new _category__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById('new-category'), document.querySelector('.category-card'))\nlet categoryStatus = new _currentcategory__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\ncategoryStatus.setName('default')\n\ncategoryForm.onsubmit = function(e) {\n  let newCategory = testCategory.createNewCategory()\n  let testingCategory = new _category__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById('new-category'), document.querySelector('.category-card'))\n  let updateCategory = new _dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n  // console.log(updateCategory)\n  updateCategory.updateCategoryDom(newCategory, categoryStatus);\n  currentCategories.push(newCategory)\n  // console.log(currentCategories)\n  // console.log(JSON.stringify(currentCategories))\n  // delete, this will go in the category selection logic\n  // currentCategory = newCategory.identifier\n  // console.log(currentCategory)\n  // \n  // console.log(`I am in index ${JSON.stringify(categoryStatus)}`)\n  console.log(`this is testing category ${JSON.stringify(testingCategory)}`)\n  console.log(categoryStatus.getName())\n  console.log(currentCategories)\n  e.preventDefault();\n}\n\n\n\ntaskForm.onsubmit = function(e) {\n  console.log('pingas')\n  for(let category of currentCategories){\n    if(category.identifier === categoryStatus.getName()){\n      // category.pushTask('test')\n      console.log(category)\n    }\n\n  }\n  // idea: when task is created, it also gives the name of the object that it is currently being created to\n\n  e.preventDefault();\n}\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\n    constructor(){\n        // get name of the category that the task is supposed to be in\n    }\n\n    createNewTask(){\n        let formData = new FormData(document.querySelector('#todo-submit'))\n        let newTask = {}\n        for (let [key, value] of formData){\n            newTask[key] = value\n          } \n        return newTask;\n    }\n}\n\n//# sourceURL=webpack://todo/./src/task.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;