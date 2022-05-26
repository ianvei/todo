



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
        let categoryDeleteImg = document.createElement('img')
        newCategoryDiv.setAttribute('id', `${category.identifier}`)
        categoryDeleteImg.classList.add('delete-category')
        newCategoryDiv.addEventListener('click', function(){
            console.log(`I am ${category.identifier}`)
            category["current"] = true
            categoryStatus.setName(category.identifier)
            console.log(categoryStatus)
           
        })
        newCategoryText.textContent = category.category
        newCategoryDiv.appendChild(newCategoryText)
        newCategoryDiv.appendChild(categoryDeleteImg)
        categoryRoot.appendChild(newCategoryDiv)
        
    }
}