// //do while: you want something to run at least once
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
for (let carProperty in {make: 'ford', model: 'fusion'}){
console.log(carProperty);
console.log(carObject[carProperty]);
}

//function
function doSomething(one, two) {
    //console.log(one);
    //console.log(two);
    return one;
}
doSomething(1, 'word');

const doSomethingResult = doSomething('first param', 'word');
console.log(doSomethingResult);


