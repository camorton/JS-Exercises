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

// const myNames = ['jacob', 'james', 'rob', 'marie', 'alyssa']

// function getLongestName(names) {
//         let longestName = '';
//         for (let name of names) {
//             if (name.length > longestName.length) {
//                 longestName = name;
//             }
//         }
//             return longestName;

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

//this DIDN'T WORK VVV
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
   
// const s = 'hello my name is jacob';
// const s2 = convertFirstLetterToCapital(s);
// console.log(s2);

// }