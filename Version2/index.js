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

    // sensor1.style.left = `${left}px`
    // sensor1.style.top = `${top}px`

    // sensor2.style.left = `${left}px`
    // sensor2.style.top = `${top}px`

    // sensor3.style.left = `${left}px`
    // sensor3.style.top = `${top}px`

    // sensor4.style.left = `${left}px`
    // sensor4.style.top = `${top}px`

    // sensor5.style.left = `${left}px`
    // sensor5.style.top = `${top}px`

    // sensor6.style.left = `${left}px`
    // sensor6.style.top = `${top}px`

    // sensor7.style.left = `${left}px`
    // sensor7.style.top = `${top}px`

    // sensor8.style.left = `${left}px`
    // sensor8.style.top = `${top}px`

}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
}

function trigger_sensor(sensor) {
    if(sensor) {
        sensor = false;
        return sensor;
    }else {
        sensor = true;
        return sensor;
    }
    return sensor;
}

function register_move(sensornumber) {
    if(sensornumber == 1) {
        trigger_sensor(sensor1);
        if(trigger_sensor() == false) {
            
        }
    }
    if(sensornumber == 2) {}
    if(sensornumber == 3) {}
    if(sensornumber == 4) {}
    if(sensornumber == 5) {}
    if(sensornumber == 6) {}
    if(sensornumber == 7) {}
    if(sensornumber == 8) {}
}