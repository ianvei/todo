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
            // this.key = value
            // this["identifier"] = newCategory.category + Math.floor(Math.random()*(999-100+1)+100)
            newCategory["taskList"] = []
            newCategory[key] = value
            newCategory['identifier'] = newCategory.category + Math.floor(Math.random()*(999-100+1)+100)
            const addTask = function(task){
                newCategory["taskList"].push(task)
            }
            newCategory.addTask = addTask
            // there is an issue with this, its creating an object within an object. 2 ways to fix this, ONE: harder, but maybe more correct is to make it so this method updates the main class, or TWO: easier: just make this method create the category, and have taskList inside of the category, not the overarching Class
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
        
        newCategoryDiv.setAttribute('id', `${category.identifier}`)
        
        newCategoryDiv.addEventListener('click', function(){
            console.log(`I am ${category.identifier}`)
            category["current"] = true
            categoryStatus.setName(category.identifier)

            console.log(categoryStatus)
            
           
        })

        let deleteCategory = document.createElement('span')
        deleteCategory.classList.add('material-symbols-outlined')
        deleteCategory.classList.add('categoryDelete')
        deleteCategory.innerText = 'delete'

        newCategoryText.textContent = category.category
        newCategoryDiv.appendChild(newCategoryText)
        newCategoryDiv.appendChild(deleteCategory)
        categoryRoot.appendChild(newCategoryDiv)   
    }

    updateTaskDom(task){
        console.log(task)
        let taskRoot = document.querySelector('.todo-item-container')
        let newTaskDiv = document.createElement('div')
        newTaskDiv.classList.add('todo-item')
        newTaskDiv.setAttribute('id', `${task.identifier}`)

        let name = document.createElement('div')
        name.classList.add('task-name')
        name.innerText = task['task-name']

        let date = document.createElement('div')
        date.classList.add('date')
        date.innerText = task['task-date']

        let priority = document.createElement('div')
        priority.classList.add('priority')
        priority.innerText = task['task-priority']

        

        let deleteTask = document.createElement('span')
        deleteTask.classList.add('material-symbols-outlined')
        deleteTask.classList.add('taskDelete')
        deleteTask.innerText = 'delete'

        newTaskDiv.appendChild(name)
        newTaskDiv.appendChild(date)
        newTaskDiv.appendChild(priority)
        newTaskDiv.appendChild(deleteTask)
        


        taskRoot.appendChild(newTaskDiv)
    }

    deleteTaskDom(){
        let taskRoot = document.querySelector('.todo-item-container')
        taskRoot.remove()
        let newTaskRoot = document.createElement('div')
        newTaskRoot.classList.add('todo-item-container')
        let formRoot = document.querySelector('.right-container')
        formRoot.appendChild(newTaskRoot)
    }

    deleteOneTask(){

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
            newTask['identifier'] = newTask['task-name'] + Math.floor(Math.random()*(999-100+1)+100)
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
let taskDeleter = new _dom__WEBPACK_IMPORTED_MODULE_2__["default"]
categoryStatus.setName('default')

categoryForm.onsubmit = function(e) {
  let newCategory = testCategory.createNewCategory()
  // let testingCategory = new Category(document.getElementById('new-category'), document.querySelector('.category-card'))
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
  // console.log(`this is testing category ${JSON.stringify(testingCategory)}`)
  let categoryArray = document.getElementsByClassName('category-container')
  console.log(categoryArray)

  for (let category of categoryArray){
    category.addEventListener('click', () => {
      console.log('IM CLICKED')
      taskDeleter.deleteTaskDom();
      console.log(category.id)
      for(let object of currentCategories){
        if(object.identifier === category.id){
          console.log(object)
          for(let task of object.taskList){
            taskDeleter.updateTaskDom(task)
          }
        }
        
      }
    })
  }
  
  console.log(categoryStatus.getName())
  console.log(currentCategories)
  e.preventDefault();
}



taskForm.onsubmit = function(e) {
  console.log('pingas')
  for(let category of currentCategories){
    if(category.identifier === categoryStatus.getName()){
      let newTaskObject = new _task__WEBPACK_IMPORTED_MODULE_3__["default"]
      let task = newTaskObject.createNewTask()
      category.addTask(task)
      let updateTask = new _dom__WEBPACK_IMPORTED_MODULE_2__["default"];
      updateTask.updateTaskDom(task)
      console.log(task["task-name"])
    }

  }
  // idea: when task is created, it also gives the name of the object that it is currently being created to

  e.preventDefault();
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7OztBQUdqQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQ2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxvQkFBb0I7QUFDakU7QUFDQTtBQUNBLGdDQUFnQyxvQkFBb0I7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxnQkFBZ0I7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFGZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDZEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05pQztBQUNjO0FBQ2Y7QUFDUDs7O0FBR3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLGlEQUFRO0FBQy9CLHlCQUF5Qix3REFBZTtBQUN4QyxzQkFBc0IsNENBQVk7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRDQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywrQkFBK0I7QUFDakUsNkNBQTZDLGdDQUFnQztBQUM3RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkNBQUk7QUFDbEM7QUFDQTtBQUNBLDJCQUEyQiw0Q0FBWTtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2N1cnJlbnRjYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3RDYXRlZ29yeSBmcm9tIFwiLi9kb21cIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5e1xuICAgIGNvbnN0cnVjdG9yKGNhdGVnb3J5Um9vdCl7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlSb290ID0gY2F0ZWdvcnlSb290XG4gICAgICAgIHRoaXMudGFza0xpc3QgPSBbXVxuICAgICAgICAvLyByZXR1cm4gdGhpcy50YXNrTGlzdFxuICAgIH1cblxuICAgIHB1c2hUYXNrKHRhc2spe1xuICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzaylcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50YXNrTGlzdClcbiAgICB9XG5cbiAgICBjcmVhdGVOZXdDYXRlZ29yeSgpe1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1jYXRlZ29yeScpKVxuICAgICAgICBsZXQgbmV3Q2F0ZWdvcnkgPSB7fVxuICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgZm9ybURhdGEpe1xuICAgICAgICAgICAgLy8gdGhpcy5rZXkgPSB2YWx1ZVxuICAgICAgICAgICAgLy8gdGhpc1tcImlkZW50aWZpZXJcIl0gPSBuZXdDYXRlZ29yeS5jYXRlZ29yeSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooOTk5LTEwMCsxKSsxMDApXG4gICAgICAgICAgICBuZXdDYXRlZ29yeVtcInRhc2tMaXN0XCJdID0gW11cbiAgICAgICAgICAgIG5ld0NhdGVnb3J5W2tleV0gPSB2YWx1ZVxuICAgICAgICAgICAgbmV3Q2F0ZWdvcnlbJ2lkZW50aWZpZXInXSA9IG5ld0NhdGVnb3J5LmNhdGVnb3J5ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKig5OTktMTAwKzEpKzEwMClcbiAgICAgICAgICAgIGNvbnN0IGFkZFRhc2sgPSBmdW5jdGlvbih0YXNrKXtcbiAgICAgICAgICAgICAgICBuZXdDYXRlZ29yeVtcInRhc2tMaXN0XCJdLnB1c2godGFzaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0NhdGVnb3J5LmFkZFRhc2sgPSBhZGRUYXNrXG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBhbiBpc3N1ZSB3aXRoIHRoaXMsIGl0cyBjcmVhdGluZyBhbiBvYmplY3Qgd2l0aGluIGFuIG9iamVjdC4gMiB3YXlzIHRvIGZpeCB0aGlzLCBPTkU6IGhhcmRlciwgYnV0IG1heWJlIG1vcmUgY29ycmVjdCBpcyB0byBtYWtlIGl0IHNvIHRoaXMgbWV0aG9kIHVwZGF0ZXMgdGhlIG1haW4gY2xhc3MsIG9yIFRXTzogZWFzaWVyOiBqdXN0IG1ha2UgdGhpcyBtZXRob2QgY3JlYXRlIHRoZSBjYXRlZ29yeSwgYW5kIGhhdmUgdGFza0xpc3QgaW5zaWRlIG9mIHRoZSBjYXRlZ29yeSwgbm90IHRoZSBvdmVyYXJjaGluZyBDbGFzc1xuICAgICAgICAgIH0gXG4gICAgICAgIHJldHVybiBuZXdDYXRlZ29yeTtcbiAgICB9XG4gICAgXG4gICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW50Q2F0ZWdvcnl7XG4gICAgY29uc3RydWN0b3IobmFtZSl7XG4gICAgICAgIHRoaXMuc2V0TmFtZShuYW1lKTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldE5hbWUoY2F0ZWdvcnlOYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gY2F0ZWdvcnlOYW1lXG4gICAgfVxufSIsIlxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zdENhdGVnb3J5e1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vIHRoaXMuY2F0ZWdvcnlSb290ID0gY2F0ZWdvcnlSb290XG4gICAgfVxuXG4gICAgdXBkYXRlQ2F0ZWdvcnlEb20oY2F0ZWdvcnksIGNhdGVnb3J5U3RhdHVzKXtcbiAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkuY2F0ZWdvcnkpXG4gICAgICAgIGxldCBjYXRlZ29yeVJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktY2FyZCcpXG4gICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5Um9vdClcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY2F0ZWdvcnlSb290KVxuICAgICAgICBsZXQgbmV3Q2F0ZWdvcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuZXdDYXRlZ29yeURpdi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeS1jb250YWluZXInKVxuICAgICAgICBsZXQgbmV3Q2F0ZWdvcnlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIFxuICAgICAgICBuZXdDYXRlZ29yeURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7Y2F0ZWdvcnkuaWRlbnRpZmllcn1gKVxuICAgICAgICBcbiAgICAgICAgbmV3Q2F0ZWdvcnlEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEkgYW0gJHtjYXRlZ29yeS5pZGVudGlmaWVyfWApXG4gICAgICAgICAgICBjYXRlZ29yeVtcImN1cnJlbnRcIl0gPSB0cnVlXG4gICAgICAgICAgICBjYXRlZ29yeVN0YXR1cy5zZXROYW1lKGNhdGVnb3J5LmlkZW50aWZpZXIpXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5U3RhdHVzKVxuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBkZWxldGVDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgICAgICBkZWxldGVDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJylcbiAgICAgICAgZGVsZXRlQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlEZWxldGUnKVxuICAgICAgICBkZWxldGVDYXRlZ29yeS5pbm5lclRleHQgPSAnZGVsZXRlJ1xuXG4gICAgICAgIG5ld0NhdGVnb3J5VGV4dC50ZXh0Q29udGVudCA9IGNhdGVnb3J5LmNhdGVnb3J5XG4gICAgICAgIG5ld0NhdGVnb3J5RGl2LmFwcGVuZENoaWxkKG5ld0NhdGVnb3J5VGV4dClcbiAgICAgICAgbmV3Q2F0ZWdvcnlEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQ2F0ZWdvcnkpXG4gICAgICAgIGNhdGVnb3J5Um9vdC5hcHBlbmRDaGlsZChuZXdDYXRlZ29yeURpdikgICBcbiAgICB9XG5cbiAgICB1cGRhdGVUYXNrRG9tKHRhc2spe1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgICAgICBsZXQgdGFza1Jvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1pdGVtLWNvbnRhaW5lcicpXG4gICAgICAgIGxldCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0nKVxuICAgICAgICBuZXdUYXNrRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrLmlkZW50aWZpZXJ9YClcblxuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJylcbiAgICAgICAgbmFtZS5pbm5lclRleHQgPSB0YXNrWyd0YXNrLW5hbWUnXVxuXG4gICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJylcbiAgICAgICAgZGF0ZS5pbm5lclRleHQgPSB0YXNrWyd0YXNrLWRhdGUnXVxuXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5JylcbiAgICAgICAgcHJpb3JpdHkuaW5uZXJUZXh0ID0gdGFza1sndGFzay1wcmlvcml0eSddXG5cbiAgICAgICAgXG5cbiAgICAgICAgbGV0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJylcbiAgICAgICAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrRGVsZXRlJylcbiAgICAgICAgZGVsZXRlVGFzay5pbm5lclRleHQgPSAnZGVsZXRlJ1xuXG4gICAgICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQobmFtZSlcbiAgICAgICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChkYXRlKVxuICAgICAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KVxuICAgICAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spXG4gICAgICAgIFxuXG5cbiAgICAgICAgdGFza1Jvb3QuYXBwZW5kQ2hpbGQobmV3VGFza0RpdilcbiAgICB9XG5cbiAgICBkZWxldGVUYXNrRG9tKCl7XG4gICAgICAgIGxldCB0YXNrUm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWl0ZW0tY29udGFpbmVyJylcbiAgICAgICAgdGFza1Jvb3QucmVtb3ZlKClcbiAgICAgICAgbGV0IG5ld1Rhc2tSb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmV3VGFza1Jvb3QuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWNvbnRhaW5lcicpXG4gICAgICAgIGxldCBmb3JtUm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1jb250YWluZXInKVxuICAgICAgICBmb3JtUm9vdC5hcHBlbmRDaGlsZChuZXdUYXNrUm9vdClcbiAgICB9XG5cbiAgICBkZWxldGVPbmVUYXNrKCl7XG5cbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvLyBnZXQgbmFtZSBvZiB0aGUgY2F0ZWdvcnkgdGhhdCB0aGUgdGFzayBpcyBzdXBwb3NlZCB0byBiZSBpblxuICAgIH1cblxuICAgIGNyZWF0ZU5ld1Rhc2soKXtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXN1Ym1pdCcpKVxuICAgICAgICBsZXQgbmV3VGFzayA9IHt9XG4gICAgICAgIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YSl7XG4gICAgICAgICAgICBuZXdUYXNrW2tleV0gPSB2YWx1ZVxuICAgICAgICAgICAgbmV3VGFza1snaWRlbnRpZmllciddID0gbmV3VGFza1sndGFzay1uYW1lJ10gKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDk5OS0xMDArMSkrMTAwKVxuICAgICAgICAgIH0gXG4gICAgICAgIHJldHVybiBuZXdUYXNrO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9jYXRlZ29yeVwiXG5pbXBvcnQgQ3VycmVudENhdGVnb3J5IGZyb20gXCIuL2N1cnJlbnRjYXRlZ29yeVwiXG5pbXBvcnQgUG9zdENhdGVnb3J5IGZyb20gXCIuL2RvbVwiXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCJcblxuXG5sZXQgY2F0ZWdvcnlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1jYXRlZ29yeScpXG5sZXQgY2F0ZWdvcnlSb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWNhcmQnKVxuLy8gbGV0IHRhc2tSb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8taXRlbS1jb250YWluZXInKVxubGV0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tc3VibWl0JylcbmxldCBjdXJyZW50Q2F0ZWdvcnkgPSAnJ1xuXG5sZXQgY3VycmVudENhdGVnb3JpZXMgPSBbXVxuXG5sZXQgdGVzdENhdGVnb3J5ID0gbmV3IENhdGVnb3J5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctY2F0ZWdvcnknKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWNhcmQnKSlcbmxldCBjYXRlZ29yeVN0YXR1cyA9IG5ldyBDdXJyZW50Q2F0ZWdvcnlcbmxldCB0YXNrRGVsZXRlciA9IG5ldyBQb3N0Q2F0ZWdvcnlcbmNhdGVnb3J5U3RhdHVzLnNldE5hbWUoJ2RlZmF1bHQnKVxuXG5jYXRlZ29yeUZvcm0ub25zdWJtaXQgPSBmdW5jdGlvbihlKSB7XG4gIGxldCBuZXdDYXRlZ29yeSA9IHRlc3RDYXRlZ29yeS5jcmVhdGVOZXdDYXRlZ29yeSgpXG4gIC8vIGxldCB0ZXN0aW5nQ2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1jYXRlZ29yeScpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktY2FyZCcpKVxuICBsZXQgdXBkYXRlQ2F0ZWdvcnkgPSBuZXcgUG9zdENhdGVnb3J5KClcbiAgLy8gY29uc29sZS5sb2codXBkYXRlQ2F0ZWdvcnkpXG4gIHVwZGF0ZUNhdGVnb3J5LnVwZGF0ZUNhdGVnb3J5RG9tKG5ld0NhdGVnb3J5LCBjYXRlZ29yeVN0YXR1cyk7XG4gIGN1cnJlbnRDYXRlZ29yaWVzLnB1c2gobmV3Q2F0ZWdvcnkpXG4gIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRDYXRlZ29yaWVzKVxuICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjdXJyZW50Q2F0ZWdvcmllcykpXG4gIC8vIGRlbGV0ZSwgdGhpcyB3aWxsIGdvIGluIHRoZSBjYXRlZ29yeSBzZWxlY3Rpb24gbG9naWNcbiAgLy8gY3VycmVudENhdGVnb3J5ID0gbmV3Q2F0ZWdvcnkuaWRlbnRpZmllclxuICAvLyBjb25zb2xlLmxvZyhjdXJyZW50Q2F0ZWdvcnkpXG4gIC8vIFxuICAvLyBjb25zb2xlLmxvZyhgSSBhbSBpbiBpbmRleCAke0pTT04uc3RyaW5naWZ5KGNhdGVnb3J5U3RhdHVzKX1gKVxuICAvLyBjb25zb2xlLmxvZyhgdGhpcyBpcyB0ZXN0aW5nIGNhdGVnb3J5ICR7SlNPTi5zdHJpbmdpZnkodGVzdGluZ0NhdGVnb3J5KX1gKVxuICBsZXQgY2F0ZWdvcnlBcnJheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhdGVnb3J5LWNvbnRhaW5lcicpXG4gIGNvbnNvbGUubG9nKGNhdGVnb3J5QXJyYXkpXG5cbiAgZm9yIChsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcnlBcnJheSl7XG4gICAgY2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnSU0gQ0xJQ0tFRCcpXG4gICAgICB0YXNrRGVsZXRlci5kZWxldGVUYXNrRG9tKCk7XG4gICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeS5pZClcbiAgICAgIGZvcihsZXQgb2JqZWN0IG9mIGN1cnJlbnRDYXRlZ29yaWVzKXtcbiAgICAgICAgaWYob2JqZWN0LmlkZW50aWZpZXIgPT09IGNhdGVnb3J5LmlkKXtcbiAgICAgICAgICBjb25zb2xlLmxvZyhvYmplY3QpXG4gICAgICAgICAgZm9yKGxldCB0YXNrIG9mIG9iamVjdC50YXNrTGlzdCl7XG4gICAgICAgICAgICB0YXNrRGVsZXRlci51cGRhdGVUYXNrRG9tKHRhc2spXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgXG4gIGNvbnNvbGUubG9nKGNhdGVnb3J5U3RhdHVzLmdldE5hbWUoKSlcbiAgY29uc29sZS5sb2coY3VycmVudENhdGVnb3JpZXMpXG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuXG5cbnRhc2tGb3JtLm9uc3VibWl0ID0gZnVuY3Rpb24oZSkge1xuICBjb25zb2xlLmxvZygncGluZ2FzJylcbiAgZm9yKGxldCBjYXRlZ29yeSBvZiBjdXJyZW50Q2F0ZWdvcmllcyl7XG4gICAgaWYoY2F0ZWdvcnkuaWRlbnRpZmllciA9PT0gY2F0ZWdvcnlTdGF0dXMuZ2V0TmFtZSgpKXtcbiAgICAgIGxldCBuZXdUYXNrT2JqZWN0ID0gbmV3IFRhc2tcbiAgICAgIGxldCB0YXNrID0gbmV3VGFza09iamVjdC5jcmVhdGVOZXdUYXNrKClcbiAgICAgIGNhdGVnb3J5LmFkZFRhc2sodGFzaylcbiAgICAgIGxldCB1cGRhdGVUYXNrID0gbmV3IFBvc3RDYXRlZ29yeTtcbiAgICAgIHVwZGF0ZVRhc2sudXBkYXRlVGFza0RvbSh0YXNrKVxuICAgICAgY29uc29sZS5sb2codGFza1tcInRhc2stbmFtZVwiXSlcbiAgICB9XG5cbiAgfVxuICAvLyBpZGVhOiB3aGVuIHRhc2sgaXMgY3JlYXRlZCwgaXQgYWxzbyBnaXZlcyB0aGUgbmFtZSBvZiB0aGUgb2JqZWN0IHRoYXQgaXQgaXMgY3VycmVudGx5IGJlaW5nIGNyZWF0ZWQgdG9cblxuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==