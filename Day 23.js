//1
const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
});
promise.then(console.log);

//2
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log(data));


  //3
  async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();
  console.log(data);
}
getData();

//4
Promise.all([
  fetch("https://jsonplaceholder.typicode.com/posts/1"),
  fetch("https://jsonplaceholder.typicode.com/posts/2")
])
.then(responses => Promise.all(responses.map(r => r.json())))
.then(data => console.log(data));


//5
const delay = ms => new Promise(res => setTimeout(res, ms));
delay(2000).then(() => console.log("Waited 2s"));
