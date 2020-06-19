console.log("hello");

const container = document.querySelector("body");
// const test = document.createElement("p");
// container.appendChild(test);

const number = 20;
function onClick(event) {
  console.log(event.target);
  event.target.style.backgroundColor = "rgb(134,38,51)";
}
for (i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.classList = i;
  button.style.backgroundColor = "rgb(240, 188, 66)";
  button.addEventListener("mousedown", onClick);
  container.appendChild(button);
}

button.style.backgroundColor = "rgb(134,38,51)";

// function onClick() {
//   console.log("click");
//   button.style.backgroundColor = "rgb(134,38,51)";
// }

// document.addEventListener("mousedown", onClick);
