import PostCategory from "./dom"


export default class Category{
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