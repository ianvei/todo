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
<<<<<<< HEAD
=======
        // return this.taskList
>>>>>>> main
    }

    pushTask(task){
        this.taskList.push(task)
<<<<<<< HEAD
=======
        // console.log(this.taskList)
>>>>>>> main
    }

    createNewCategory(){
        let formData = new FormData(document.querySelector('#new-category'))
        let newCategory = {}
        for (let [key, value] of formData){
<<<<<<< HEAD
            newCategory["taskList"] = []
            newCategory[key] = value
            newCategory['identifier'] = newCategory.category + Math.floor(Math.random()*(999-100+1)+100)
            const addTask = function(task){
                newCategory["taskList"].push(task)
            }
            newCategory.addTask = addTask
=======
            this.key = value
            this["identifier"] = newCategory.category + Math.floor(Math.random()*(999-100+1)+100)
            // newCategory[key] = value
            // newCategory['identifier'] = newCategory.category + Math.floor(Math.random()*(999-100+1)+100)
            
>>>>>>> main
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
<<<<<<< HEAD
        
        newCategoryDiv.setAttribute('id', `${category.identifier}`)
        
=======
        let categoryDeleteImg = document.createElement('img')
        newCategoryDiv.setAttribute('id', `${category.identifier}`)
        categoryDeleteImg.classList.add('delete-category')
>>>>>>> main
        newCategoryDiv.addEventListener('click', function(){
            console.log(`I am ${category.identifier}`)
            category["current"] = true
            categoryStatus.setName(category.identifier)
<<<<<<< HEAD

            console.log(categoryStatus)
            
           
        })

        let deleteCategory = document.createElement('span')
        deleteCategory.classList.add('material-symbols-outlined')
        deleteCategory.classList.add(`categoryDelete`)
        deleteCategory.setAttribute('id', `${category.identifier}`)
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
        deleteTask.setAttribute('id', `${task.identifier}`)
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

=======
            console.log(categoryStatus)
           
        })
        newCategoryText.textContent = category.category
        newCategoryDiv.appendChild(newCategoryText)
        newCategoryDiv.appendChild(categoryDeleteImg)
        categoryRoot.appendChild(newCategoryDiv)
        
>>>>>>> main
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
<<<<<<< HEAD
            newTask['identifier'] = newTask['task-name'] + Math.floor(Math.random()*(999-100+1)+100)
=======
>>>>>>> main
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
<<<<<<< HEAD
let taskDeleter = new _dom__WEBPACK_IMPORTED_MODULE_2__["default"]
categoryStatus.setName('default')


let addTaskListeners = function(){
  let todoNodeArray = document.querySelectorAll('.todo-item')
  console.log(todoNodeArray)
  for (let todo of todoNodeArray){
    let todoDelete = todo.querySelector('span')
    todoDelete.addEventListener('click', () => {
      console.log('hello')
      // if(todoDelete.id === todo.id){ //THIS
        todo.remove()
        for(let category of currentCategories){
          // console.log(category)
          for(let task of category.taskList){
            if(task.identifier === todo.id){
              console.log(category)
              let index = category.taskList.indexOf(task)
              category.taskList.splice(index, 1)
            }
          }
        }
        console.log(`I am ${todo.id}`)
      // } //THIS
      // console.log(todoDelete)
    })
    
  }
}




// click events
categoryForm.onsubmit = function(e) {
  let newCategory = testCategory.createNewCategory()
  let updateCategory = new _dom__WEBPACK_IMPORTED_MODULE_2__["default"]()
  updateCategory.updateCategoryDom(newCategory, categoryStatus);
  currentCategories.push(newCategory)

  let categoryArray = document.getElementsByClassName('category-container')
  
  for (let category of categoryArray){
    let categoryP = category.querySelector('p')
    categoryP.addEventListener('click', () => {
      console.log('IM CLICKED')
      taskDeleter.deleteTaskDom();
      // addTaskListeners();
      console.log(category.id)
      for(let object of currentCategories){
        if(object.identifier === category.id){
          for(let task of object.taskList){
            taskDeleter.updateTaskDom(task)
            addTaskListeners();
          }
        }
      }
    })

    let categoryDeleteArray = document.querySelectorAll('.category-container > span')
    for (let span of categoryDeleteArray){
      span.addEventListener('click', () => {
        if(category.id === span.id){
          category.remove();
        } 
      })
    }
  }
=======
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
>>>>>>> main
  e.preventDefault();
}



