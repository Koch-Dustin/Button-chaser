const button = document.getElementById('button')
const div = document.getElementById('container')
const OFFSET = 100

button.addEventListener('click', () => {
  alert('You won')
  window.close()
})

div.addEventListener('mousemove', (e) => {
  // console.log("test");
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
    div.style.left = "400px"
    div.style.top = "400px"
  }

  if(divBox.x > window.innerWidth - 250) {
    div.style.left = "400px"
    div.style.top = "400px"
  }

  if(divBox.y < -170) {
    div.style.left = "400px"
    div.style.top = "400px"
  }

  if(divBox.y > window.innerHeight - 234) {
    div.style.left = "400px"
    div.style.top = "400px"
  }

  if((verticalDistanceFrom >= -80 && verticalDistanceFrom <= 80) && (horizontalDistanceFrom <= 160 && horizontalDistanceFrom >= -160)) {

    // if (testx < 0 && horizontalDistanceFrom > (-160)) {
    //   pushx = (-160) - testx;
    //   pushx = buttonBox.left + pushx;
    //   button.style.left = `${pushx}px`
    // }

    // if (testx > 0 && horizontalDistanceFrom < 160) {
    //   pushx = 160 - testx;
    //   pushx = buttonBox.left + pushx;
    //   button.style.left = `${pushx}px`
    // }

    // if (testy < 0 && verticalDistanceFrom > (-80)) {
    //   pushy = (-80) - testy;
    //   pushy = buttonBox.top + pushy;
    //   button.style.top = `${pushy}px`
    // }

    // if (testy > 0 && verticalDistanceFrom < 80) {
    //   pushy = 80 - testy;
    //   pushy = buttonBox.top + pushy;
    //   button.style.top = `${pushy}px`
    // }

    // console.log(pushx);

    // console.log(pushx);

    
    // buttonBox.style.left = `${pushx}px`
     
    // button.style.top = `${topPos}px`
    
    // _______________________________________________________________________________

    // pushy = buttonBox.y + verticalDistanceFrom - 320.5
    // if(pushy >= 80) {
    //   pushy = pushy - 80 * 2
    //   // pushy = pushy * (-1)
    // }else {
    //   // pushy = pushy * (-1)
    // }

    // pushx = buttonBox.x + horizontalDistanceFrom - 240
    // console.log(pushx)
    // if(pushx >= 160) {
    //   pushx = pushx - 160 * 2
    //   // pushx = pushx * (-1)
    // }else {
    //   // pushx = pushx * (-1)
    // }

    // leftPos = buttonBox.left + pushx;
    // topPos = buttonBox.top + pushy;

    // console.log("Left: " + leftPos);
    // console.log("Top: " + topPos);

    // button.style.left = `${leftPos}px`
    // button.style.top = `${topPos}px`

    // console.log("X: " + pushx)
    // console.log("Y: " + pushy)

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
