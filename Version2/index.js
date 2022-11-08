let buttonToChase = document.getElementById("button");
const OFFSET = 100;

left = buttonToChase.style.left;
top = buttonToChase.style.top;

button.addEventListener("mousemove", function () {
  buttonToChase.style.left = "250px";
  buttonToChase.style.top = "70px";
});

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const buttonBox = buttonToChase.getBoundingClientRect();

  const horizontalDistanceFromButton = distanceFromCenter(
    buttonBox.x,
    x,
    buttonBox.width
  );
  const verticalDistanceFromButton = distanceFromCenter(
    buttonBox.y,
    y,
    buttonBox.height
  );

  const mouseComesFromRightSide =
    horizontalDistanceFromButton >= -145 &&
    horizontalDistanceFromButton <= -45 &&
    verticalDistanceFromButton <= 20 &&
    verticalDistanceFromButton >= -25;
  if (mouseComesFromRightSide) {
    setButtonPosition(buttonBox.x - 100 * 6);
  }

  const mouseComesFromLeftSide =
    horizontalDistanceFromButton <= 145 &&
    horizontalDistanceFromButton >= 45 &&
    verticalDistanceFromButton <= 20 &&
    verticalDistanceFromButton >= -25;
  if (mouseComesFromLeftSide) {
    setButtonPosition(buttonBox.x - 100 * 5);
  }

  const mouseComesFromTopSide =
    horizontalDistanceFromButton >= -70 &&
    horizontalDistanceFromButton <= 67 &&
    verticalDistanceFromButton <= 72 &&
    verticalDistanceFromButton >= 18;
  if (mouseComesFromTopSide) {
    setButtonPosition(0, buttonBox.y - 100 * 3);
  }

  const mouseComesFromBottomSide =
    horizontalDistanceFromButton >= -70 &&
    horizontalDistanceFromButton <= 67 &&
    verticalDistanceFromButton >= -72 &&
    verticalDistanceFromButton <= -22;
  if (mouseComesFromBottomSide) {
    setButtonPosition(0, buttonBox.y - 100 * 4);
  }

  const mouseComesFromTopRightSide =
    horizontalDistanceFromButton <= -70 &&
    horizontalDistanceFromButton >= -145 &&
    verticalDistanceFromButton <= 70 &&
    verticalDistanceFromButton >= 20;
  if (mouseComesFromTopRightSide) {
    setButtonPosition(buttonBox.x - 100 * 6, buttonBox.y - 100 * 3);
  }

  const mouseComesFromBottomRightSide =
    horizontalDistanceFromButton <= -70 &&
    horizontalDistanceFromButton >= -145 &&
    verticalDistanceFromButton >= -70 &&
    verticalDistanceFromButton <= -25;
  if (mouseComesFromBottomRightSide) {
    setButtonPosition(buttonBox.x - 100 * 6, buttonBox.y - 100 * 4);
  }

  const mouseComesFromBottomLeftSide =
    horizontalDistanceFromButton >= 66 &&
    horizontalDistanceFromButton <= 144 &&
    verticalDistanceFromButton >= -70 &&
    verticalDistanceFromButton <= -25;
  if (mouseComesFromBottomLeftSide) {
    setButtonPosition(buttonBox.x - 100 * 5, buttonBox.y - 100 * 4);
  }

  const mouseComesFromTopLeftSide =
    horizontalDistanceFromButton >= 66 &&
    horizontalDistanceFromButton <= 144 &&
    verticalDistanceFromButton <= 70 &&
    verticalDistanceFromButton >= 20;
  if (mouseComesFromTopLeftSide) {
    setButtonPosition(buttonBox.x - 100 * 5, buttonBox.y - 100 * 3);
  }

  let xborder = buttonToChase.getBoundingClientRect().x;
  let yborder = buttonToChase.getBoundingClientRect().y;

  const ButtonHitsTheEndOfTheBrowserOnTheXCoordinate = xborder <= 0 || xborder >= 1660
  if (ButtonHitsTheEndOfTheBrowserOnTheXCoordinate) {
    buttonToChase.style.left = "250px";
    buttonToChase.style.top = "70px";
  }

  const ButtonHitsTheEndOfTheBrowserOnTheYCoordinate = yborder <= 7 || yborder >= 900
  if (ButtonHitsTheEndOfTheBrowserOnTheYCoordinate) {
    buttonToChase.style.left = "250px";
    buttonToChase.style.top = "70px";
  }
});

function setButtonPosition(left, top) {
  buttonToChase.style.left = `${left}px`;
  buttonToChase.style.top = `${top}px`;

  left = left;
  top = top;
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2;
}
