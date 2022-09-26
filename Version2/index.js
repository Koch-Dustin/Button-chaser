const button = document.getElementById('content')

const sensor1 = document.getElementById('sensor1');
const sensor2 = document.getElementById('sensor2');
const sensor3 = document.getElementById('sensor3');
const sensor4 = document.getElementById('sensor4');
const sensor5 = document.getElementById('sensor5');
const sensor6 = document.getElementById('sensor6');
const sensor7 = document.getElementById('sensor7');
const sensor8 = document.getElementById('sensor8');

const sensor = document.getElementsByClassName("sensor");

const OFFSET = 100

document.addEventListener('mousemove', (e) => {
    if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
      setButtonPosition( buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10, 
      buttonBox.y + verticalOffset / verticalDistanceFrom * 10)
    }
})

function setButtonPosition(left, top) {
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = content.getBoundingClientRect()

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
