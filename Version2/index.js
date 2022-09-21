let button = document.getElementById('button');
const OFFSET = 100

left = button.style.left;
top = button.style.top;

button.addEventListener('mousemove', function() {
        button.style.left = "250px"
        button.style.top = "70px"
})

document.addEventListener('mousemove', (e) => {
    const x = e.pageX
    const y = e.pageY
    const buttonBox = button.getBoundingClientRect()
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)

    button_from_right = (horizontalDistanceFrom >= -145 && horizontalDistanceFrom <= -45) && (verticalDistanceFrom <= 20 && verticalDistanceFrom >= -25);
    if(button_from_right) {
        console.log("Rechts")
        set_button_position(buttonBox.x - (100 * 6))
    }

    button_from_left = (horizontalDistanceFrom <= 145 && horizontalDistanceFrom >= 45) && (verticalDistanceFrom <= 20 && verticalDistanceFrom >= -25);
    if(button_from_left) {
        console.log("Links")
        set_button_position(buttonBox.x - (100 * 5))
    }

    button_from_top = (horizontalDistanceFrom >= -70 && horizontalDistanceFrom <= 67) && (verticalDistanceFrom <= 72 && verticalDistanceFrom >= 18);
    if(button_from_top) {
        console.log("Oben")
        set_button_position(0 , buttonBox.y - (100 * 3))
    }

    button_from_bottom = (horizontalDistanceFrom >= -70 && horizontalDistanceFrom <= 67) && (verticalDistanceFrom >= -72 && verticalDistanceFrom <= -22);
    if(button_from_bottom) {
        set_button_position(0 , buttonBox.y - (100 * 4))
    }

    button_from_top_right = (horizontalDistanceFrom <= -70 && horizontalDistanceFrom >= -145) && (verticalDistanceFrom <= 70 && verticalDistanceFrom >= 20);
    if(button_from_top_right) {
        set_button_position(buttonBox.x - (100 * 6) , buttonBox.y - (100 * 3))
    }

    button_from_bottom_right = (horizontalDistanceFrom <= -70 && horizontalDistanceFrom >= -145) && (verticalDistanceFrom >= -70 && verticalDistanceFrom <= -25);
    if(button_from_bottom_right) {
        set_button_position(buttonBox.x - (100 * 6) , buttonBox.y - (100 * 4))
    }

    button_from_bottom_left = (horizontalDistanceFrom >= 66 && horizontalDistanceFrom <= 144) && (verticalDistanceFrom >= -70 && verticalDistanceFrom <= -25);
    if(button_from_bottom_left) {
        set_button_position(buttonBox.x - (100 * 5) , buttonBox.y - (100 * 4))
    }

    button_from_top_left = (horizontalDistanceFrom >= 66 && horizontalDistanceFrom <= 144) && (verticalDistanceFrom <= 70 && verticalDistanceFrom >= 20);
    if(button_from_top_left) {
        set_button_position(buttonBox.x - (100 * 5) , buttonBox.y - (100 * 3))
    }
    
    let xborder = button.getBoundingClientRect().x
    let yborder = button.getBoundingClientRect().y

    console.log(xborder)

    if (xborder <= 0 || xborder >= 1660) {
        button.style.left = "250px"
        button.style.top = "70px"
    }

    console.log(yborder)

    if (yborder <= 7 || yborder >= 900) {
        button.style.left = "250px"
        button.style.top = "70px"
    }

})

function set_button_position(left, top) {
    
    
    button.style.left = `${left}px`
    button.style.top = `${top}px`

    left = left;
    top = top;
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
}