console.log("hello");

const container = document.querySelector("body");
const buttonfolder = [];
// const test = document.createElement("p");
// container.appendChild(test);

let clicked = false;
const number = 20;
function onClick(event) {
  console.log(clicked);
  if (clicked === false) {
    event.target.style.backgroundColor = "rgb(134,38,51)";
    clicked = true;
    console.log(clicked);
  } else {
    event.target.style.backgroundColor = "rgb(240, 188, 66)";
    clicked = false;
    console.log(clicked);
  }
  return clicked;
}

function removeAllEventListeners() {
  buttonfolder.forEach(function (button) {
    button.removeEventListener("mousdown", onClick);
  });
}

for (i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.id = "btn" + i;
  button.style.backgroundColor = "rgb(240, 188, 66)";
  button.addEventListener("mousedown", onClick);
  container.appendChild(button);
  buttonfolder.push(button);
}

// when game ends make sure to use removeAllEventListeners()
