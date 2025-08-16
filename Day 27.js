//1 array destructuring

const [a, b] = [1, 2];
console.log(a, b);




//3 spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

//4 rest operator
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

//5 template literals
const name = "Charlie";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Charlie!

