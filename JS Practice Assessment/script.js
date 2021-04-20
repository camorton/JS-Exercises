//2 functions
// 1 that starts at a number and ends at a number counting up (countUp)
// 1 that starts at a number and ends at a number counting down (countDown)

// countUp and countDown THIS IS FIXED

function countUp(start,end) {
    for (let i = start; i <= end; i++) {//counting up so use a for loop
        console.log(i);
        }
    }
    
    countUp(3, 10);
    
    // function countDown(start, end) {
    //     for (let i = start; i >= end; i--){
    //         console.log(i);
    //     }
    // }
    // countDown(10 , 2);
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
//     console.log(whatShouldIWear(25))

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


   

        






