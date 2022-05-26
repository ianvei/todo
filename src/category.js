import PostCategory from "./dom"


export default class Category{
    constructor(categoryRoot){
        this.categoryRoot = categoryRoot
        this.taskList = []
    }

    pushTask(task){
        this.taskList.push(task)
    }

    createNewCategory(){
        let formData = new FormData(document.querySelector('#new-category'))
        let newCategory = {}
        for (let [key, value] of formData){
            newCategory["taskList"] = []
            newCategory[key] = value
            newCategory['identifier'] = newCategory.category + Math.floor(Math.random()*(999-100+1)+100)
            const addTask = function(task){
                newCategory["taskList"].push(task)
            }
            newCategory.addTask = addTask
          } 
        return newCategory;
    }
    
   
}