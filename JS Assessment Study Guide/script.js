// const herbs = [  //Sarah's practice add object(submission) to an array
//     {
//         name: 'basil',
//         dried: false,
//         isGood: 'yes',
//     },
//     {
//         name: 'tumeric',
//         dried: true,
//         isGood: 'no',
//     },
//     {
//         name: 'terragon',
//         dried: true,
//         isGood: 'yes',
//     },
// ]
// function addHerb(array, name, dried, isGood) {
//     let newHerb = {name: name, dried: dried, isGood: isGood}; //objects always have curly brackets
//     array.push(newHerb);
// }

// console.log(herbs);
// addHerb(herbs, 'ginger', false, 'yes');
// console.log(herbs);

//PRACTICE ASSESSMENT 2 FROM 11/11; dealership.js

// #1: Declare a function named printTens
// ○ Parameter(s): n/a
// ○ Functionality: uses a loop to log, one by one, the tens from 10 to 100. (i.e. 10, 20,
// 30 … 100)

// function printTens() { //#1
//             for (let i = 10; i <= 100; i+= 10) {//counting up so use a for loop
//                 console.log(i);
//             }
//         } 
    
//     printTens();


// #2: Declare a function named countUntilTens
// ○ Parameter(s): step
// ○ Functionality: uses a while loop to log, one by one, the numbers starting at
// step and adding step each time. It stops when the number is divisible by ten.
// For example, if step is 4, it will print 4, 8, 12, 16, 20. It will stop at 20 because 20
// is divisible by 10.


    // function countUntilTens(step) { //#2
    //    let i = step;
    //     while (true) {
    //         console.log(i);
    //         if (i % 10 === 0) { //modulus means divisible by 10
    //             break;
    //         }
    //         i += step;
    //     }  
    // }
    
    // countUntilTens(125);
    
 
// #3: Declare a function named hasVowels
// ○ Parameter(s): word
// ○ Functionality: returns true if the provided word contains one or more vowels and
// false if it contains no vowels.



    // function hasVowels(word) {//#3
    //     let hasVowel = false;
    //     for (let letter of word) {
    //         if (letter === 'a') {
    //             hasVowel = true;
    //             break;
    //         }else if (letter ==='e') {
    //             hasVowel = true;
    //             break;
    //         }else if (letter ==='i') {
    //             hasVowel = true;
    //             break;
    //         }else if (letter ==='o') {
    //             hasVowel = true;
    //             break;
    //         }else if (letter ==='u') {
    //             hasVowel = true;
    //             break;    
    //         }
    //     }
    //     return hasVowel; //Why does it not matter that this is hasVowel, not hasVowels, A: difference between the variable and the function
    // }
    
    //     console.log(hasVowels('sjsjsj')); //calling function-hasVowels

    // var testString = "today"; //Sabbir's practice 
// function hasVowels(stringVariable) {
//     let hasVowel = false;
//     for (character of stringVariable){
//         if (character === "a"  || character === "e" || character === "i" || character === "o" || character === "u") {
//             hasVowel = true;
//             break;
//         }
//     }
//     return hasVowel;
// }
// console.log(hasVowels("lkjhg"));
    // 
 
//  #4: Declare a function named testTemperature
//  ○ Parameter(s): desiredTemp, actualTemp
//  ○ Functionality: Given a desiredTemp and an actualTemp, tell the heating &
//  cooling system what to do. Log one of these three things:
//  ■ “Run A/C”
//  ■ “Run heat”
//  ■ “Stand by”
 
 
    // function testTemperature(desiredTemp, actualTemp) {//#4
    //     if (desiredTemp < actualTemp) {
    //         return "Run A/C";
    //     } else if (desiredTemp > actualTemp) {
    //         return "Run Heat";
    //     } else {
    //         return "Stand by"; //is it OK to return these here and console.log at the end?
    //     }
    //     }
    // console.log(testTemperature(68,53)) //Mine is slightly different than Jacob's. Does order of desired temp > actual temp make a difference?
    
    //Jacob's v esp 1-4 are much harder than what you'll find on the test.
 
