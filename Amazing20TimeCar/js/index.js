
var taxi = document.getElementById('car'),
    moveLeft = document.getElementById('left'),
    moveRight = document.getElementById('right'),
    moveUp = document.getElementById('up'),
    moveDown = document.getElementById('down'),
    //setFriction = document.getElemntById('setFriction'),
    reqID,
    direction;


    /*function setFriction() {
        var friction = prompt "Set your coefficient of friction (0.0-1.0): ";
        if (friction != null) {
            document.getElementById("demo").innerHTML =
            "you have selected " + friction;
        }

    }*/

//Other car
var car = document.getElementById('car2'),
      stopTime,
      Velocity2;

function DetVelocity() {
    Velocity2 = 0.05;

}

function changeDirection(arrow) {
  direction = arrow;
}

function startMoving() {
  if (direction === 'right') {
    taxi.style.left = (taxi.offsetLeft += 2) + 'px';
  } else if (direction === 'left') {
    taxi.style.left = (taxi.offsetLeft -= 2) + 'px';
  } else if (direction === 'up') {
    taxi.style.top = (taxi.offsetTop -= 2) + 'px';
  } else if (direction === 'down') {
    taxi.style.top = (taxi.offsetTop += 2) + 'px';
  }

  // tells the browser to keep running the car 60 frames per second.
  reqID = window.requestAnimationFrame(startMoving);
}

function stopMoving() {
  // cancel requestAnimationFrame function to stop moving.
  window.cancelAnimationFrame(reqID);
}


// EventListener Mousedown
moveUp.addEventListener('mousedown', function() {
  changeDirection('up');
  startMoving();
});
moveUp.addEventListener('mouseup', stopMoving);

moveDown.addEventListener('mousedown', function() {
  changeDirection('down');
  startMoving();
});
moveDown.addEventListener('mouseup', stopMoving);

moveLeft.addEventListener('mousedown', function() {
  changeDirection('left');
  startMoving();
});
moveLeft.addEventListener('mouseup', stopMoving);

moveRight.addEventListener('mousedown', function() {
  changeDirection('right');
  startMoving();
});
moveRight.addEventListener('mouseup', stopMoving);
