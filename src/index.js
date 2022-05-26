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
let taskDeleter = new PostCategory
categoryStatus.setName('default')

categoryForm.onsubmit = function(e) {
  let newCategory = testCategory.createNewCategory()
  // let testingCategory = new Category(document.getElementById('new-category'), document.querySelector('.category-card'))
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
      let newTaskObject = new Task
      let task = newTaskObject.createNewTask()
      category.addTask(task)
      let updateTask = new PostCategory;
      updateTask.updateTaskDom(task)
      console.log(task["task-name"])
    }

  }
  // idea: when task is created, it also gives the name of the object that it is currently being created to

  e.preventDefault();
}

