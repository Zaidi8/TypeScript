"use strict";
// Arrow function
const addNumbers = (a, b) => {
    return a + b;
};
console.log(addNumbers(55, 11));
//if you only have one expression you can simply write
const addNumbersAgain = (a, b, c) => a + b - c;
console.log(addNumbersAgain(2, 3, 4));
//Default Function Parameters
const abc = (a, b = 1, c = 2) => a + b + c;
console.log(abc(5));
//You can use abc with signle parameter if and only if the left parameter is not assigned any value, always set the defaults on right
//Spread Operator
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const naturalNumbers = [...oddNumbers, ...evenNumbers];
console.log(naturalNumbers);
//You can use sort function to get numbers in sequence
const details = {
    name: "Zaid",
    rollno: 3837
};
//spread operator can also be used to create a real copy of object
const copiedDetails = Object.assign({}, details);
//Rest Operator
//Rest Operator is helpful when you dont want to tell the number of parameter a function will get
const integers = (...items) => {
    items.reduce;
};
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
//Array and Object Destructing
//It helps you to extract values from array or object and store them in a varialbe
//Array Destructing
const hobbies = ['Dancing', 'Sports', 'Coding'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1);
//Object Destructing
const destination = {
    place: "Naran",
    type: "Nature",
    location: 3145147459
};
const { location: location1, place } = destination;
console.log(location1, place, destination);
