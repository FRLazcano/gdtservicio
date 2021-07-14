document.body.addEventListener("touchstart", startTouch, false);
document.body.addEventListener("touchmove", moveTouch, false);

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};

function moveTouch(e) {
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;

  var diffX = initialX - currentX;
  var diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      // swiped left
      alert("swiped left");
    } else {
      // swiped right
      alert("swiped right");
    }
  } else {
    // sliding vertically
    if (diffY > 0) {
      // swiped up
      alert("swiped up");
    } else {
      // swiped down
      alert("swiped down");
    }
  }

  initialX = null;
  initialY = null;

  e.preventDefault();
};