// #5: Declare a variable named dealership that is initialized to an array with the following
// objects:


    // const dealership = [ //#5
    //     {make: 'Toyota', model: 'Prius', year: '2020', hybrid: true, cost: 20000},
    //     {make: 'Toyota', model: 'Prius', year: '2021', hybrid: true, cost: 30000},
    //     {make: 'Ford', model: 'F-150', year: '2015', hybrid: false, cost: 25000},
    //     {make: 'Ferrari', model: 'Enzo', year: '2004', hybrid: true, cost: 15000},    
    // ];
    // console.log(dealership);
  
// #6:  Declare a function named findCars
// ○ Parameter(s): arrayOfCars, model
// ○ Functionality: When called, this function will return an array of all the cars from
// the arrayOfCars argument that have the specified model argument. If there are
// no cars that have that model, return an empty array

    // function findCars (arrayOfCars, model) { //#6
    //     return arrayOfCars.filter(car => car.model === model) //use filter not find because you want an array of all the cars from the array. FIND would return the first one it comes across 
    //     }                                                     //car is the entire object, car.model means you're checking the model label of the object. Calling it top-down. above line is telling it to loop through the array, when it finds the specified model, it will add it to the arrayOfCars
    // console.log(findCars(dealership, 'Chrysler'))  //Do we have to worry about the "If there are no cars that have that model, return an empy array" NO, IT WILL LOG AN EMPTY ARRAY
    
    
    // console.log(dealership[0]); // Sabbir's session: to call an object from an array with its index # (0)
    
//     #7: Declare a function named addCar
// ○ Parameter(s): arrayOfCars, make, model, hybrid
// ○ Functionality: construct an object and add it to the beginning of the
// arrayOfCars. Use the parameters for the values, but always set the year to
// 2021. The object should have the same property names as the objects already
// in the array
    
    function addCar(arrayOfCars, make, model, hybrid, cost) {//#7 this way will NOT add it to the beginning!
        const newCar = { make: make, model: model, year: 2021, hybrid: hybrid, cost: cost};
        arrayOfCars.push(newCar);
    }
        addCar(dealership, 'Ford', 'Fusion', false, 30000);
        console.log(dealership);
    
    // function addCar(arrayOfCars, make, model, hybrid, cost) { //#7 BETTER alternate because it adds new car to the beginning of the array like directions require
    //     const newCar = {make: make, model: model, year: 2021, hybrid: hybrid, cost: cost}; 
    //         arrayOfCars.unshift(newCar); //don't understand why we used unshift instead of push-so it adds it to the beginning of the list as problem requests
    // }    
    //     console.log(dealership);
    //     addCar(dealership, 'Ford', 'Fusion', false, 30000);
    //     console.log(dealership);
    
//    #8: Declare a function named areThereAnyHybridsForSale
//    ○ Parameter(s): arrayOfCars
//    ○ Functionality: when called, this function will return true if there is a hybrid car in
//    the arrayOfCars argument and false otherwise.
   
    // function areThereAnyHybridsForSale(arrayOfCars) { //#8
    //     const hybridCars = arrayOfCars.filter(car => car.hybrid);
    //     if (hybridCars.length > 0) {
    //         return true;
    //     }
    //     return false;
    //     }
    //     console.log(areThereAnyHybridsForSale(dealership));
    
    // // function findCheapestCar(arrayOfCars) { //extra for test
    // //     let cheapestCar = arrayOfCars[0]; //set to the very first object to start scanning all
    // //     for (let car of arrayOfCars) {
    // //         if (car.cost < cheapestCar. cost) {
    // //             cheapestCar = car;
    // //         }
    // //     }
    // //     return cheapestCar;
    // // }
    // // console.log(findCheapestCar(dealership));


//PRACTICE FROM CLASS ONE NIGHT--SHOWS PROMPT BOX AND SOME FOR AND WHILE LOOP EXAMPLES

//do while: you want something to run at least once
// const number = 1;
// do {
//     console.log(number); 
// } while (number != 1); //if everything here is true, do what's in the brackets != means NOT EQUAL

// let answer;
// do {
//     answer = prompt('what is your response');
//     console.log(answer);
// } while (answer != 'quit') //symbol means not equal

//loop through an object
// for (let carProperty in {make: 'ford', model: 'fusion'}){
//     console.log(carProperty);
//     console.log(carObject[carProperty]);
//     }
    
//     //function
//     function doSomething(one, two) {
//         //console.log(one);
//         //console.log(two);
//         return one;
//     }
//     doSomething(1, 'word');
    
