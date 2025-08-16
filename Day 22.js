//1
const str = "hello";
console.log(str.split("").reverse().join(""));

//2
const word = "madam";
const isPalindrome = word === word.split("").reverse().join("");
console.log(isPalindrome); // true

//3
const sentence = "javascript is fun";
const capitalized = sentence
  .split(" ")
  .map(w => w[0].toUpperCase() + w.slice(1))
  .join(" ");
console.log(capitalized);

//4
const text = "beautiful day";
const vowels = text.match(/[aeiou]/gi).length;
console.log(vowels);


//5
const truncate = (str, len) => str.length > len ? str.slice(0, len) + "..." : str;
console.log(truncate("Hello JavaScript", 8));


