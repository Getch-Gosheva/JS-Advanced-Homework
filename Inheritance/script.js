/* 1. Create a constructor function for Person with properties { name, lastName, dateOfBirth, hometown } 
and add functions sayFullName() and age() to the prototype of the Person constructor function*/

function Person({name , lastName , dateOfBirth, hometown}) {
    this.name = name;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.hometown = hometown;
}


Person.prototype.sayFullName = function() {
    return `Full name: ${this.name} ${this.lastName}`;
}


Person.prototype.getAge = function() {
    let date = new Date().getFullYear();
    return `${this.name} ${this.lastName} has ${date - this.dateOfBirth} years.`;
}


let personFirst = new Person({name:'Lidija' , lastName:'Gosheva' , dateOfBirth:1996 , hometown:'Sofija'});
console.log(personFirst);
console.log(personFirst.sayFullName());
console.log(personFirst.getAge());


/* 2. Write a constructor function for Trainer with properties { name, lastName, dateOfBirth, hometown, course, yearsOfTeaching } 
that will have access to the functions from the Person prototype plus a function to its own prototype that will say the number 
of years the trainer has been teaching given course

(bonus) use the Person constructor to create the mutual properties
(bonus) use destructing for the parameters*/


function Trainer({name , lastName , dateOfBirth , hometown , course , yearsOfTeaching}) {
    Person.call(this, {name, lastName, dateOfBirth, hometown});
    this.course = course;
    this.yearsOfTeaching = yearsOfTeaching;
}

Trainer.prototype = Object.create(Person.prototype);

Trainer.prototype.courseYears = function () {
    return `${this.name} ${this.lastName} has been teaching ${this.course} for ${this.yearsOfTeaching} years.`
}


let trainerFirst = new Trainer({name:'Igor', lastName:'Mitkovski', dateOfBirth:1986, hometown:'Bitola', course:'JS Advanced', yearsOfTeaching:2});
console.log(trainerFirst);
console.log(trainerFirst.sayFullName());
console.log(trainerFirst.getAge());
console.log(trainerFirst.courseYears());




/* 3. (bonus) Write a function that can be called on any array and return the sum of all the elements in that array that 
are numbers i.e.

let arr = [1, '3', { num: 7 }, 8, 'FunFunFunction', 10, () => `I'm a number`, 33] 
arr.getSumOfNumbers(...) // output 52*/

let arr = [1, '3', { num: 7 }, 8, 'FunFunFunction', 11, () => `I'm a number`, 33];

Array.prototype.getSum = function () {
    let result = 0;
    for(const el of this){
        if(typeof el === 'number'){
            result += el;
        }
    }
    return result;
}

let result = arr.getSum();
console.log(result);




/* 4. (bonus) Write a function that can be called on any object and return its keys and its values in seperate arrays, 
fillout predefined variables keys and values with the correct array i.e.
let keys = [], values = []
let person = {
    name: 'Martina',
    middleName: 'Luther',
    lastName: 'Queen'
}
person.getKeysAndVals() // with the return result fill the variables acordingly
// expected
keys === ['name', 'middleName', 'lastName']
values === ['Martina', 'Luther', 'Queen']*/

let person = {
    name: 'Martina',
    middleName: 'Luther',
    lastName: 'Queen',
    countries: {
        dfghjk: '1',
        hfdjr: '2',
    }
}

function getArrays(obj){
    
}

console.log(getArrays(person))

//let [objKeys , objVals] = getArrays(person);

// console.log(objKeys)
// console.log(objVals)