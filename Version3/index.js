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
  Distancey = verticalDistanceFrom
  Distancex = horizontalDistanceFrom

  if (Distancex != 0) {
    if (Distancex > 0)
      pushx = divBox.x + 10;
    else
      pushx = divBox.x - 10;
    div.style.left = `${pushx}px`;
  }

  if (Distancey != 0) {
    if (Distancey > 0)
      pushy = divBox.y + 10;
    else 
      pushy = divBox.y - 10;
    div.style.top = `${pushy}px`;
  }

  if(divBox.x < -120) {
    div.style.left = "40%"
    div.style.top = "30%"
  }

  if(divBox.x > window.innerWidth - 250) {
    div.style.left = "40%"
    div.style.top = "30%"
  }

  if(divBox.y < -170) {
    div.style.left = "40%"
    div.style.top = "30%"
  }

  if(divBox.y > window.innerHeight - 234) {
    div.style.left = "400px"
    div.style.top = "400px"
  }
})

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2
}
