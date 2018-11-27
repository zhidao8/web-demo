document.addEventListener('DOMContentLoaded', function () {

  var pingingClass = 'playing'
  var isPlaying = false

  var bgMusic = document.getElementsByClassName('bg-music')[0];
  bgMusic.addEventListener('play', function () {
    var hoverWrap = document.getElementsByClassName('hover-wrap')[0];
    hoverWrap.classList.add(pingingClass);
    hoverWrap = null;

    var coverWrap = document.getElementsByClassName('disc')[0];
    coverWrap.classList.add(pingingClass);
    coverWrap = null;

    isPlaying = true
  })

  bgMusic.addEventListener('pause', function () {
    var hoverWrap = document.getElementsByClassName('hover-wrap')[0];
    hoverWrap.classList.remove(pingingClass);
    hoverWrap = null;

    var coverWrap = document.getElementsByClassName('disc')[0];
    coverWrap.classList.remove(pingingClass);
    coverWrap = null;

    isPlaying = false
  })

  var hover = document.getElementsByClassName('hover')[0];
  hover.addEventListener('click', function () {
    if (isPlaying) {
      bgMusic.pause();
    } else {
      bgMusic.play();
    }
  })
  hover = null;
})
