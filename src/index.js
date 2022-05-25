import Category from "./category"
import CurrentCategory from "./currentcategory"
import PostCategory from "./dom"
import Task from "./task"


let categoryForm = document.getElementById('new-category')
let categoryRoot = document.querySelector('.category-card')
// let taskRoot = document.querySelector('.todo-item-container')
let taskForm = document.getElementById('todo-submit')
let currentCategory = ''

let currentCategories = []

let testCategory = new Category(document.getElementById('new-category'), document.querySelector('.category-card'))
let categoryStatus = new CurrentCategory
categoryStatus.setName('default')

categoryForm.onsubmit = function(e) {
  let newCategory = testCategory.createNewCategory()
  let testingCategory = new Category(document.getElementById('new-category'), document.querySelector('.category-card'))
  let updateCategory = new PostCategory()
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

