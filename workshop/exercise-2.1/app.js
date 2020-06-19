console.log("hello");

const container = document.querySelector("body");
const button = document.createElement("button");
// const test = document.createElement("p");
// container.appendChild(test);

const number = 20;

for (i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.classList = i;
  button.style.backgroundColor = "rgb(240, 188, 66)";
  function onClick() {
    button.style.backgroundColor = "rgb(134,38,51)";
  }
  button.addEventListener("mousedown", onClick);

  //   button.addEventListener(
  //     "click",
  //     () => (button.style.backgroundColor = "green")
  //   );
  container.appendChild(button);
}

button.style.backgroundColor = "rgb(134,38,51)";

// function onClick() {
//   console.log("click");
//   button.style.backgroundColor = "rgb(134,38,51)";
// }

// document.addEventListener("mousedown", onClick);
