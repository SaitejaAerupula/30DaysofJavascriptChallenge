//1
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World!";
document.body.appendChild(newDiv);

//2
const box = document.createElement("div");
box.style.cssText = "width:100px; height:100px; background:red;";
document.body.appendChild(box);

//3
const btn = document.createElement("button");
btn.textContent = "Toggle Dark Mode";
document.body.appendChild(btn);
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


//4
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Form submitted!");
});

//5
const input = document.createElement("input");
const list = document.createElement("ul");
["Apple", "Banana", "Cherry"].forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});
document.body.append(input, list);

input.addEventListener("input", () => {
  const val = input.value.toLowerCase();
  [...list.children].forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(val) ? "" : "none";
  });
});
