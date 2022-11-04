const button = document.getElementById('button')
const div = document.getElementById('container')

button.addEventListener('click', () => {
  alert('You won')
  window.close()
})

div.addEventListener('mousemove', (e) => {
  const x = e.pageX
  const y = e.pageY
  const divBox = div.getBoundingClientRect()
  const horizontalDistanceFrom = distanceFromCenter(divBox.x, x, divBox.width)
  const verticalDistanceFrom = distanceFromCenter(divBox.y, y, divBox.height)
  const rightEdge = window.innerWidth - 250;
  const leftEdge = -120;
  const upperEdge= -170;
  const lowerEdge = window.innerHeight - 234;
  let pushX;
  let pushY;

  if (horizontalDistanceFrom != 0) {
    if (horizontalDistanceFrom > 0)
      pushX = divBox.x + 10;
    else
      pushX = divBox.x - 10;
    div.style.left = `${pushX}px`;
  }

  if (verticalDistanceFrom != 0) {
    if (verticalDistanceFrom > 0)
      pushY = divBox.y + 10;
    else 
      pushY = divBox.y - 10;
    div.style.top = `${pushY}px`;
  }

  buttonHitsLeftEdge = divBox.x < leftEdge
  if(buttonHitsLeftEdge) {
    div.style.left = "40%"
    div.style.top = "30%"
  }

  buttonHitsRightEdge = divBox.x > rightEdge;
  if(buttonHitsRightEdge) {
    div.style.left = "40%"
    div.style.top = "30%"
  }

  buttonHitsUpperEdge = divBox.y < upperEdge;
  if(buttonHitsUpperEdge) {
    div.style.left = "40%"
    div.style.top = "30%"
  }

  buttonHitsLowerEdge = divBox.y > lowerEdge
  if(buttonHitsLowerEdge) {
    div.style.left = "400px"
    div.style.top = "400px"
  }
})

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2
}
