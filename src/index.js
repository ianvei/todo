import Category from "./dom"

let formData = new FormData(document.querySelector('#new-category')) 

document.querySelector(".category-submit").addEventListener("click", 
function(e){

  console.log('clicked')
  
  e.preventDefault();
  return formData = new FormData(document.querySelector('#new-category'))  
})



let categories = new Category

console.log(categories(formData))

console.log('hello')