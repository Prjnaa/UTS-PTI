let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

const arrowKeys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

window.addEventListener("keydown", (e) => {
  if (arrowKeys.includes(e.key)) {
    inputDirection = { x: 0, y: 0 };
    switch (e.key) {
      case "ArrowUp":
        inputDirection.y = -1;
        break;
      case "ArrowDown":
        inputDirection.y = 1;
        break;
      case "ArrowLeft":
        inputDirection.x = -1;
        break;
      case "ArrowRight":
        inputDirection.x = 1;
        break;
    }
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
