export default class Task{
    constructor(){
        // get name of the category that the task is supposed to be in
    }

    createNewTask(){
        let formData = new FormData(document.querySelector('#todo-submit'))
        let newTask = {}
        for (let [key, value] of formData){
            newTask[key] = value
          } 
        return newTask;
    }
}