//     const doSomethingResult = doSomething('first param', 'word');
//     console.log(doSomethingResult);

//JACOB'S PRACTICE EXAMPLES, DIRECTIONS GIVEN ORALLY AND IN COMMENTS

//2 functions
// 1 that starts at a number and ends at a number counting up (countUp)
// 1 that starts at a number and ends at a number counting down (countDown)

// countUp and countDown THIS IS FIXED
 

// function countUp(start,end) {
//     for (let i = start; i <= end; i++) {//counting up so use a for loop
//         console.log(i);
//         }
// }
//         countUp(3, 10);    
    
// function countDown(start, end) {
//         for (let i = start; i >= end; i--){
//             console.log(i);
//         }
//     }
//     countDown(10 , 2);


// const strings = ['one', 'something', 'jacob', 'car', 'another'];
// function getLongestString(array) {
//     let longestString = '';
//     for (let str of array) { //str is a placeholder--could be anything as long as consistent everytime you use it
//         if (str.length > longestString.length){
//             longestString = str;
//         }
//     }
//     return longestString;
// }
// const longest = getLongestString(strings);

// console.log(longest);

//if the time is 30 or below - return wear a coat
//if the temp is greater than 30 but less than 55 - return wear a jacket
// if the temp is greater than or equal to 55 - return no coat needed

// function whatShouldIWear(temp) {
//     if (temp <= 30) {
//         return "Wear a coat"; //return in case you want to get the value and use it later on
//     }   else if (temp > 30 && temp < 55) {
//         return 'wear a jacket' //pay attention in the test to whether it's telling you to return or console.log or both
//     }   else {//safest to include all three instead of ruling out third option
//         return 'no coat needed';
//     }
// }
//     console.log(whatShouldIWear(65))

// const cars = [
//     {make: 'Ford', model: 'Fusion', year: '2018', cost: '20000', hasWarranty: true},
//     {make: 'Ford', model: 'Focus', year: '1990', cost: '3000', hasWarranty: false},
//     {make: 'Jeep', model: 'Cherokee', year: '2019', cost: '45000', hasWarranty: true},
//     ];

// function addCar(array, newMake, newModel, newYear, newCost, hasWarranty) {
//     const newCar = {make: newMake, model: newModel, year: newYear, cost: newCost, hasWarranty: hasWarranty};
//     // const newCar = {make: make, model: model, year: year, cost: cost, hasWarranty: hasWarranty}; //This is Jacob's example; I could've used but did want to also change line 51
//     array.push(newCar);
// }

// addCar(cars, 'Ford', 'Edge', '2002', '10000', false);

// console.log(cars);

// function findFordCar(array) {
//     return array.find(element => element.make === 'Ford');//returns the first ford item it finds; filter would have returned all the instances of ford
// }
// const fordCar = findFordCar(cars);
// console.log(fordCar);

//LAB 3

// Create an array of objects representing student submissions. Define a variety of
// functions for working with such an array. Also call each of the functions at least once to test it.
// Build Specifications:

// #1. Declare a variable named submissions that is initialized to an array with the following
// objects:

// const submissions = [//#1
//     {name: 'Jane', score: 95, date: '2020-01-24', passed:true},
//     {name: 'Joe', score: 77, date: '2018-05-14', passed:true},
//     {name: 'Jack', score: 59, date: '2020-07-05', passed:false},
//     {name: 'Jill', score: 88, date: '2020-04-22', passed:true},
// ];
// console.log(submissions);

//#2: Declare a function named addSubmission
// ○ Parameter(s): array, newName, newScore, newDate
// ○ Functionality: construct an object and push it into the array. The object must
// have the same properties as the objects already in the array. Use conditional
// statements to set the value for the passed property to true if the score is
// greater than or equal to 60 and false otherwise.

// function addSubmission(array, newName, newScore, newDate){//#2
//     const passed = newScore >= 60;
//     const newSubmission = {name: newName, score: newScore, date: newDate, passed: passed };
//     array.push(newSubmission);
// }
// addSubmission(submissions, 'Chris', 90, '2020-10-27;');
// console.log(submissions); //this shows the new array

// #3: Declare a function named deleteSubmissionByIndex
// ○ Parameter(s): array, index
// ○ Functionality: remove the object from the array at the specified index using the
// splice method.

