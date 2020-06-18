// Exercise 1.1
// ------------
console.log("exercise 1.1");

const container = document.querySelector("body");

const p1 = document.createElement("p");
p1.id = "faster";
p1.innerText = "YERRRRRRRRRRR click faster";
container.appendChild(p1);
const BIG = document.createElement("h1");
let clicked = false;

function onClick() {
  console.log("yerrrrrrr");
  BIG.innerText = "GG Homey";
  container.appendChild(BIG);
  clicked = true;
}

container.addEventListener("mousedown", onClick);

function noClick() {
  if (clicked === false) {
    console.log("yerrrrrrr");
    BIG.innerText = "GTFO WASTEMANssssz";
    clicked = false;
    console.log(clicked);
    container.appendChild(BIG);
    container.removeEventListener("mousedown", onClick);
  }
}

setTimeout(noClick, 1000);
