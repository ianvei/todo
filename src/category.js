import PostCategory from "./dom"

export default class Category{
    constructor(categoryRoot){
        this.categoryRoot = categoryRoot
        this.taskList = []
        
    }

    pushTask(task){
        this.taskList.push(task)
        console.log(this.taskList)
    }

    createNewCategory(){
        let formData = new FormData(document.querySelector('#new-category'))
        let newCategory = {}
        for (let [key, value] of formData){
            newCategory[key] = value
          } 
        return newCategory;
    }
    
    
}