// document.addEventListener('DOMContentLoaded', () => {
window.addEventListener('mousemove', e => {
  var movementStrength = 25
  var height = movementStrength / window.innerHeight
  var width = movementStrength / window.innerWidth
  var pageX = e.pageX - window.innerWidth / 2
  var pageY = e.pageY - window.innerHeight / 2
  var newvalueX = width * pageX * -1 - 25
  var newvalueY = height * pageY * -1 - 50
  const topImage = document.querySelector('.top-image')
  const x = newvalueX + (window.innerWidth - 1045) / 2
  const y = newvalueY + (window.innerHeight - 685) / 2
  topImage.style.backgroundPosition = x + 'px ' + y + 'px'
})
// })

// $(document).ready(function () {
//   var movementStrength = 100
//   var height = movementStrength / $(window).height()
//   var width = movementStrength / $(window).width()
//   $('#top-image').mousemove(function (e) {
//     var pageX = e.pageX - $(window).width() / 2
//     var pageY = e.pageY - $(window).height() / 2
//     var newvalueX = width * pageX * -1 - 25
//     var newvalueY = height * pageY * -1 - 50
//     $('#top-image').css('background-position', newvalueX + 'px     ' + newvalueY + 'px')
//   })
// })
