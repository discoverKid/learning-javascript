const colors = require ('colors')

class Dog {
    constructor() {}
    woof() {
        console.log("woof!".red)
    }    
}

module.exports = Dog // *this means the above Dog class can be used in other places.