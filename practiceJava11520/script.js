// 'use strict';
// {
// let name = 'jacob';//IIFE 
// console.log(name);
// }
// 'use strict';
// {
// let name = 'james';
// console.log(name);
// }
// let jon = 'jon';

// (function(jon) { //indicates an IIFE (), instead of 'use strict'
//     let name = jon;
//     console.log(name);
// })(jon);

// const person = {//OBJECT
//     name: 'jacob',
//     age: 30,
//     heightInInches: 73,
//         sayName:function() {//method
//             console.log(this.name); 
// // }
//         printObject: function() {
//             console.log(this);
//         }
// function printOutName(person) { //this person is the placeholder
//     console.log (person, name);
// }
// printOutName()
// function printProperty(object, prop){ //talking about one of the properties, not a variable
//     console.log(object[property])); //same as saying person1 name
/* 
const myDog = {
    name: 'Simba',
    age: 6,
    weight: 14
}
myDog ['yippy']=volume; //bracket method
myDog.newProperty = ['yippy']; //dot notation method
console.log(myDog);

console.log(myDog.name); */

class Dogs {
    name;
    age;
    weight;
    constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    }
}
const dogsOne = new Dogs('Sammy', 10, 11);
const dogsTwo = new Dogs('Boulder', 1, 47);
const dogsThree = new Dogs('Simba', 5, 15);
const dogsFour = new Dogs('Pablo', 3, 20);
const dogsFive = new Dogs('Furby', 8, 11);

const dogArray = [dogsOne, dogsTwo, dogsThree, dogsFour, dogsFive];

console.log(dogArray);

function deleteDogs(dogArray, name) {
    const dogWithName = dogArray.find(d => dog.name === name);
    const dogsIndex = dArray.indexOf(dogWithName);
    dogsArray.splice(dogsIndex, 1);
}
// dogsTwo.grow(4);
// console.log(dogsTwo);



// const person = { //didn't work
//     firstName: "John",
//     lastName:"Doe",
//     fullName : function () {
//     return this.firstName + " " + this.lastName;
      
//     }
//     person.printMe();
// };
// const person1 = new Person('jacob', 30, 73);
// const person2 = new Person('james', 30, 73);
// const person3 = new Person('jon', 31, 72);

// const personArray = [person1, person2, person3];

// //console.log(personArray);
// for (let person of personArray) {//same as above
//     console.log(person);
// }//SAME above and below
// const foundPers = personArray.find(person => person.name === 'jacob');
// console.log(foundPerson);

// const dogsOne = new dog('Simba', 5, 15);
// const dogsTwo = new dog('Pablo', 3, 20);
// const dogsThree = new dog('Furby', 8, 11);

// personArray = [dog1, dog2, dog3];

// foundDog = dogArray.find(dog => p.name === 'Pablo');

// console.log(foundDog);

// const filteredDog = dogArray.find(p => p.name === 'Pablo');
// const filteredDogs = personArray.filter(p => p.name === 'Pablo');
// console.log(foundDog);
// }