// function deleteSubmissionByIndex(array, index) {//#3
//     array.splice(index, 1);
// }
// deleteSubmissionByIndex(submissions, 4);
// console.log(submissions); //back down to 4 submissions because we deleted the newSubmission Chris from #2

//#4: Declare a function named deleteSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: remove the object from the array that has the provided name.
// Incorporate the findIndex method and the splice method.


// function deleteSubmissionByName(array, name) {//#4
//    const indexOfSubmission = array.findIndex(s => s.name === name);
//     array.splice(indexOfSubmission, 1);
// }
// deleteSubmissionByName(submissions, 'Jill');
// console.log(submissions); //now there are only three submissions in the list because we took out Jill


//#5: Declare a function named editSubmission
// ○ Parameter(s): array, index, score
// ○ Functionality: update an object’s score in the array at the specified index. Use
// conditional statements to set the value for the passed property to true if the
// score is greater than or equal to 60 and false otherwise.

// function editSubmission(array, index, score) {//#5
//     const passed = score >= 60;
//     array[index].score = score;
//     array[index].passed = passed;
// }
// editSubmission(submissions, 1, 49);//changed Joe's score to 49 and passed: to false because he's now below 60
// console.log(submissions);


//#6: Declare a function named findSubmissionByName
// ○ Parameter(s): array, name
// ○ Functionality: return the object in the array that has the provided name. Use the
// find method.

// function findSubmissionByName(array, name) {//#6
//     return array.find(s => s.name === name); //s is a placeholder
// }

// const sub = findSubmissionByName(submissions, 'Joe')
// console.log(sub);

//#7: Declare a function named findLowestScore
// ○ Parameter(s): array
// ○ Functionality: return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array.

// function findLowestScore(array) {//#7
//     let lowestScore = 101; //let because lowest score will continue to change as you work your way through the submissions
//     array.forEach(s => { //just like the filter; s is the placeholder for each item in the array
//         if (s.score < lowestScore) { //more than one line, use the curly brackets
//             lowestScore = s.score;
//         }
//         })
//         return array.find(s => s.score === lowestScore); //so you can use it again later and directions said RETURN lowest score
// }
// const lowestScoreSubmission = findLowestScore(submissions);
// console.log(lowestScoreSubmission);

//#8:Declare a function named findAverageScore
// ○ Parameter(s): array
// ○ Functionality: return the average quiz score. Use a for...of loop.

// function findAverageScore(array) {//#8 total of scores added together divided by the number of submissions
//     const arrayLength = array.length; //how many entries do you have
//     let total = 0;
//     array.forEach(s => { //tells it to loop through the array; wouldn't have to use curly brackets, just doing it to practice good format
//         total += s.score;
//     })
//     return total / arrayLength; //return the total divided by the length
// }
// console.log(findAverageScore(submissions)); //returns 79.75

//#9: Declare a function named filterPassing
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have passing scores

// function filterPassing(array){//#9
//                         // const newArray [] = array.filter(s =>passed);
//     return array.filter(s => s.passed); //don't need to declare a new array (above), because return will automatically do it
// }
// console.log(filterPassing(submissions));

//#10: . Declare a function named filter90AndAbove
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have scores greater than or equal to 90.

// function filter90AndAbove(array) {//#10
//     return array.filter(s => s.score >=90);
// }
// console.log(filter90AndAbove(submissions));//returned Jane because she's the only one who scored above 90

//LAB TWO: GAME
// This lab will focus on three ways of writing out functions: function declaration, function
// expression, and arrow functions. The goal is to properly log statements to the console by using
// a mixture of the aforementioned topics. While this lab explicitly asks you to use certain
// functions, it is worth mentioning that each example could be written using any of the three
// methods for defining functions. You will only need to construct an index.html and
// script.js file. 

