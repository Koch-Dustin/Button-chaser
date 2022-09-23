const button = document.getElementById('button')
const OFFSET = 100

button.addEventListener('click', () => {
  alert('You won')
  window.close()
})

document.addEventListener('mousemove', (e) => {
  const x = e.pageX
  const y = e.pageY
  const buttonBox = button.getBoundingClientRect()
  const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
  const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)

  testy = verticalDistanceFrom
  testx = horizontalDistanceFrom

  if((verticalDistanceFrom >= -80 && verticalDistanceFrom <= 80) && (horizontalDistanceFrom <= 160 && horizontalDistanceFrom >= -160)) {
    console.log("X: " + testx)
    console.log("Y: " + testy)
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