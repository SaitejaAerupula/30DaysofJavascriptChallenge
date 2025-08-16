//1 storage api
localStorage.setItem("name", "John");

//2 retrieve data
const name = localStorage.getItem("name");

console.log(name); // John

//3 remove data
localStorage.removeItem("name");
//4 save object

localStorage.setItem("user", JSON.stringify({ id: 1, name: "Alice" }));

//5 get object from storage
const user = JSON.parse(localStorage.getItem("user"));
console.log(user); // { id: 1, name: "Alice" }