// Build Specifications:
// ● Declare an arrow function named randomDamage that has no parameters and returns a
// random integer between 1 and 10.
// ● Declare an arrow function named chooseOption that has two parameters named opt1
// and opt2. chooseOption does two things:
// ○ Declares and initializes a variable named randNum to either a 0 or 1, randomly.
// ○ Returns opt1 if randNum is equal to 0 otherwise return opt2 . (Use a ternary
// operator)
// ● Declare a function expression named attackPlayer that has one parameter named
// health which returns a number equal to health minus the result of the randomDamage
// function.
// ● Declare an arrow function named logHealth that has two parameters named player
// and health which has a console.log method to state the following message: “player
// health: health”.
// ● Declare an arrow function named logDeath that has two parameters named winner
// and loser which has a console.log method to state the following message: “winner
// defeated loser”
// ● Declare an arrow function named isDead that has one parameter named health
// which returns a boolean value of true or false based on the following condition: health
// <= 0;
// ● Declare a function declaration named fight that has four parameters.
// ○ Parameters:
// ■ player1 - this will hold the name of the first player
// ■ player2 - this will hold the name of the second player
// ■ player1Health - this will hold the health of the first player
// ■ player2Health - this will hold the health of the second player
// ○ Within the fight function, write a while loop that loops while true
// ■ Declare and initialize a variable named attacker equal to the
// chooseOption function with player1 and player2 as arguments.
// ■ Has an if statement that is triggered when attacker is equal to player1.
// ● Set player2Health equal to the result of attackPlayer with
// player2Health as its argument.
// ● Calls the logHealth function with player2 and player2Health
// as its arguments.
// ● Call isDead with player2Health as an argument. If the result is
// true:
// ○ Call the logDeath function with player1 and player2 as
// arguments.
// ○ Break
// ■ Has an else statement that:
// ● Sets player1Health equal to the attackPlayer function with
// player1Health as its argument.
// ● Call the logHealth function with player1 and player1Health as
// its arguments.
// ● Call isDead with player1Health as an argument. If the result is
// true:
// ○ Call the logDeath function with player2 and player1 as
// arguments.
// ○ Break
// ● Lastly, call the fight function with the required four parameters. You pick the names
// and starting health. For example: player1: “Mitch”, player2: “Adam”, player1Health: 100,
// player2Health: 100. 

// const randomDamage = () => {
//     return Math.floor(Math.random() * 10 + 1);
// }

// const chooseOption = (opt1, opt2) => {
//     const randNumber =  Math.round(Math.random());
//     return randNumber === 0 ? opt1 : opt2
// }

// const attackPlayer = function(health) {
//     return health - randomDamage();
// }

// const logHealth = (player, health) => {
//     console.log(`${player} health: ${health}`)
// }

// const logDeath = (winner, loser) => {
//     console.log(`${winner} defeated ${loser}`);
// }

// const isDead = (health) => {
//     return health <= 0;
// }
// function fight(player1, player2, player1Health, player2Health) {
//     while(true) {
//         const attacker = chooseOption(player1, player2);
//         if (attacker === player1) {
//             player2Health = attackPlayer(player2Health);
//             logHealth(player2, player2Health);
//             if (isDead(player2Health)) {
//                 logDeath(player1, player2);
//             }
//         } else {
//             player1Health = attackPlayer(player1Health);
//             logHealth(player1, player1Health);
//             if (isDead(player1Health)) {
//                 logDeath(player1, player1);
//                 break;
//             }
//         }
//     }
// }

// fight ('jacob', 'james', 100, 53);

//LAB ONE:

//JSLabOne #1

// #1: Declare and initialize the following variables with appropriate values:
// name (string) - Mitch Cuckovich
// age (number) - 25
// birthday (string) - January 24
// detroitGC (boolean) - choose either true or false
// lifeEvents (array with 4 items. 4 important life events)
// "I was born in Troy, Michigan.",
// "I went to Hope College",
// "I went to Junior Olympics when I was 10 years old. I placed 14th in the
// nation in the 800 meter event.",
// "I'm a graduate of the front-end bootcamp."

// const name = "Mitch Cuckovich"; 
// const age = 25;
// const birthday = "January 24";
// const text = "My name is " + name + " I am currently " + age + " years old and my birthday is on " + birthday + ".";

// const item1 = "I was born in Troy, Michigan. ";
// const item2 = "I went to Hope College.";
// const item3 = "I went to junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.";
// const item4 = "I'm a graduate of the front-end bootcamp. ";
// const lifeEvents = [item1, item2, item3, item4];

//#2: Write an if/else statement that runs one of two console.log methods. Your console.log
// methods must incorporate the variables: name, age, and birthday.
// ○ If detroitGC is true, log the following message to the console:
// ■ My name is name and I am a student at Grand Circus in Detroit, Michigan.
// I am currently age years old and my birthday is on birthday.
// ○ else
// ■ My name is name and I am a student at Grand Circus in Grand Rapids,
// Michigan. I am currently age years old and my birthday is on birthday.

