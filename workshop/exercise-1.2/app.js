// Exercise 1.2
// ------------
console.log("exercise 1.2");
const clock = Math.round(Math.random() * 5);
console.log(clock);
const container = document.querySelector("body");
time.innerText = clock + " seconds";
const MSG = document.createElement("h1");
let clicked = false;

function click() {
  MSG.innerText = "yerrrrrrrrr";
  container.appendChild(MSG);
  clicked = true;
  console.log(clicked);
}

container.addEventListener("mousedown", click);

function nahtho() {
  if (clicked === false) {
    container.appendChild(MSG);
    clicked = false;
    MSG.innerText = "JAJAJAJA 2 SLOW 4 da DOUGH KKKKkk";
    console.log(clicked);
    container.removeEventListener("mousedown", click);
  }
}

setTimeout(nahtho, clock + "000");
