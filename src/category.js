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
            this.key = value
            this["identifier"] = newCategory.category + Math.floor(Math.random()*(999-100+1)+100)
            // newCategory[key] = value
            // newCategory['identifier'] = newCategory.category + Math.floor(Math.random()*(999-100+1)+100)
            
          } 
        return newCategory;
    }
    
   
}