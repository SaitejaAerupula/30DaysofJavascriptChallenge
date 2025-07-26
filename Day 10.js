//day 10
//1
//simple function
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Saiteja"); // This will print: Hello, Saiteja!


//2
//function with return value
function add(a, b) {
    return a + b;
}
let result = add(5, 10);
console.log(`The sum is: ${result}`); // This will print: The sum is

//3
//function with parameters and default values
//even checker
function isEven(num = 0) {
    return num % 2 === 0;
}
console.log(`Is 4 even? ${isEven(4)}`); // This will print: Is 4 even? true
console.log(`Is 5 even? ${isEven(5)}`); // This will

