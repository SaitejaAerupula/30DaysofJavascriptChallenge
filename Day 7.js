//function and Arrays
//1
// Day 8: JavaScript Array functions
// This code demonstrates the use of various array functions in JavaScript.
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Saiteja")); // This will print: Hello, World!


//2
//day 8: JavaScript Array Functions
//array functions are used to manipulate and interact with arrays in JavaScript.
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // This will print: 15

//3
//day 8: JavaScript max in array
// This code demonstrates how to find the maximum value in an array using JavaScript.
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 4, 5])); // This will print: 5

//4
// Day 8: JavaScript Reverse Array
// This code demonstrates how to reverse an array in JavaScript.
function reverseArray(arr) {
    return arr.slice().reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5])); // This will print: [5, 4, 3, 2, 1]

//5
// Day 8: JavaScript Filter EvenArray
// This code demonstrates how to filter even numbers from an array in JavaScript.
function filterEvens(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log(filterEvens([1, 2, 3, 4, 5])); // This will print: [2, 4]