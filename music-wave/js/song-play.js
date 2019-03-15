document.addEventListener('DOMContentLoaded', function () {
  ;(function () {
    var canvas = document.querySelector('.cover')

    var style = window.getComputedStyle(canvas)
    canvas.width = Number(style.width.slice(0, style.width.length - 2))
    canvas.height = Number(style.height.slice(0, style.height.length - 2))
    var context = canvas.getContext("2d")
    var image = new Image()
    image.src = canvas.dataset.imgSrc

    image.addEventListener('load', function () {
      var halfCoverSize = canvas.width / 2

      context.drawImage(image, 0, 0, canvas.width, canvas.height)

      context.globalCompositeOperation = 'destination-out'
      context.beginPath()
      context.arc(halfCoverSize, halfCoverSize, 20, 0, Math.PI * 2, false)
      context.fill()

      context.globalCompositeOperation = 'destination-in'
      context.beginPath()
      context.arc(halfCoverSize, halfCoverSize, halfCoverSize, 0, Math.PI * 2, false)
      context.fill()
      context.clip()

      context.globalCompositeOperation = 'source-over'
      context.strokeStyle = 'rgba(255, 255, 255, .3)'
      context.lineWidth = 3
      context.beginPath()
      context.arc(halfCoverSize, halfCoverSize, 20, 0, Math.PI * 2, false)
      context.stroke()
    })
  })()

  var pingingClass = 'playing'
  var isPlaying = false
  var rotatableDisc = (function () {
    var rotateDeg = 0
    var disc = document.querySelector('.disc')
    var playing = false

    return {
      startRotate: function () {
        playing = true
        window.requestAnimationFrame(function callback() {
          rotateDeg += 0.1
          disc.style.transform = 'rotate(' + rotateDeg + 'deg)'
          if (playing) {
            window.requestAnimationFrame(callback)
          }
        })
      },

      pauseRotate: function () {
        playing = false
      },
    }
  })()

  var bgMusic = document.querySelector('.bg-music')
  bgMusic.volume = 0.5

  bgMusic.addEventListener('canplay', function () {

    bgMusic.addEventListener('play', function () {
      var hoverWrap = document.querySelector('.hover-wrap')
      hoverWrap.classList.add(pingingClass)

      rotatableDisc.startRotate()

      isPlaying = true
    })

    bgMusic.addEventListener('pause', function () {
      var hoverWrap = document.querySelector('.hover-wrap')
      hoverWrap.classList.remove(pingingClass)

      rotatableDisc.pauseRotate()

      isPlaying = false
    })

    var hover = document.querySelector('.hover')
    hover.addEventListener('click', function () {
      if (isPlaying) {
        bgMusic.pause()
      } else {
        bgMusic.play()
      }
    })
    hover = null

  })

})
