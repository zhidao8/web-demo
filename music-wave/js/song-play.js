document.addEventListener('DOMContentLoaded', function () {
  var bgMusic = document.getElementsByClassName('bg-music')[0];
  bgMusic.addEventListener('playing', function () {
    var hoverWrap = document.getElementsByClassName('hover-wrap')[0];
    hoverWrap.classList.add('playing');
    hoverWrap = null;

    var coverWrap = document.getElementsByClassName('cover-wrap')[0];
    coverWrap.classList.add('playing');
    coverWrap = null;
  })

  var hover = document.getElementsByClassName('hover')[0];
  hover.addEventListener('click', function () {
    bgMusic.volume = 0.5;
    bgMusic.play();
  })
  hover = null;
})
