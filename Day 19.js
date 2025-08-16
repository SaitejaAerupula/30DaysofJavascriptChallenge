

//Day 19: Advanced Array Methods & Data Manipulation

//1. Flatten Nested Arrays
//hallenge:
const nested = [1, [2, 3], [4, [5, 6]]];
const flat = nested.flat(2); // depth of 2
console.log(flat); // [1, 2, 3, 4, 5, 6]

 //2. Sum of Object Properties
//Challenge:
//Given:
//javascript
const items = [
  { name: "Book", price: 12},
  { name: "Pen", price: 3},
  { name: "Notebook", price: 7}
];
//
const total = items.reduce((sum, item) => sum + item.price, 0);
console.log(total); // 22

// 3. Grouping by Property
//Challenge:
//Group users by age group:
//ja/vascript
const users = [
  { name: "Anna", age: 17},
  { name: "Ben", age: 22},
  { name: "Clara", age: 15},
  { name: "Dan", age: 30}
];
//
const grouped = users.reduce((acc, user) => {
  const key = user.age < 18? 'minors': 'adults';
  acc[key].push(user);
  return acc;
}, { minors: [], adults: []});

console.log(grouped);

//4. Find Most Expensive Item//
const mostExpensive = items.reduce((max, item) => item.price> max.price? item: max);
console.log(mostExpensive); // { name: "Book", price: 12}
//5. Unique Values from Array
const unique = [...new Set(values)];
console.log(unique); // [1, 2, 3, 4, 5]

