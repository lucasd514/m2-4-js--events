const balloon = document.getElementById("balloon");
let balloonSize = 12;
balloon.style.fontSize = balloonSize + "px";
const RATE = 5;
const LIMIT = 75;
function modifyBalloonSize(effect) {
  balloonSize = effect === "more" ? balloonSize + RATE : balloonSize - RATE;
  if (balloonSize > LIMIT) {
    document.removeEventListener("keydown", handleKeydown);
    balloon.innerText = ":boom:";
    const explosion = setInterval(function () {
      balloonSize += 50;
      balloon.style.fontSize = balloonSize + "px";
      if (balloonSize > 1000) {
        balloon.style.opacity = 0;
        clearInterval(explosion);
      }
    }, 20);
  }
  balloon.style.fontSize = balloonSize + "px";
}
function handleKeydown(event) {
  const keyPress = event.key;
  if (keyPress === "ArrowUp") {
    modifyBalloonSize("more");
  } else if (keyPress === "ArrowDown") {
    modifyBalloonSize("less");
  }
}
document.addEventListener("keydown", handleKeydown);
