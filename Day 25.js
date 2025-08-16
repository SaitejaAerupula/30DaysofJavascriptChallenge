//tip calculator
function calcTip(bill, tipPercent) {
  return bill * (tipPercent / 100);
}
console.log(calcTip(100, 15)); // 15
// Function to calculate total bill including tip

//2 character counter
const text = "Hello World";
console.log(`Characters: ${text.length}`);
// Function to count characters in a string

//3 random quote generator
 
const quotes = ["Keep going!", "You can do it!", "Code every day!"];
console.log(quotes[Math.floor(Math.random() * quotes.length)]);
// Function to get a random quote from an array

//4 temperature converter
const cToF = c => (c * 9/5) + 32;
console.log(cToF(30)); // 86


//5 simple calculator
function calculate(a, b, op) {
  if (op === "add") return a + b;
  if (op === "sub") return a - b;
}
console.log(calculate(5, 3, "add")); // 8
