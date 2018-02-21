window.addEventListener('mousemove', e => {
  const topLeft = document.querySelector('.top-left')
  topLeft.style.width = e.pageX
  topLeft.style.height = e.pageY

  const topRight = document.querySelector('.top-right')
  topRight.style.width = window.innerWidth - e.pageX
  topRight.style.height = e.pageY

  const bottomRight = document.querySelector('.bottom-right')
  bottomRight.style.width = e.pageX
  bottomRight.style.height = window.innerHeight - e.pageY

  const bottomLeft = document.querySelector('.bottom-left')
  bottomLeft.style.width = window.innerWidth - e.pageX
  bottomLeft.style.height = window.innerHeight - e.pageY
})
