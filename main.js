/* eslint-disable no-unused-vars */
function factory(speed, heading, location, marker) {
  var init = false

  return {
    currentLocation: function () {
      return location
    },
    currentHeading: function () {
      return heading
    },
    currentMarker: function () {
      return marker
    },
    currentSpeed: function () {
      return speed
    },
    faster: function (increase) {
      speed = speed + increase
    },
    slower: function (decrease) {
      speed = speed - decrease
    },
    move: function () {
      document.onkeydown = function (event) {
        switch (event.keyCode) {
          case 37: // Left arrow
            location.left = location.left - speed
            if (marker) marker.style.left = location.left + 'px'
            break
          case 38: // Up arrow
            location.top = location.top - speed
            if (marker) marker.style.top = location.top + 'px'
            break
          case 39: // Right arrow
            location.left = location.left + speed
            if (marker) marker.style.left = location.left + 'px'
            break
          case 40: // Down arrow
            location.top = location.top + speed
            if (marker) marker.style.top = location.top + 'px'
            break
        }
      }
    },
    initialize: function () {
      if (!init) {
        marker.style.top = location.top + 'px'
        marker.style.left = location.left + 'px'
        init = true
      }
    }
  }
}

var $car = factory(
  3,
  'all',
  { top: 100, left: 0 },
  document.getElementById('car')
)
$car.initialize()
$car.move()
setInterval($car.move, 100)
