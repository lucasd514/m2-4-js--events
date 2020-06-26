console.log("hello");
// Numbers we need
const container = document.querySelector("#main");
const number = 20;

// boolean
// let clicked = false;

function clickButton(event) {
  if (event.target.style.backgroundColor === "rgb(240, 188, 66)") {
    event.target.style.backgroundColor = "rgb(134,38,51)";
    button.removeEventListener("click", onClick);
    // clicked = true;
  } else {
    event.target.style.backgroundColor = "rgb(240, 188, 66)";
    button.removeEventListener("click", onClick);
  }
  return clicked;
}
// //remove event listener
// function removeAllEventListeners() {
//   buttonfolder.forEach(function (button) {
//     button.removeEventListener("click", onClick);
//   });
// }

// boucle
for (i = 1; i <= number; i++) {
  // random numbers
  const randomN1 = Math.round(Math.random() * 800);
  const randomN2 = Math.round(Math.random() * 1200);

  // button elements
  const button = document.createElement("button");
  button.innerText = i;
  button.id = "btn" + i;
  button.style.top = randomN1 + "px";
  button.style.left = randomN2 + "px";
  button.style.backgroundColor = "rgb(240, 188, 66)";
  button.addEventListener("click", clickButton);
  container.appendChild(button);
}
