function proto(location, direction, speed, marker) {
  return {
    getSpeed: () => speed,
    getDirection: () => direction,
    getLocation: () => location,
    getMarker: () => marker,
    faster: delta => (speed += delta),
    slower: delta => (speed -= delta),

    updateDirection: function (deg) {
      marker.style.transform += `rotate(${deg}deg)`
      direction += deg
    },

    updateLocation: function () {
      const newLocation = {
        x: location.x + Math.cos(direction * (Math.PI / 180)) * speed,
        y: location.y + Math.sin(direction * (Math.PI / 180)) * speed
      }
      marker.style.transform += `translate(${newLocation.x}px, ${
        newLocation.y
      }px)`
      location = newLocation
    }
  }
}
const car = Object.create(
  proto({ x: 0, y: 0 }, 45, 50, document.querySelector('.car'))
)

setTimeout(function () {
  const intervalID = setInterval(() => car.updateLocation(), 60)
  document
    .querySelector('#pause')
    .addEventListener('click', () => clearInterval(intervalID))
}, 3000)
