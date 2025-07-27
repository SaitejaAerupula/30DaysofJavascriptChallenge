//11
//sqariing numbers
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log("original numbers:", numbers);
console.log("squared numbers:", squaredNumbers); // This will print: squared numbers: [
// 1, 4, 9, 16, 25]
// This will print: Is 5 even? false
// print: Is 5 even? false



//2
//filtering even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);
// This will print: Even Numbers: [2, 4]    

//3
//conditional message
const ages = [15, 20, 25, 30];
ages.forEach(age => {
    if (age >= 18) {
        console.log(`${age} is eligible.`);
    } else {
        console.log(`${age} is not eligible.`);
    }
});
// This will print: 15 is not eligible.


//4
//transform arrays of strings to uppercase
const names = ["Alice", "Bob", "Charlie"];
const upperCaseNames = names.map(name => name.toUpperCase());
console.log("Uppercase Names:", upperCaseNames);
// This will print: Uppercase Names: ["ALICE", "BOB", "CHARLIE"]
// This will print: 20 is eligible.


//5
//complex filtering
const users=[
    { name: "Alice", age: 25, isActive: true },
    { name: "Bob", age: 17, isActive: false },
    { name: "Charlie", age: 30, isActive: true }
];
const filteredUsers = users.filter(user => user.age >= 18 && user.isActive);
console.log("Filtered Users:", filteredUsers);
// This will print: Filtered Users: [{ name: "Alice", age: 25, isActive: true }, { name: "Charlie", age: 30, isActive: true }]
// This will print: 25 is eligible.