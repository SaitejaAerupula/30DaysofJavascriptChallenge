//day 9
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
    
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);

    // This will print each fruit in the array
    
    }
//2
    //push & pop
    fruits.push("pineapple","grapes");
    fruits.pop();
    console.log(fruits); // This will print: ["apple", "banana", "cherry", "date", "elderberry", "pineapple"]
    
//3
//objects bascics

let book ={
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction"
};
console.log(`Title: ${book.title}, Author: ${book.author}`); // This will print: Title: To Kill a Mockingbird, Author: Harper Lee
console.log(`Year: ${book.year}, Genre: ${book.genre}`); // This will print: Year: 1960, Genre: Fiction

//4
// Day 9: JavaScript Object Properties
// This code demonstrates how to access and modify properties of an object in JavaScript.
//looping through objects
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

//array of objects
let library = [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
    { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 }
];  
for (let i = 0; i < library.length; i++) {
    console.log(`Title: ${library[i].title}, Author: ${library[i].author}, Year: ${library[i].year}`);
} // This will print each book's title, author, and year    
