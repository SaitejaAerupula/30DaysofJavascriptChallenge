// Day 17: Modules

// Export a function
//
// utils.js
export function greet(name) {
  return `Hello, ${name}`;
}


//2. Import and use a function
//s
// app.js
import { greet } from './utils.js';
console.log(greet("Alice")); // Output: Hello, Alice


//3. Default export
//js
// math.js
export default function add(a, b) {
  return a + b;
}


//4. Import default export
//js
// main.js
import add from './math.js';
console.log(add(5, 3)); // Output: 8


//5. Combine named and default imports
//js
// helper.js
export const PI = 3.14;
export default function square(x) {
  return x * x;
}

//js
// use.js
import square, { PI } from './helper.js';
console.log(square(4), PI); // Output: 16 3.14

   

