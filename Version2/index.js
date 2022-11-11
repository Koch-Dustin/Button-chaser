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
  const RightSideRightBorderCoordinateValue = -145;
  const RightSideLeftBorderCoordinateValue = -45;
  const RideSideUpperBorderCoordinateValue = -25;
  const RideSideLowerBorderCoordinateValue = 20;

  const mouseComesFromRightSide =
    horizontalDistanceFromButton >= RightSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton <= -RightSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton <= RideSideLowerBorderCoordinateValue &&
    verticalDistanceFromButton >= -RideSideUpperBorderCoordinateValue;
  if (mouseComesFromRightSide) {
    setButtonPosition(buttonBox.x - 100 * 6);
  }

  const LeftSideRightBorderCoordinateValue = 145;
  const leftSideLeftBorderCoordinateValue = 45;
  const LeftSideUpperBorderCoordinateValue = -25;
  const LeftSideLowerBorderCoordinateValue = 20;

  const mouseComesFromLeftSide =
    horizontalDistanceFromButton <= LeftSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton >= leftSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton <= LeftSideLowerBorderCoordinateValue &&
    verticalDistanceFromButton >= -LeftSideUpperBorderCoordinateValue;
  if (mouseComesFromLeftSide) {
    setButtonPosition(buttonBox.x - 100 * 5);
  }

  const TopSideRightBorderCoordinateValue = -70;
  const TopSideLeftBorderCoordinateValue = 67;
  const TopSideUpperBorderCoordinateValue = 72;
  const TopSideLowerBorderCoordinateValue = 18;

  const mouseComesFromTopSide =
    horizontalDistanceFromButton >= TopSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton <= TopSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton <= TopSideUpperBorderCoordinateValue &&
    verticalDistanceFromButton >= TopSideLowerBorderCoordinateValue;
  if (mouseComesFromTopSide) {
    setButtonPosition(0, buttonBox.y - 100 * 3);
  }

  const BottomSideRightBorderCoordinateValue = -70;
  const BottomSideLeftBorderCoordinateValue = 67;
  const BottomSideUpperBorderCoordinateValue = -72;
  const BottomSideLowerBorderCoordinateValue = -22;

  const mouseComesFromBottomSide =
    horizontalDistanceFromButton >= BottomSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton <= BottomSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton >= BottomSideUpperBorderCoordinateValue &&
    verticalDistanceFromButton <= BottomSideLowerBorderCoordinateValue;
  if (mouseComesFromBottomSide) {
    setButtonPosition(0, buttonBox.y - 100 * 4);
  }

  const TopRightSideRightBorderCoordinateValue = -70;
  const TopRightSideLeftBorderCoordinateValue = -145;
  const TopRightSideUpperBorderCoordinateValue = 70;
  const TopRightSideLowerBorderCoordinateValue = 20;

  const mouseComesFromTopRightSide =
    horizontalDistanceFromButton <= TopRightSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton >= TopRightSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton <= TopRightSideUpperBorderCoordinateValue &&
    verticalDistanceFromButton >= TopRightSideLowerBorderCoordinateValue;
  if (mouseComesFromTopRightSide) {
    setButtonPosition(buttonBox.x - 100 * 6, buttonBox.y - 100 * 3);
  }

  const BottomRightSideRightBorderCoordinateValue = -70;
  const BottomRightSideLeftBorderCoordinateValue = -145;
  const BottomRightSideUpperBorderCoordinateValue = -70;
  const BottomRightSideLowerBorderCoordinateValue = -25;

  const mouseComesFromBottomRightSide =
    horizontalDistanceFromButton <= BottomRightSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton >= BottomRightSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton >= BottomRightSideUpperBorderCoordinateValue &&
    verticalDistanceFromButton <= BottomRightSideLowerBorderCoordinateValue;
  if (mouseComesFromBottomRightSide) {
    setButtonPosition(buttonBox.x - 100 * 6, buttonBox.y - 100 * 4);
  }

  const BottomLeftSideRightBorderCoordinateValue = 66;
  const BottomLeftSideLeftBorderCoordinateValue = 144;
  const BottomLeftSideUpperBorderCoordinateValue = -70;
  const BottomLeftSideLowerBorderCoordinateValue = -25;

  const mouseComesFromBottomLeftSide =
    horizontalDistanceFromButton >= BottomLeftSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton <= BottomLeftSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton >= BottomLeftSideUpperBorderCoordinateValue &&
    verticalDistanceFromButton <= BottomLeftSideLowerBorderCoordinateValue;
  if (mouseComesFromBottomLeftSide) {
    setButtonPosition(buttonBox.x - 100 * 5, buttonBox.y - 100 * 4);
  }

  const TopLeftSideRightBorderCoordinateValue = 66;
  const TopLeftSideLeftBorderCoordinateValue = 144;
  const TopLeftSideUpperBorderCoordinateValue = 70;
  const TopLeftSideLowerBorderCoordinateValue = 20;

  const mouseComesFromTopLeftSide =
    horizontalDistanceFromButton >= TopLeftSideRightBorderCoordinateValue &&
    horizontalDistanceFromButton <= TopLeftSideLeftBorderCoordinateValue &&
    verticalDistanceFromButton <= TopLeftSideUpperBorderCoordinateValue &&
    verticalDistanceFromButton >= TopLeftSideLowerBorderCoordinateValue;
  if (mouseComesFromTopLeftSide) {
    setButtonPosition(buttonBox.x - 100 * 5, buttonBox.y - 100 * 3);
  }

  let xborder = buttonToChase.getBoundingClientRect().x;
  let yborder = buttonToChase.getBoundingClientRect().y;

  const ButtonHitsTheEndOfTheBrowserOnTheXCoordinate =
    xborder <= 0 || xborder >= 1660;
  const ButtonHitsTheEndOfTheBrowserOnTheYCoordinate =
    yborder <= 7 || yborder >= 900;

  ButtonHitsAnyEndOfTheBrowser =
    ButtonHitsTheEndOfTheBrowserOnTheXCoordinate ||
    ButtonHitsTheEndOfTheBrowserOnTheYCoordinate;
  if (ButtonHitsAnyEndOfTheBrowser) {
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
