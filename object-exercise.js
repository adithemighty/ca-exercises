const menu = {
    _courses: {
        _appetizers: [],
        get appetizers() {
            return this._appetizers;
        },
        set appetizers(appetizerIn) {
            this._appetizers.push(appetizerIn)
        },
        _mains: [],
        get mains() {
            return this._mains;
        },
        set mains(mainsIn) {
            this._mains.push(mainsIn)
        },
        _desserts: [],
        get desserts() {
            return this._desserts;
        },
        set desserts(dessertsIn) {
            this._desserts.push(dessertsIn)
        }
    },
    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dish = this.courses[courseName]
        const randomNumber = Math.floor((Math.random() * dish.length))
        return dish[randomNumber]
    },
    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse("appetizers")
        const main = this.getRandomDishFromCourse("mains")
        const dessert = this.getRandomDishFromCourse("desserts")
        const meal = [appetizer.name, main.name, dessert.name]
        const price = [appetizer.price, main.price, dessert.price]
        return `You get ${meal.join(", ")} for ${price.reduce(reducer = (accumulator, currentValue) => accumulator + currentValue)} pesos.`
    }
};

menu.addDishToCourse("appetizers", "Antipasto platter", 8)
menu.addDishToCourse("mains", "Spaghetti Bolognese", 12)
menu.addDishToCourse("desserts", "Tiramisu", 5)
console.log(menu.generateRandomMeal())
