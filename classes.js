class cat{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    meow() {
        console.log('Meow!') //log out what the cat does which is the 'method'
    }
    scratch(numberOfTimes) {
        for(let x = 1; x <= numberOfTimes; x++) {
            console.log('Scratch')
        } // increment the x value above every time the loop runs.
    }
}

const myfirstCat = new cat('Fluffy', 5)
console.log(myfirstCat)
console.log(myfirstCat.name)

console.log(myfirstCat.age)

const mySecondCat = new cat('Ginger', 9)
console.log(mySecondCat.age)

myfirstCat.meow()
mySecondCat.meow()

myfirstCat.scratch(4)