export default class CurrentCategory{
    constructor(name){
        this.setName(name);
    }

    getName() {
        return this.name;
    }

    setName(categoryName){
        this.name = categoryName
    }
}