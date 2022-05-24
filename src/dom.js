export default class PostCategory{
    constructor(){
        // this.categoryRoot = categoryRoot
    }

    updateCategoryDom(category){
        console.log(category.category)
        let categoryRoot = document.querySelector('.category-card')
        console.log(categoryRoot)
        
        // console.log(this.categoryRoot)
        let newCategoryDiv = document.createElement('div')
        newCategoryDiv.classList.add('category-container')
        let newCategoryText = document.createElement('p')
        let categoryDeleteImg = document.createElement('img')
        categoryDeleteImg.classList.add('delete-category')

        newCategoryText.textContent = category.category
        newCategoryDiv.appendChild(newCategoryText)
        newCategoryDiv.appendChild(categoryDeleteImg)
        categoryRoot.appendChild(newCategoryDiv)
        
    }
}