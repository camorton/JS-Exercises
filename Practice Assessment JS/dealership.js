
// function printTens() { //#1
//         for (let i = 10; i <= 100; i+= 10) {//counting up so use a for loop
//             console.log(i);
//         }
//     } 

// printTens();

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
// 

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

// const dealership = [ //#5
//     {make: 'Toyota', model: 'Prius', year: '2020', hybrid: true, cost: 20000},
//     {make: 'Toyota', model: 'Prius', year: '2021', hybrid: true, cost: 30000},
//     {make: 'Ford', model: 'F-150', year: '2015', hybrid: false, cost: 25000},
//     {make: 'Ferrari', model: 'Enzo', year: '2004', hybrid: true, cost: 15000},    
// ];
// // console.log(dealership);

// function findCars (arrayOfCars, model) { //#6
//     return arrayOfCars.filter(car => car.model === model) //use filter not find because you want an array of all the cars from the array. FIND would return the first one it comes across 
//     }                                                     //car is the entire object, car.model means you're checking the model label of the object. Calling it top-down. above line is telling it to loop through the array, when it finds the specified model, it will add it to the arrayOfCars
// // console.log(findCars(dealership, 'Prius'))  //Do we have to worry about the "If there are no cars that have that model, return an empy array" NO, IT WILL LOG AN EMPTY ARRAY
// console.log(dealership[0]); // Sabbir's session: to call an object from an array with its index # (0)

// function addCar(arrayOfCars, make, model, hybrid, cost) {//#7
//     const newCar = { make: make, model: model, year: 2021, hybrid: hybrid, cost: cost};
//     arrayOfCars.push(newCar);

// function addCar(arrayOfCars, make, model, hybrid, cost) { //#7 BETTER alternate
//     const newCar = {make: make, model: model, year: 2021, hybrid: hybrid, cost: cost}; 
//         arrayOfCars.unshift(newCar); //don't understand why we used unshift instead of push-so it adds it to the beginning of the list as problem requests
// }    
//     console.log(dealership);
//     addCar(dealership, 'Ford', 'Fusion', false, 30000);
//     console.log(dealership);

// // function areThereAnyHybridsForSale(arrayOfCars) { //#8
// //     const hybridCars = arrayOfCars.filter(car => car.hybrid);
// //     if (hybridCars.length > 0) {
// //         return true;
// //     }
// //     return false;
// //     }
// //     console.log(areThereAnyHybridsForSale(dealership));

// // function findCheapestCar(arrayOfCars) { //extra for test
// //     let cheapestCar = arrayOfCars[0]; //set to the very first object
// //     for (let car of arrayOfCars) {
// //         if (car.cost < cheapestCar. cost) {
// //             cheapestCar = car;
// //         }
// //     }
// //     return cheapestCar;
// // }
// // console.log(findCheapestCar(dealership));







