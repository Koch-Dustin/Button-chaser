const button = document.getElementById('button')
const div = document.getElementById('container')

button.addEventListener('click', () => {
  alert('You won')
  window.close()
})

div.addEventListener('mousemove', (e) => {
  
  const x = e.pageX
  const y = e.pageY
  const buttonBox = button.getBoundingClientRect()
  const divBox = div.getBoundingClientRect()
  const horizontalDistanceFrom = distanceFromCenter(divBox.x, x, divBox.width)
  const verticalDistanceFrom = distanceFromCenter(divBox.y, y, divBox.height)

  testy = verticalDistanceFrom
  testx = horizontalDistanceFrom

  if (testx != 0) {
    if (testx > 0)
      pushx = divBox.x + 10;
    else
      pushx = divBox.x - 10;
    div.style.left = `${pushx}px`;
  }

  if (testy != 0) {
    if (testy > 0)
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

function setButtonPosition(left, top) {
  const windowBox = document.body.getBoundingClientRect()
  const buttonBox = button.getBoundingClientRect()

  if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
    left = window.innerWidth / 2
    top = window.innerHeight / 2
  }

  if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
    left = window.innerWidth / 2
    top = window.innerHeight / 2
  }

  if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
    left = window.innerWidth / 2
    top = window.innerHeight / 2
  }
  
  if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
    left = window.innerWidth / 2
    top = window.innerHeight / 2
  }

  button.style.left = `${left}px`
  button.style.top = `${top}px`
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2
}
