import Category from "./category"
import PostCategory from "./dom"
import Task from "./task"


let categoryForm = document.getElementById('new-category')
let categoryRoot = document.querySelector('.category-card')
// let taskRoot = document.querySelector('.todo-item-container')
let taskForm = document.getElementById('todo-submit')



let testCategory = new Category(document.getElementById('new-category'), document.querySelector('.category-card'))

categoryForm.onsubmit = function(e) {
  
  let newCategory = testCategory.createNewCategory()

  let updateCategory = new PostCategory()
  // console.log(updateCategory)
  updateCategory.updateCategoryDom(newCategory);

  e.preventDefault();
}

taskForm.onsubmit = function(e) {
  console.log('pingas')
  

  e.preventDefault();
}

