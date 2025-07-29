//day 13
//loop through an object

const student = {
  name: "Jake",
  age: 21,
  grade: "A"
};

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
// Output:
// name: Jake
// age: 21
// grade: A
// This code iterates over the properties of the 'student' object
// and logs each key-value pair to the console.
// You can also use Object.keys() to get an array of keys
const keys = Object.keys(student);
keys.forEach(key => {
  console.log(`${key}: ${student[key]}`);
});
// Output:
// name: Jake
// age: 21
// grade: A
// This alternative method achieves the same result using an array of keys.
// You can also use Object.entries() to get an array of key-value pairs
const entries = Object.entries(student);
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Output:
// name: Jake           
// age: 21
// grade: A
// This method provides both keys and values in a more structured way.
// It can be useful for destructuring in the loop.
// You can also use Object.values() to get an array of values
const values = Object.values(student);
values.forEach(value => {
  console.log(value);
});
// Output:
// Jake
// 21
// A
// This method focuses on the values of the object, ignoring the keys.
// You can also use a for...of loop with Object.keys()
for (let key of Object.keys(student)) {
    console.log(`${key}: ${student[key]}`);
    }
// Output:
// name: Jake
// age: 21
// grade: A
// This method is similar to the first one but uses a for...of loop.
// You can also use a forEach loop with Object.keys()
Object.keys(student).forEach(key => {
  console.log(`${key}: ${student[key]}`);
});
// Output:
// name: Jake
// age: 21
// grade: A
// This method is similar to the previous one but uses forEach directly on the keys array.
// You can also use a for...in loop with Object.entries()
for (let [key, value] of Object.entries(student)) {
    console.log(`${key}: ${value}`);
    }
// Output:
// name: Jake

// age: 21
// grade: A 
// This method combines the for...in loop with Object.entries() to iterate over key-value pairs.

//2
//nested loop withs arrays
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

for (let row of matrix) {
  for (let value of row) {
    console.log(value);
}
}


//3
//Object Array Report
const employees = [
  { name: "Ella", role: "Designer"},
  { name: "Max", role: "Developer"},
  { name: "Zoe", role: "Manager"}
];

employees.forEach(emp => {
  console.log(`${emp.name} is a ${emp.role}`);
});

//4
// Sum Values in Object

const expenses = {
  rent: 1200,
  groceries: 300,
  utilities: 150
};

let total = 0;
for (let cost in expenses) {
  total += expenses[cost];
}
console.log("Total Monthly Expense:", total);

//5
//dynamic key update
const settings = {
  theme: "dark",
  notifications: true
};

settings.notifications = false;
console.log("Updated Settings:", settings);



