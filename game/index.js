const gameArea = document.getElementById('game-area');
const airplane = document.getElementById('airplane');

let airplaneX = 50;

function moveAirplane(direction) {
  if (direction === 'left' && airplaneX > 5) {
    airplaneX -= 5;
  } else if (direction === 'right' && airplaneX < 95) {
    airplaneX += 5;
  }
  airplane.style.left = airplaneX + '%';
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    moveAirplane('left');
  } else if (event.key === 'ArrowRight') {
    moveAirplane('right');
  }
});

function createStar() {
  const star = document.createElement('div');
  const sizes = ['small', 'medium', 'large'];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  star.classList.add('star', randomSize);
  star.style.left = Math.random() * 90 + '%';
  star.style.top = '-50px';
  gameArea.appendChild(star);
  moveStar(star);
}

function moveStar(star) {
  let topPosition = -50;
  let interval = setInterval(() => {
    if (topPosition > 100) {
      clearInterval(interval);
      star.remove();
    } else {
      topPosition += 0.5;
      star.style.top = topPosition + '%';
      const starX = parseInt(star.style.left);
      const starY = parseInt(star.style.top);
      const airplaneY = parseInt(airplane.style.bottom);
      if (starX >= airplaneX && starX <= airplaneX + 5 && starY >= airplaneY && starY <= airplaneY + 5) {
        clearInterval(interval);
        star.remove();
        alert('Game over!');
        location.reload();
      }
    }
  }, 10);
}

setInterval(() => {
  createStar();
}, 500);
