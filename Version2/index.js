let buttonToChase = document.getElementById("button");
const OFFSET = 100;

const left = buttonToChase.style.left;
const top = buttonToChase.style.top;

button.addEventListener("mousemove", function () {
  buttonToChase.style.left = "250px";
  buttonToChase.style.top = "70px";
});

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  const buttonBox = buttonToChase.getBoundingClientRect();

  const horizontalDistanceFromButton = getDistanceFromCenter(
    buttonBox.x,
    x,
    buttonBox.width
  );
  const verticalDistanceFromButton = getDistanceFromCenter(
    buttonBox.y,
    y,
    buttonBox.height
  );
  const rightSideRightBorderCoordinateValue = -145;
  const rightSideLeftBorderCoordinateValue = -45;
  const rideSideUpperBorderCoordinateValue = -25;
  const rideSideLowerBorderCoordinateValue = 20;

  const mouseComesFromRightSide =
    horizontalDistanceFromButton >= rightSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton <= -rightSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton <= rideSideLowerBorderCoordinateValue &&
    verticalDistanceFromButton >= -rideSideUpperBorderCoordinateValue;
  if (mouseComesFromRightSide) {
    setButtonPosition(buttonBox.x - 100 * 6);
  }

  const leftSideRightBorderCoordinateValue = 145;
  const leftSideLeftBorderCoordinateValue = 45;
  const leftSideUpperBorderCoordinateValue = -25;
  const leftSideLowerBorderCoordinateValue = 20;

  const mouseComesFromLeftSide =
    horizontalDistanceFromButton <= leftSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton >= leftSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton <= leftSideLowerBorderCoordinateValue &&
    verticalDistanceFromButton >= -leftSideUpperBorderCoordinateValue;
  if (mouseComesFromLeftSide) {
    setButtonPosition(buttonBox.x - 100 * 5);
  }

  const topSideRightBorderCoordinateValue = -70;
  const topSideLeftBorderCoordinateValue = 67;
  const topSideUpperBorderCoordinateValue = 72;
  const topSideLowerBorderCoordinateValue = 18;

  const mouseComesFromTopSide =
    horizontalDistanceFromButton >= topSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton <= topSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton <= topSideUpperBorderCoordinateValue &&
    verticalDistanceFromButton >= topSideLowerBorderCoordinateValue;
  if (mouseComesFromTopSide) {
    setButtonPosition(0, buttonBox.y - 100 * 3);
  }

  const bottomSideRightBorderCoordinateValue = -70;
  const bottomSideLeftBorderCoordinateValue = 67;
  const bottomSideUpperBorderCoordinateValue = -72;
  const bottomSideLowerBorderCoordinateValue = -22;

  const mouseComesFromBottomSide =
    horizontalDistanceFromButton >= bottomSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton <= bottomSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton >= bottomSideUpperBorderCoordinateValue &&
    verticalDistanceFromButton <= bottomSideLowerBorderCoordinateValue;
  if (mouseComesFromBottomSide) {
    setButtonPosition(0, buttonBox.y - 100 * 4);
  }

  const topRightSideRightBorderCoordinateValue = -70;
  const topRightSideLeftBorderCoordinateValue = -145;
  const topRightSideUpperBorderCoordinateValue = 70;
  const topRightSideLowerBorderCoordinateValue = 20;

  const mouseComesFromTopRightSide =
    horizontalDistanceFromButton <= topRightSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton >= topRightSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton <= topRightSideUpperBorderCoordinateValue &&
    verticalDistanceFromButton >= topRightSideLowerBorderCoordinateValue;
  if (mouseComesFromTopRightSide) {
    setButtonPosition(buttonBox.x - 100 * 6, buttonBox.y - 100 * 3);
  }

  const bottomRightSideRightBorderCoordinateValue = -70;
  const bottomRightSideLeftBorderCoordinateValue = -145;
  const bottomRightSideUpperBorderCoordinateValue = -70;
  const bottomRightSideLowerBorderCoordinateValue = -25;

  const mouseComesFromBottomRightSide =
    horizontalDistanceFromButton <= bottomRightSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton >= bottomRightSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton >= bottomRightSideUpperBorderCoordinateValue &&
    verticalDistanceFromButton <= bottomRightSideLowerBorderCoordinateValue;
  if (mouseComesFromBottomRightSide) {
    setButtonPosition(buttonBox.x - 100 * 6, buttonBox.y - 100 * 4);
  }

  const bottomLeftSideRightBorderCoordinateValue = 66;
  const bottomLeftSideLeftBorderCoordinateValue = 144;
  const bottomLeftSideUpperBorderCoordinateValue = -70;
  const bottomLeftSideLowerBorderCoordinateValue = -25;

  const mouseComesFromBottomLeftSide =
    horizontalDistanceFromButton >= bottomLeftSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton <= bottomLeftSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton >= bottomLeftSideUpperBorderCoordinateValue &&
    verticalDistanceFromButton <= bottomLeftSideLowerBorderCoordinateValue;
  if (mouseComesFromBottomLeftSide) {
    setButtonPosition(buttonBox.x - 100 * 5, buttonBox.y - 100 * 4);
  }

  const topLeftSideRightBorderCoordinateValue = 66;
  const topLeftSideLeftBorderCoordinateValue = 144;
  const topLeftSideUpperBorderCoordinateValue = 70;
  const topLeftSideLowerBorderCoordinateValue = 20;

  const mouseComesFromTopLeftSide =
    horizontalDistanceFromButton >= topLeftSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton <= topLeftSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton <= topLeftSideUpperBorderCoordinateValue &&
    verticalDistanceFromButton >= topLeftSideLowerBorderCoordinateValue;
  if (mouseComesFromTopLeftSide) {
    setButtonPosition(buttonBox.x - 100 * 5, buttonBox.y - 100 * 3);
  }

  let xborder = buttonToChase.getBoundingClientRect().x;
  let yborder = buttonToChase.getBoundingClientRect().y;

  const buttonHitsTheEndOfTheBrowserOnTheXCoordinate =
    xborder <= 0 || xborder >= 1660;
  const buttonHitsTheEndOfTheBrowserOnTheYCoordinate =
    yborder <= 7 || yborder >= 900;

  const buttonHitsAnyEndOfTheBrowser =
    buttonHitsTheEndOfTheBrowserOnTheXCoordinate ||
    buttonHitsTheEndOfTheBrowserOnTheYCoordinate;
  if (buttonHitsAnyEndOfTheBrowser) {
    buttonToChase.style.left = "250px";
    buttonToChase.style.top = "70px";
  }
});

function setButtonPosition(left, top) {
  buttonToChase.style.left = `${left}px`;
  buttonToChase.style.top = `${top}px`;
}

function getDistanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2;
}
