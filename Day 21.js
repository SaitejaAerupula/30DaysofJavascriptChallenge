//1
const obj = { a: 1, b: 2, c: 3 };
// Output: { 1: 'a', 2: 'b', 3: 'c' }
const inverted = Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
console.log(inverted);

//2
const str = "banana"; 
// Output: { b: 1, a: 3, n: 2 }
const frequency = [...str].reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});
console.log(frequency);

//3
const arr = [1, 2, 2, 3, 4, 4];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

//4
const o1 = { a: 1, b: 2 };
const o2 = { b: 3, c: 4 };
const merged = { ...o1, ...o2 };
console.log(merged);

//5
const usersMap = new Map();
usersMap.set(101, "Alice").set(102, "Bob");
console.log(usersMap.get(102)); // "Bob"