<<<<<<< HEAD

// THE BIG ISSUE FOR THIS IS THAT THE DELETING LOGIC IS ONLY ADDED TO THE DELETE BUTTONS WHEN A FORM IS SUBMITTED, AND FOR SOME REASON IT DOESN'T STAY?
=======
>>>>>>> main
taskForm.onsubmit = function(e) {
  console.log('pingas')
  for(let category of currentCategories){
    if(category.identifier === categoryStatus.getName()){
<<<<<<< HEAD
      let newTaskObject = new _task__WEBPACK_IMPORTED_MODULE_3__["default"]
      let task = newTaskObject.createNewTask()
      category.addTask(task)
      let updateTask = new _dom__WEBPACK_IMPORTED_MODULE_2__["default"];
      updateTask.updateTaskDom(task)
      console.log(task["task-name"])
    }
    // let taskDeleteArray = document.querySelectorAll('.todo-item > span')
    
    // console.log(taskDeleteArray)
    
    
  }

  addTaskListeners()
  // for (let task of taskDeleteArray){
  //   console.log(task)
  //   task.addEventListener('click', () => {
  //     if(category.id === task.id){
  //       console.log(`removing  ${task.id}`)
  //       // category.remove();
  //     } 
  //   })
  // }

  
=======
      // category.pushTask('test')
      console.log(category)
    }

  }
  // idea: when task is created, it also gives the name of the object that it is currently being created to

>>>>>>> main
  e.preventDefault();
}


})();

