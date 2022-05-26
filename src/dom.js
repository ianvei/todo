



export default class PostCategory{
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

    }
}