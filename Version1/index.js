const button = document.getElementById("button");
const OFFSET = 100;

button.addEventListener("click", () => {
  alert("You won");
  window.close();
});

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const buttonBox = button.getBoundingClientRect();
  const horizontalDistanceFromButtonCenter = distanceFromCenter(
    buttonBox.x,
    x,
    buttonBox.width
  );
  const verticalDistanceFromButtonCenter = distanceFromCenter(
    buttonBox.y,
    y,
    buttonBox.height
  );
  const horizontalOffset = buttonBox.width / 2 + OFFSET;
  const verticalOffset = buttonBox.height / 2 + OFFSET;

  mouseHitsVerticalTriggerpoint =
    Math.abs(horizontalDistanceFromButtonCenter) <= horizontalOffset &&
    Math.abs(verticalDistanceFromButtonCenter) <= verticalOffset;
  if (mouseHitsVerticalTriggerpoint) {
    setButtonPosition(
      buttonBox.x +
        (horizontalOffset / horizontalDistanceFromButtonCenter) * 10,
      buttonBox.y + (verticalOffset / verticalDistanceFromButtonCenter) * 10
    );
  }
});

function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect();
  const buttonBox = button.getBoundingClientRect();

  buttonHitsLeftEdge =
    distanceFromCenter(left, windowBox.left, buttonBox.width) < 0;
  buttonHitsRightEdge =
    distanceFromCenter(left, windowBox.right, buttonBox.width) > 0;
  buttonHitsUpperEdge =
    distanceFromCenter(top, windowBox.top, buttonBox.height) < 0;
  buttonHitsLowerEdge =
    distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0;
  buttonHitsAnyEdge =
    buttonHitsLeftEdge ||
    buttonHitsRightEdge ||
    buttonHitsUpperEdge ||
    buttonHitsLowerEdge;

  if (buttonHitsAnyEdge) {
    left = window.innerWidth / 2;
    top = window.innerHeight / 2;

    return;
  }

  button.style.left = `${left}px`;
  button.style.top = `${top}px`;
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2;
}