/******/ })()
;
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3RvZG8vLi9zcmMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jdXJyZW50Y2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3N0Q2F0ZWdvcnkgZnJvbSBcIi4vZG9tXCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeXtcbiAgICBjb25zdHJ1Y3RvcihjYXRlZ29yeVJvb3Qpe1xuICAgICAgICB0aGlzLmNhdGVnb3J5Um9vdCA9IGNhdGVnb3J5Um9vdFxuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW11cbiAgICB9XG5cbiAgICBwdXNoVGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spXG4gICAgfVxuXG4gICAgY3JlYXRlTmV3Q2F0ZWdvcnkoKXtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctY2F0ZWdvcnknKSlcbiAgICAgICAgbGV0IG5ld0NhdGVnb3J5ID0ge31cbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGZvcm1EYXRhKXtcbiAgICAgICAgICAgIG5ld0NhdGVnb3J5W1widGFza0xpc3RcIl0gPSBbXVxuICAgICAgICAgICAgbmV3Q2F0ZWdvcnlba2V5XSA9IHZhbHVlXG4gICAgICAgICAgICBuZXdDYXRlZ29yeVsnaWRlbnRpZmllciddID0gbmV3Q2F0ZWdvcnkuY2F0ZWdvcnkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDk5OS0xMDArMSkrMTAwKVxuICAgICAgICAgICAgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uKHRhc2spe1xuICAgICAgICAgICAgICAgIG5ld0NhdGVnb3J5W1widGFza0xpc3RcIl0ucHVzaCh0YXNrKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Q2F0ZWdvcnkuYWRkVGFzayA9IGFkZFRhc2tcbiAgICAgICAgICB9IFxuICAgICAgICByZXR1cm4gbmV3Q2F0ZWdvcnk7XG4gICAgfVxuICAgIFxuICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVudENhdGVnb3J5e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLnNldE5hbWUobmFtZSk7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKGNhdGVnb3J5TmFtZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IGNhdGVnb3J5TmFtZVxuICAgIH1cbn0iLCJcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc3RDYXRlZ29yeXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAvLyB0aGlzLmNhdGVnb3J5Um9vdCA9IGNhdGVnb3J5Um9vdFxuICAgIH1cblxuICAgIHVwZGF0ZUNhdGVnb3J5RG9tKGNhdGVnb3J5LCBjYXRlZ29yeVN0YXR1cyl7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5LmNhdGVnb3J5KVxuICAgICAgICBsZXQgY2F0ZWdvcnlSb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWNhcmQnKVxuICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeVJvb3QpXG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNhdGVnb3J5Um9vdClcbiAgICAgICAgbGV0IG5ld0NhdGVnb3J5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmV3Q2F0ZWdvcnlEaXYuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnktY29udGFpbmVyJylcbiAgICAgICAgbGV0IG5ld0NhdGVnb3J5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBcbiAgICAgICAgbmV3Q2F0ZWdvcnlEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke2NhdGVnb3J5LmlkZW50aWZpZXJ9YClcbiAgICAgICAgXG4gICAgICAgIG5ld0NhdGVnb3J5RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBJIGFtICR7Y2F0ZWdvcnkuaWRlbnRpZmllcn1gKVxuICAgICAgICAgICAgY2F0ZWdvcnlbXCJjdXJyZW50XCJdID0gdHJ1ZVxuICAgICAgICAgICAgY2F0ZWdvcnlTdGF0dXMuc2V0TmFtZShjYXRlZ29yeS5pZGVudGlmaWVyKVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeVN0YXR1cylcbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgZGVsZXRlQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgICAgICAgZGVsZXRlQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpXG4gICAgICAgIGRlbGV0ZUNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoYGNhdGVnb3J5RGVsZXRlYClcbiAgICAgICAgZGVsZXRlQ2F0ZWdvcnkuc2V0QXR0cmlidXRlKCdpZCcsIGAke2NhdGVnb3J5LmlkZW50aWZpZXJ9YClcbiAgICAgICAgZGVsZXRlQ2F0ZWdvcnkuaW5uZXJUZXh0ID0gJ2RlbGV0ZSdcblxuICAgICAgICBuZXdDYXRlZ29yeVRleHQudGV4dENvbnRlbnQgPSBjYXRlZ29yeS5jYXRlZ29yeVxuICAgICAgICBuZXdDYXRlZ29yeURpdi5hcHBlbmRDaGlsZChuZXdDYXRlZ29yeVRleHQpXG4gICAgICAgIG5ld0NhdGVnb3J5RGl2LmFwcGVuZENoaWxkKGRlbGV0ZUNhdGVnb3J5KVxuICAgICAgICBjYXRlZ29yeVJvb3QuYXBwZW5kQ2hpbGQobmV3Q2F0ZWdvcnlEaXYpICAgXG4gICAgfVxuXG4gICAgdXBkYXRlVGFza0RvbSh0YXNrKXtcbiAgICAgICAgY29uc29sZS5sb2codGFzaylcbiAgICAgICAgbGV0IHRhc2tSb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8taXRlbS1jb250YWluZXInKVxuICAgICAgICBsZXQgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJylcbiAgICAgICAgbmV3VGFza0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFzay5pZGVudGlmaWVyfWApXG5cbiAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpXG4gICAgICAgIG5hbWUuaW5uZXJUZXh0ID0gdGFza1sndGFzay1uYW1lJ11cblxuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpXG4gICAgICAgIGRhdGUuaW5uZXJUZXh0ID0gdGFza1sndGFzay1kYXRlJ11cblxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpXG4gICAgICAgIHByaW9yaXR5LmlubmVyVGV4dCA9IHRhc2tbJ3Rhc2stcHJpb3JpdHknXVxuXG4gICAgICAgIFxuXG4gICAgICAgIGxldCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpXG4gICAgICAgIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZCgndGFza0RlbGV0ZScpXG4gICAgICAgIGRlbGV0ZVRhc2suc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2suaWRlbnRpZmllcn1gKVxuICAgICAgICBkZWxldGVUYXNrLmlubmVyVGV4dCA9ICdkZWxldGUnXG5cbiAgICAgICAgbmV3VGFza0Rpdi5hcHBlbmRDaGlsZChuYW1lKVxuICAgICAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKGRhdGUpXG4gICAgICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpXG4gICAgICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzaylcbiAgICAgICAgXG5cblxuICAgICAgICB0YXNrUm9vdC5hcHBlbmRDaGlsZChuZXdUYXNrRGl2KVxuICAgIH1cblxuICAgIGRlbGV0ZVRhc2tEb20oKXtcbiAgICAgICAgbGV0IHRhc2tSb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8taXRlbS1jb250YWluZXInKVxuICAgICAgICB0YXNrUm9vdC5yZW1vdmUoKVxuICAgICAgICBsZXQgbmV3VGFza1Jvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuZXdUYXNrUm9vdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tY29udGFpbmVyJylcbiAgICAgICAgbGV0IGZvcm1Sb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWNvbnRhaW5lcicpXG4gICAgICAgIGZvcm1Sb290LmFwcGVuZENoaWxkKG5ld1Rhc2tSb290KVxuICAgIH1cblxuICAgIGRlbGV0ZU9uZVRhc2soKXtcblxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNre1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIC8vIGdldCBuYW1lIG9mIHRoZSBjYXRlZ29yeSB0aGF0IHRoZSB0YXNrIGlzIHN1cHBvc2VkIHRvIGJlIGluXG4gICAgfVxuXG4gICAgY3JlYXRlTmV3VGFzaygpe1xuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tc3VibWl0JykpXG4gICAgICAgIGxldCBuZXdUYXNrID0ge31cbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGZvcm1EYXRhKXtcbiAgICAgICAgICAgIG5ld1Rhc2tba2V5XSA9IHZhbHVlXG4gICAgICAgICAgICBuZXdUYXNrWydpZGVudGlmaWVyJ10gPSBuZXdUYXNrWyd0YXNrLW5hbWUnXSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooOTk5LTEwMCsxKSsxMDApXG4gICAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2s7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL2NhdGVnb3J5XCJcbmltcG9ydCBDdXJyZW50Q2F0ZWdvcnkgZnJvbSBcIi4vY3VycmVudGNhdGVnb3J5XCJcbmltcG9ydCBQb3N0Q2F0ZWdvcnkgZnJvbSBcIi4vZG9tXCJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIlxuXG5cbmxldCBjYXRlZ29yeUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWNhdGVnb3J5JylcbmxldCBjYXRlZ29yeVJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktY2FyZCcpXG4vLyBsZXQgdGFza1Jvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1pdGVtLWNvbnRhaW5lcicpXG5sZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1zdWJtaXQnKVxubGV0IGN1cnJlbnRDYXRlZ29yeSA9ICcnXG5cbmxldCBjdXJyZW50Q2F0ZWdvcmllcyA9IFtdXG5cbmxldCB0ZXN0Q2F0ZWdvcnkgPSBuZXcgQ2F0ZWdvcnkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1jYXRlZ29yeScpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktY2FyZCcpKVxubGV0IGNhdGVnb3J5U3RhdHVzID0gbmV3IEN1cnJlbnRDYXRlZ29yeVxubGV0IHRhc2tEZWxldGVyID0gbmV3IFBvc3RDYXRlZ29yeVxuY2F0ZWdvcnlTdGF0dXMuc2V0TmFtZSgnZGVmYXVsdCcpXG5cblxubGV0IGFkZFRhc2tMaXN0ZW5lcnMgPSBmdW5jdGlvbigpe1xuICBsZXQgdG9kb05vZGVBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWl0ZW0nKVxuICBjb25zb2xlLmxvZyh0b2RvTm9kZUFycmF5KVxuICBmb3IgKGxldCB0b2RvIG9mIHRvZG9Ob2RlQXJyYXkpe1xuICAgIGxldCB0b2RvRGVsZXRlID0gdG9kby5xdWVyeVNlbGVjdG9yKCdzcGFuJylcbiAgICB0b2RvRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2hlbGxvJylcbiAgICAgIC8vIGlmKHRvZG9EZWxldGUuaWQgPT09IHRvZG8uaWQpeyAvL1RISVNcbiAgICAgICAgdG9kby5yZW1vdmUoKVxuICAgICAgICBmb3IobGV0IGNhdGVnb3J5IG9mIGN1cnJlbnRDYXRlZ29yaWVzKXtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjYXRlZ29yeSlcbiAgICAgICAgICBmb3IobGV0IHRhc2sgb2YgY2F0ZWdvcnkudGFza0xpc3Qpe1xuICAgICAgICAgICAgaWYodGFzay5pZGVudGlmaWVyID09PSB0b2RvLmlkKXtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkpXG4gICAgICAgICAgICAgIGxldCBpbmRleCA9IGNhdGVnb3J5LnRhc2tMaXN0LmluZGV4T2YodGFzaylcbiAgICAgICAgICAgICAgY2F0ZWdvcnkudGFza0xpc3Quc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgSSBhbSAke3RvZG8uaWR9YClcbiAgICAgIC8vIH0gLy9USElTXG4gICAgICAvLyBjb25zb2xlLmxvZyh0b2RvRGVsZXRlKVxuICAgIH0pXG4gICAgXG4gIH1cbn1cblxuXG5cblxuLy8gY2xpY2sgZXZlbnRzXG5jYXRlZ29yeUZvcm0ub25zdWJtaXQgPSBmdW5jdGlvbihlKSB7XG4gIGxldCBuZXdDYXRlZ29yeSA9IHRlc3RDYXRlZ29yeS5jcmVhdGVOZXdDYXRlZ29yeSgpXG4gIGxldCB1cGRhdGVDYXRlZ29yeSA9IG5ldyBQb3N0Q2F0ZWdvcnkoKVxuICB1cGRhdGVDYXRlZ29yeS51cGRhdGVDYXRlZ29yeURvbShuZXdDYXRlZ29yeSwgY2F0ZWdvcnlTdGF0dXMpO1xuICBjdXJyZW50Q2F0ZWdvcmllcy5wdXNoKG5ld0NhdGVnb3J5KVxuXG4gIGxldCBjYXRlZ29yeUFycmF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2F0ZWdvcnktY29udGFpbmVyJylcbiAgXG4gIGZvciAobGV0IGNhdGVnb3J5IG9mIGNhdGVnb3J5QXJyYXkpe1xuICAgIGxldCBjYXRlZ29yeVAgPSBjYXRlZ29yeS5xdWVyeVNlbGVjdG9yKCdwJylcbiAgICBjYXRlZ29yeVAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnSU0gQ0xJQ0tFRCcpXG4gICAgICB0YXNrRGVsZXRlci5kZWxldGVUYXNrRG9tKCk7XG4gICAgICAvLyBhZGRUYXNrTGlzdGVuZXJzKCk7XG4gICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeS5pZClcbiAgICAgIGZvcihsZXQgb2JqZWN0IG9mIGN1cnJlbnRDYXRlZ29yaWVzKXtcbiAgICAgICAgaWYob2JqZWN0LmlkZW50aWZpZXIgPT09IGNhdGVnb3J5LmlkKXtcbiAgICAgICAgICBmb3IobGV0IHRhc2sgb2Ygb2JqZWN0LnRhc2tMaXN0KXtcbiAgICAgICAgICAgIHRhc2tEZWxldGVyLnVwZGF0ZVRhc2tEb20odGFzaylcbiAgICAgICAgICAgIGFkZFRhc2tMaXN0ZW5lcnMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbGV0IGNhdGVnb3J5RGVsZXRlQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0ZWdvcnktY29udGFpbmVyID4gc3BhbicpXG4gICAgZm9yIChsZXQgc3BhbiBvZiBjYXRlZ29yeURlbGV0ZUFycmF5KXtcbiAgICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGNhdGVnb3J5LmlkID09PSBzcGFuLmlkKXtcbiAgICAgICAgICBjYXRlZ29yeS5yZW1vdmUoKTtcbiAgICAgICAgfSBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuXG5cblxuLy8gVEhFIEJJRyBJU1NVRSBGT1IgVEhJUyBJUyBUSEFUIFRIRSBERUxFVElORyBMT0dJQyBJUyBPTkxZIEFEREVEIFRPIFRIRSBERUxFVEUgQlVUVE9OUyBXSEVOIEEgRk9STSBJUyBTVUJNSVRURUQsIEFORCBGT1IgU09NRSBSRUFTT04gSVQgRE9FU04nVCBTVEFZP1xudGFza0Zvcm0ub25zdWJtaXQgPSBmdW5jdGlvbihlKSB7XG4gIGNvbnNvbGUubG9nKCdwaW5nYXMnKVxuICBmb3IobGV0IGNhdGVnb3J5IG9mIGN1cnJlbnRDYXRlZ29yaWVzKXtcbiAgICBpZihjYXRlZ29yeS5pZGVudGlmaWVyID09PSBjYXRlZ29yeVN0YXR1cy5nZXROYW1lKCkpe1xuICAgICAgbGV0IG5ld1Rhc2tPYmplY3QgPSBuZXcgVGFza1xuICAgICAgbGV0IHRhc2sgPSBuZXdUYXNrT2JqZWN0LmNyZWF0ZU5ld1Rhc2soKVxuICAgICAgY2F0ZWdvcnkuYWRkVGFzayh0YXNrKVxuICAgICAgbGV0IHVwZGF0ZVRhc2sgPSBuZXcgUG9zdENhdGVnb3J5O1xuICAgICAgdXBkYXRlVGFzay51cGRhdGVUYXNrRG9tKHRhc2spXG4gICAgICBjb25zb2xlLmxvZyh0YXNrW1widGFzay1uYW1lXCJdKVxuICAgIH1cbiAgICAvLyBsZXQgdGFza0RlbGV0ZUFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8taXRlbSA+IHNwYW4nKVxuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKHRhc2tEZWxldGVBcnJheSlcbiAgICBcbiAgICBcbiAgfVxuXG4gIGFkZFRhc2tMaXN0ZW5lcnMoKVxuICAvLyBmb3IgKGxldCB0YXNrIG9mIHRhc2tEZWxldGVBcnJheSl7XG4gIC8vICAgY29uc29sZS5sb2codGFzaylcbiAgLy8gICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyAgICAgaWYoY2F0ZWdvcnkuaWQgPT09IHRhc2suaWQpe1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhgcmVtb3ZpbmcgICR7dGFzay5pZH1gKVxuICAvLyAgICAgICAvLyBjYXRlZ29yeS5yZW1vdmUoKTtcbiAgLy8gICAgIH0gXG4gIC8vICAgfSlcbiAgLy8gfVxuXG4gIFxuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7OztBQUdqQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdCZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLG9CQUFvQjtBQUNqRTtBQUNBO0FBQ0EsZ0NBQWdDLG9CQUFvQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQ2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ2M7QUFDZjtBQUNQOzs7QUFHekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx1QkFBdUIsaURBQVE7QUFDL0IseUJBQXlCLHdEQUFlO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQVE7QUFDcEMsMkJBQTJCLDRDQUFZO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywrQkFBK0I7QUFDakUsMENBQTBDLGdDQUFnQztBQUMxRTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9jdXJyZW50Y2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3N0Q2F0ZWdvcnkgZnJvbSBcIi4vZG9tXCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeXtcbiAgICBjb25zdHJ1Y3RvcihjYXRlZ29yeVJvb3Qpe1xuICAgICAgICB0aGlzLmNhdGVnb3J5Um9vdCA9IGNhdGVnb3J5Um9vdFxuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW11cbiAgICAgICAgLy8gcmV0dXJuIHRoaXMudGFza0xpc3RcbiAgICB9XG5cbiAgICBwdXNoVGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKHRhc2spXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGFza0xpc3QpXG4gICAgfVxuXG4gICAgY3JlYXRlTmV3Q2F0ZWdvcnkoKXtcbiAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctY2F0ZWdvcnknKSlcbiAgICAgICAgbGV0IG5ld0NhdGVnb3J5ID0ge31cbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGZvcm1EYXRhKXtcbiAgICAgICAgICAgIHRoaXMua2V5ID0gdmFsdWVcbiAgICAgICAgICAgIHRoaXNbXCJpZGVudGlmaWVyXCJdID0gbmV3Q2F0ZWdvcnkuY2F0ZWdvcnkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDk5OS0xMDArMSkrMTAwKVxuICAgICAgICAgICAgLy8gbmV3Q2F0ZWdvcnlba2V5XSA9IHZhbHVlXG4gICAgICAgICAgICAvLyBuZXdDYXRlZ29yeVsnaWRlbnRpZmllciddID0gbmV3Q2F0ZWdvcnkuY2F0ZWdvcnkgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDk5OS0xMDArMSkrMTAwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgfSBcbiAgICAgICAgcmV0dXJuIG5ld0NhdGVnb3J5O1xuICAgIH1cbiAgICBcbiAgIFxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbnRDYXRlZ29yeXtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5zZXROYW1lKG5hbWUpO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShjYXRlZ29yeU5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBjYXRlZ29yeU5hbWVcbiAgICB9XG59IiwiXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3N0Q2F0ZWdvcnl7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8gdGhpcy5jYXRlZ29yeVJvb3QgPSBjYXRlZ29yeVJvb3RcbiAgICB9XG5cbiAgICB1cGRhdGVDYXRlZ29yeURvbShjYXRlZ29yeSwgY2F0ZWdvcnlTdGF0dXMpe1xuICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeS5jYXRlZ29yeSlcbiAgICAgICAgbGV0IGNhdGVnb3J5Um9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1jYXJkJylcbiAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnlSb290KVxuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jYXRlZ29yeVJvb3QpXG4gICAgICAgIGxldCBuZXdDYXRlZ29yeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5ld0NhdGVnb3J5RGl2LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5LWNvbnRhaW5lcicpXG4gICAgICAgIGxldCBuZXdDYXRlZ29yeVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgbGV0IGNhdGVnb3J5RGVsZXRlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgbmV3Q2F0ZWdvcnlEaXYuc2V0QXR0cmlidXRlKCdpZCcsIGAke2NhdGVnb3J5LmlkZW50aWZpZXJ9YClcbiAgICAgICAgY2F0ZWdvcnlEZWxldGVJbWcuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWNhdGVnb3J5JylcbiAgICAgICAgbmV3Q2F0ZWdvcnlEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEkgYW0gJHtjYXRlZ29yeS5pZGVudGlmaWVyfWApXG4gICAgICAgICAgICBjYXRlZ29yeVtcImN1cnJlbnRcIl0gPSB0cnVlXG4gICAgICAgICAgICBjYXRlZ29yeVN0YXR1cy5zZXROYW1lKGNhdGVnb3J5LmlkZW50aWZpZXIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeVN0YXR1cylcbiAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIG5ld0NhdGVnb3J5VGV4dC50ZXh0Q29udGVudCA9IGNhdGVnb3J5LmNhdGVnb3J5XG4gICAgICAgIG5ld0NhdGVnb3J5RGl2LmFwcGVuZENoaWxkKG5ld0NhdGVnb3J5VGV4dClcbiAgICAgICAgbmV3Q2F0ZWdvcnlEaXYuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlEZWxldGVJbWcpXG4gICAgICAgIGNhdGVnb3J5Um9vdC5hcHBlbmRDaGlsZChuZXdDYXRlZ29yeURpdilcbiAgICAgICAgXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2t7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8gZ2V0IG5hbWUgb2YgdGhlIGNhdGVnb3J5IHRoYXQgdGhlIHRhc2sgaXMgc3VwcG9zZWQgdG8gYmUgaW5cbiAgICB9XG5cbiAgICBjcmVhdGVOZXdUYXNrKCl7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1zdWJtaXQnKSlcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSB7fVxuICAgICAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgZm9ybURhdGEpe1xuICAgICAgICAgICAgbmV3VGFza1trZXldID0gdmFsdWVcbiAgICAgICAgICB9IFxuICAgICAgICByZXR1cm4gbmV3VGFzaztcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vY2F0ZWdvcnlcIlxuaW1wb3J0IEN1cnJlbnRDYXRlZ29yeSBmcm9tIFwiLi9jdXJyZW50Y2F0ZWdvcnlcIlxuaW1wb3J0IFBvc3RDYXRlZ29yeSBmcm9tIFwiLi9kb21cIlxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiXG5cblxubGV0IGNhdGVnb3J5Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctY2F0ZWdvcnknKVxubGV0IGNhdGVnb3J5Um9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1jYXJkJylcbi8vIGxldCB0YXNrUm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWl0ZW0tY29udGFpbmVyJylcbmxldCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXN1Ym1pdCcpXG5sZXQgY3VycmVudENhdGVnb3J5ID0gJydcblxubGV0IGN1cnJlbnRDYXRlZ29yaWVzID0gW11cblxubGV0IHRlc3RDYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWNhdGVnb3J5JyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS1jYXJkJykpXG5sZXQgY2F0ZWdvcnlTdGF0dXMgPSBuZXcgQ3VycmVudENhdGVnb3J5XG5jYXRlZ29yeVN0YXR1cy5zZXROYW1lKCdkZWZhdWx0JylcblxuY2F0ZWdvcnlGb3JtLm9uc3VibWl0ID0gZnVuY3Rpb24oZSkge1xuICBsZXQgbmV3Q2F0ZWdvcnkgPSB0ZXN0Q2F0ZWdvcnkuY3JlYXRlTmV3Q2F0ZWdvcnkoKVxuICBsZXQgdGVzdGluZ0NhdGVnb3J5ID0gbmV3IENhdGVnb3J5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctY2F0ZWdvcnknKSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LWNhcmQnKSlcbiAgbGV0IHVwZGF0ZUNhdGVnb3J5ID0gbmV3IFBvc3RDYXRlZ29yeSgpXG4gIC8vIGNvbnNvbGUubG9nKHVwZGF0ZUNhdGVnb3J5KVxuICB1cGRhdGVDYXRlZ29yeS51cGRhdGVDYXRlZ29yeURvbShuZXdDYXRlZ29yeSwgY2F0ZWdvcnlTdGF0dXMpO1xuICBjdXJyZW50Q2F0ZWdvcmllcy5wdXNoKG5ld0NhdGVnb3J5KVxuICAvLyBjb25zb2xlLmxvZyhjdXJyZW50Q2F0ZWdvcmllcylcbiAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY3VycmVudENhdGVnb3JpZXMpKVxuICAvLyBkZWxldGUsIHRoaXMgd2lsbCBnbyBpbiB0aGUgY2F0ZWdvcnkgc2VsZWN0aW9uIGxvZ2ljXG4gIC8vIGN1cnJlbnRDYXRlZ29yeSA9IG5ld0NhdGVnb3J5LmlkZW50aWZpZXJcbiAgLy8gY29uc29sZS5sb2coY3VycmVudENhdGVnb3J5KVxuICAvLyBcbiAgLy8gY29uc29sZS5sb2coYEkgYW0gaW4gaW5kZXggJHtKU09OLnN0cmluZ2lmeShjYXRlZ29yeVN0YXR1cyl9YClcbiAgY29uc29sZS5sb2coYHRoaXMgaXMgdGVzdGluZyBjYXRlZ29yeSAke0pTT04uc3RyaW5naWZ5KHRlc3RpbmdDYXRlZ29yeSl9YClcbiAgY29uc29sZS5sb2coY2F0ZWdvcnlTdGF0dXMuZ2V0TmFtZSgpKVxuICBjb25zb2xlLmxvZyhjdXJyZW50Q2F0ZWdvcmllcylcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5cblxudGFza0Zvcm0ub25zdWJtaXQgPSBmdW5jdGlvbihlKSB7XG4gIGNvbnNvbGUubG9nKCdwaW5nYXMnKVxuICBmb3IobGV0IGNhdGVnb3J5IG9mIGN1cnJlbnRDYXRlZ29yaWVzKXtcbiAgICBpZihjYXRlZ29yeS5pZGVudGlmaWVyID09PSBjYXRlZ29yeVN0YXR1cy5nZXROYW1lKCkpe1xuICAgICAgLy8gY2F0ZWdvcnkucHVzaFRhc2soJ3Rlc3QnKVxuICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnkpXG4gICAgfVxuXG4gIH1cbiAgLy8gaWRlYTogd2hlbiB0YXNrIGlzIGNyZWF0ZWQsIGl0IGFsc28gZ2l2ZXMgdGhlIG5hbWUgb2YgdGhlIG9iamVjdCB0aGF0IGl0IGlzIGN1cnJlbnRseSBiZWluZyBjcmVhdGVkIHRvXG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> main
