//1 create list dynamically

const ul = document.createElement("ul");
["Apple", "Banana"].forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
document.body.appendChild(ul);

//2 event delegation
document.body.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    alert(`You clicked ${e.target.textContent}`);
  }
});


//3 add item to list
function addItem(text) {
  const li = document.createElement("li");
  li.textContent = text;
  document.querySelector("ul").appendChild(li);
}
addItem("Cherry");


//4 remove item from list
document.querySelector("ul").addEventListener("dblclick", e => {
  if (e.target.tagName === "LI") e.target.remove();
});

//5 toggle class on click
document.querySelector("ul").addEventListener("mouseover", e => {
  if (e.target.tagName === "LI") e.target.style.background = "yellow";
});
document.querySelector("ul").addEventListener("mouseout", e => {
  if (e.target.tagName === "LI") e.target.style.background = "";
});