// let detroitGC;

// if (detroitGC == true){ //#2
//     console.log("My name is " + name + " and I am a student at Grand Circus in Detroit, Michigan. I am currently " + age + "years old and my birthday is on " +  birthday + "." );
// } else {
//     console.log("My name is " + name + "and I am currently " + age + "years old and my birthday is on " + birthday + ".");
// }

// //#3: Write a for loop that starts at 0 and iterates by increments of 1 while i is less than the
// // length of the lifeEvents array. Each iteration of the loop should log a new sentence
// // from the lifeEvents array. You should only have one console.log method.

// for (let i=0; i < lifeEvents.length; i++){//#3
//     console.log(lifeEvents[i])
// }

// //#4: Declare and initialize a variable named counter to the value of 0.
// let counter = 0; //#4

//#5: Write a while loop that loops while true.
// ○ Declare a variable named randomNumber that is initialized to a random integer
// between 1 and 10. Google search how to do this.
// ○ Write an if/else statement that has two conditions
// ■ If randomNumber is not equal to 5
// ● Increment counter
// ● Use a console.log method to say: “randomNumber !== 5”
// ■ Else
// ● Increment counter
// ● Use a console.log method to say: “5 === 5. It took counter
// iterations to randomly generate the number 5.”
// ● Break

// let randomNumber = 0; //#5

// while (randomNumber != 5) {
//     randomNumber = Math.floor(Math.random()*10+1);
//     if (randomNumber != 5){
//     counter++;
//     console.log(randomNumber, "!== 5")
// }   else {
//     counter++;
//     console.log("5 === 5. It took", counter, "iterations to randomly generate the number 5.")
//     break
// }
    
// }
//PRACTICE NIGHT WITH JACOB INC DOGS PRACTICE

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

// class Dogs {
//     name;
//     age;
//     weight;
//     constructor(name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
//     }
// }
// const dogsOne = new Dogs('Sammy', 10, 11);
// const dogsTwo = new Dogs('Boulder', 1, 47);
// const dogsThree = new Dogs('Simba', 5, 15);
// const dogsFour = new Dogs('Pablo', 3, 20);
// const dogsFive = new Dogs('Furby', 8, 11);

// const dogArray = [dogsOne, dogsTwo, dogsThree, dogsFour, dogsFive];

// console.log(dogArray);

// function deleteDogs(dogArray, name) {
//     const dogWithName = dogArray.find(d => dog.name === name);
//     const dogsIndex = dArray.indexOf(dogWithName);
//     dogsArray.splice(dogsIndex, 1);
// }
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

//MINI CODE CHALLENGE:

// const tl = [0, 5];
// const br = [5, 0];

// function logRectInfo(topLeft, bottomRight) {
//     const width = topLeft[0] - bottomRight[0];
//     const length = topLeft[1] - bottomRight[1];
//     const area = width * length;
//     const perimeter = 2 * (length+ width);
//     console.log(`area: ${area} perimeter:  ${perimeter}`)
// }
// logRectInfo(tl, br);

// const myNames = ['jacob', 'james', 'rob', 'marie', 'alyssa']}

// function getLongestName(names) {
//     let longestName = '';
//     for (let name of names) {
//         if (name.length > longestName.length) {
//             longestName = name;
//         }
//     }
//         return longestName;
// }   

// const longest = getLongestName(myNames);
// console.log(longest);

// //declaring an array, then adding names to it
// const myArray = [];

// myArray.push('one');
// console.log(myArray);

// myArray.push('two');
// console.log(myArray);

// myArray.push('three');
// console.log(myArray);

// const names = []; //use const with array because you always start with it and you would never want to reassign it
// let response; //this is let because you will reassign the response variablem
// do {
//     response = prompt('enter a name, enter stop to exit');
//     if (response !=== 'stop'){
//         names.push(response);
//     }
//     console.log(names);
// } while (respone !== 'stop');

// const longestName = getLongestName

// let actualTemp = prompt("actual temp");
// let desiredTemp = prompt("desiredTemp");

