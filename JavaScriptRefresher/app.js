//  Let & const
// let myName = 'Jay';
// console.log(myName);


// myName = 'Jay Ram';
// console.log(myName);


/* arrow functions */
function printMyName(name) {
    console.log(name)
};
printMyName('Jay');

const myFunc = () => {
    console.log('hello world! ');
}
myFunc();

const printAgainMyName = name => {
    console.log(`hello again ${name}`)
}
printAgainMyName('Jay')

const multiply = number => number * 2
console.log(multiply(2))

/*
    Classes 
*/
class Human {
    constructor(){
        this.gender = 'male'
    }

    printGender() {
        console.log(this.gender)
    }
}


class Person extends Human {
    constructor () {
        super();
        this.name = 'Jay'
    }

    printMyName() {
        console.log(this.name)
    }
}

const person = new Person();
person.printMyName();
person.printGender();
