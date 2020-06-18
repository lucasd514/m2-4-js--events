// Exercise 1.0
// ------------
console.log("exercise-1");

/// add variables

const container = document.querySelector("body");
const addp = document.createElement("p");
addp.id = "sentence";
container.style.height = "600px";
container.appendChild(addp);

const txt = document.getElementById("sentence");
///define the fucntion
function clickEvent() {
  sentence.innerText = "boom goes the D";
  container.removeEventListener("click", clickEvent);
}
/// add the clickevent
container.addEventListener("mousedown", clickEvent);