// if (actualTemp > desiredTemp){
//     console.log ("Run A/C");
// }   else if (actualTemp < desiredTemp){
//     console.log ('Run Heat')
// }   else{
//     console.log ('Standy')
// }
// let firstNumber = prompt('first number');
// let secondNumber = prompt('second number');


// if (firstNumber > secondNumber) {
//     alert(`${firstNumber} is bigger than ${secondNumber}`);
// } else {
//     alert(`${secondNumber} is bigger than ${first6Number}`); 
// }
//tell whether number is positive or negative
// let first = prompt('first number');
// let second = prompt('second number');
// let third = prompt('third number');

// let total = first + second + third;
// if (total < 0) {
//     alert ('the sign is -');
// } else {
//     alert('the sign is +')
// }
// let amountOfNumber = prompt('how many numbers to add');

// let total = 0;
// alert(total);
// for (let i=0; i < amountOfNumber; i++) {
//     total += parseInt(prompt('enter a number'));
// }
// if (total < 0) {
//     alert('the sign is -');
// } else {
//     alert('the sign is +')
// }

// for(let i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} is even`);
//     } else {
//         console.log(`${i} is odd`);
//     }
//     }

// const myNames = ['jacob', 'james', 'rob', 'marie', 'alyssa'];

// // function getLongestName(names) {
// //         for (let name of names) {
// //             console.log(name)
// //             }
// //         }
// //     getLongestName(myNames);

// function getLongestName(names) {
//     let longestName = ''; //set an empty string
//         for (let name of names) {
//             if (name.length > longestName.length){
//                 longestName = name;
//             }
//         }
//         return longestName;
// }
//     const longest = getLongestName(myNames);
//     console.log(longest); //returns Alyssa
        

// if (name.length > longestName.length) {
            //     longestName = name;

            // return longestName;
            // console.log(longestName);

// let name1 = 'jacob';
// let name2 = 'othername';
// let name3 = 'hle';

// let f = name1.length;
// let t = name2.length;
// let th= name3.length;

// if (f < t && f< th) {
//     console.log(`${name1} is the longest`);
// } else if (f === t && f > th ) {
//     console.log(`${name1} and 4{name2} have the longest names`)
// } else if (f === t && f === th) {
//     console.log(`${name1} and ${name2} ${name3} have the longest names`)
// } else if (t> f && t > th) {
//     console.log(`${name2} is the longest`);
// }else if (f < t && t === th) {
//     console.log(`${name2} and ${name3} have the longest names`))
// }else{
//     console.log(`${name3} has the longest name`);
// }


// if (o > t ) {
//     if (o > th) {
//     console.log(`${name1} has the longest name`);
// } else if (th > o) {
//     console.log(`${name3} has the longest name`);
// }else {
//     console.log(`${name3} and ${name1} tie for the longest name`)
// }

// } else if (t > th) {
//     console.log(`${name2} has the longest name`);
// } else if (th >t) {
//     console.log(` ${name3} has the longest name`);
// } else {
//         console.log(`All three names, ${name2}, ${name1}, and ${name3} are the same length.`);
//     }

// let number = parseInt(prompt('enter a number'));

// function reverseNumber(number) { //take in a number and reverse it
//   const numberToString = number.toString(); //first turn the number into a string
//     const revNumber = '';
//     for (let i = numberToString.length - 1; i >= 0; i--){
//         revNumber += numberToString[i]
//     }
//     // console.log(revNumber);
//     return parseInt(revNumber);
// }
//Write a js function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

// //this DIDN'T WORK VVV
// const convertFirstLetterToCapital = (sentence) => {
//     const stringArray = sentence.split(' '); //take a string and split it at whatever we specify
//     let returnSentence = '';
    
//     for (let word of stringArray) {
//         for (let letter of word); {
//             letter = letter.toUpperCase();
//         }
//         console.log(word);
//         returnSentence += word + ' ';
//     }
// }
// let s = ('hello my name is jacob');
// let s2 = convertFirstLetterToCapital(s);
// console.log(s2);
   
//Nicole Bush Practice Assessment

//#1: Write a function whatMealIsIT() that takes in the hour (number) as a parameter and logs
// what meal you should eat.

