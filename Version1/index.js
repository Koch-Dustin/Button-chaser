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
  const horizontalDistanceFromButtonCenter = getDistanceFromCenter(
    buttonBox.x,
    x,
    buttonBox.width
  );
  const verticalDistanceFromButtonCenter = getDistanceFromCenter(
    buttonBox.y,
    y,
    buttonBox.height
  );
  const horizontalOffset = buttonBox.width / 2 + OFFSET;
  const verticalOffset = buttonBox.height / 2 + OFFSET;

  const mouseHitsVerticalTriggerpoint =
    Math.abs(horizontalDistanceFromButtonCenter) <= horizontalOffset &&
    Math.abs(verticalDistanceFromButtonCenter) <= verticalOffset;

  var verticalDistance = horizontalOffset / horizontalDistanceFromButtonCenter;
  var multipliedVerticalDistance = verticalDistance * 10;

  var horizontalDistance = verticalOffset / verticalDistanceFromButtonCenter;
  var multipliedHorizontalDistance = horizontalDistance * 10;

  offSetToMoveButtonXCoordinate = buttonBox.x + multipliedVerticalDistance;
  offSetToMoveButtonYCoordinate = buttonBox.y + multipliedHorizontalDistance;
  if (mouseHitsVerticalTriggerpoint) {
    setButtonPosition(
      offSetToMoveButtonXCoordinate,
      offSetToMoveButtonYCoordinate
    );
  }
});

function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect();
  const buttonBox = button.getBoundingClientRect();

  const buttonHitsLeftEdge =
    getDistanceFromCenter(left, windowBox.left, buttonBox.width) < 0;
  const buttonHitsRightEdge =
    getDistanceFromCenter(left, windowBox.right, buttonBox.width) > 0;
  const buttonHitsUpperEdge =
    getDistanceFromCenter(top, windowBox.top, buttonBox.height) < 0;
  const buttonHitsLowerEdge =
    getDistanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0;
  const buttonHitsAnyEdge =
    buttonHitsLeftEdge ||
    buttonHitsRightEdge ||
    buttonHitsUpperEdge ||
    buttonHitsLowerEdge;

  if (buttonHitsAnyEdge) {
    left = window.innerWidth / 2;
    top = window.innerHeight / 2;

    button.style.left = `${left}px`;
    button.style.top = `${top}px`;
  }
}

function getDistanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2;
}
