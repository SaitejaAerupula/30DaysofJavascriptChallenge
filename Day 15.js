//Day 15: Array Methods Deep Dive

//1. Find the First Match


const scores = [45, 67, 89, 32, 90, 55];
const firstHighScore = scores.find(score => score> 80);
console.log(firstHighScore); // 89


 //2. Check All Conditions

const ages = [21, 25, 30, 19];
const allAdults = ages.every(age => age>= 18);
console.log(allAdults); // true


// 3. Check If Any Match

const temps = [22, 25, 18, 30, 15];
const hasColdDay = temps.some(temp => temp < 20);
console.log(hasColdDay); // true


//4. Reduce to a Total

const expenses = [120, 80, 200, 50];
const total = expenses.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 450


// Sort Alphabetically

const names = ["Charlie", "Alice", "Bob"];
const sortedNames = names.sort();
console.log(sortedNames); // ["Alice", "Bob", "Charlie"]

