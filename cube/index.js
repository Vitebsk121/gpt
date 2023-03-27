var cube = document.querySelector('.cube');

cube.addEventListener('mousedown', function(event) {
  event.preventDefault();

  var startX = event.clientX;
  var startY = event.clientY;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    var x = event.clientX - startX;
    var y = event.clientY - startY;

    cube.style.transform = 'rotateX(' + (-y) + 'deg) rotateY(' + x + 'deg)';
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
});