// function whatMealIsIt(hourMilitary) {
//     if (hourMilitary >= 6 && hourMilitary <= 11) {
//       console.log("You should eat breakfast!");
//     } else if (hourMilitary > 11 && hourMilitary <= 16) {
//       console.log("You should eat lunch!");
//     } else if (hourMilitary > 16 && hourMilitary <= 22) {
//       console.log("You should eat dinner!");
//     } else if (hourMilitary > 22 && hourMilitary < 6) {
//       console.log("Have a late night snack!");
//     } else {
//       console.log("Invalid input! Please try again");
//     }
//   }
  
//   whatMealIsIt(20);

// //#2: Write a function findShortestWord() that takes in a word array parameter, looks at each item
// in the array and returns what the shortest word in the array is. 

//Nicole's example didn't console.log for me:

// let wordArray = ['mustard', 'chocolate', 'pomeranian', 'sun'];

// function findShortestWord(array) {
//   let shortestWord = array[0];
//   array.forEach((item) => {
//     if (item.length < shortestWord.length) {
//       shortestWord = item;
//     }
// });
//     return shortestWord;
//     }
//     console.log(item);

//Jacob's example did

//const myNames = ['jacob', 'james', 'rob', 'marie', 'alyssa'];

// // function getLongestName(names) {
// //         for (let name of names) {
// //             console.log(name)
// //             }
// //         }
// //     getLongestName(myNames);

// function getLongestName(names) {
//     let longestName = ''; //set an empty string
//         for (let name of names) {
//             if (name.length > longestName.length){
//                 longestName = name;
//             }
//         }
//         return longestName;
// }
//     const longest = getLongestName(myNames);
//     console.log(longest); //returns Alyssa

// 3. Write a function that looks at each number in an array, checks if that number is divisible by
// 2 and returns an array of all numbers that are divisible by 2. 

// const numArray = [1, 4, 22, 45, 64, 9, 238, 23, 324];

// const isEven = (array) => {
//   return array.filter((num) => num % 2 === 0);
//   //The % operator is called the modulus operator,
//   //it gives you the remainder after dividing by the given number, we use this to find even numbers
//   //becuase when you divide by 2 there is no remainder
// };
// console.log(isEven(numArray));

// 4. Make an array of objects that contains this data:

// let famousPeople = [
//     { name: "Beyonce", profession: "singer", age: 40 },
//     { name: "Mae Jemison", profession: "Astronaut", age: 50 },
//     { name: "Patrick Stewart", profession: "Actor", age: 70 },
//     { name: "Greta Thunberg", profession: "Activist", age: 16 },
//   ];
// // console.log(famousPeople);

// // 6. Write a function getPersonInfo() that takes in a name as the parameter and returns the object
// // that lists the info about that person hint* returns a single object. 

// function getPersonInfo(name) {
//     return (foundPerson = famousPeople.find((person) => person.name === name));
// }

// const foundPerson = getPersonInfo(famousPeople)
// console.log(foundPerson(name, 'Beyonce'));

    //OR you can do it this way:
    //   for (let person of famousPeople) {
    //     if (name === person.name) {
    //       foundPerson = person;
    //     } else {
    //       foundPerson = "Your entry couldnt be found";
    //     }
    //   }
    //return foundPerson;

    // 7. Write a function addNewPerson() that takes in the parameters: array, name, profession, and
    // age and constructs a new object to add to the array provided as a parameter. 

    // function addNewPerson(array, name, profession, age) {
    //     array.push({ name: name, profession: profession, age: age });
    //     //no return needed becuase we're just updating an array, we could but we don't have to
    //   }
     
    //   8. Write a function deletePerson() that takes in the parameters: array and name. It will find that
    //   person by their name and delete the object. 

    //   const deletePerson = (array, name) => {
    //     array.forEach((item, i) => {
    //       if (item.name === name) {
    //         array.splice(i, 1);
    //       }
    //     });
    //     return array;
    //     //same thing as adding a person in the function above, we can return the new array but we dont have to
    //   };
        
    //   9. Write a function findOldestPerson() that takes in an array as a parameter and returns an
    //   object for the oldest person. 
      

    //   const findOldestPerson = (array) => {
    //     let oldestPerson = array[0];
    //     for (let person of array) {
    //       if (person.age > oldestPerson.age) {
    //         oldestPerson = person;
    //       }
    //     }
    //     return oldestPerson;
    //   };
      
    //   console.log(getPersonInfo("Beyonce"));
    //   console.log(findOldestPerson(famousPeople));
      