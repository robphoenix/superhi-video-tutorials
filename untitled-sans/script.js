// document.body.style.overflow = 'hidden'
document.addEventListener('scroll', () => {
  const pixels = document.body.scrollTop / 10 + 12
  document.querySelector('.typeface').style.fontSize = pixels
  document.querySelector('.font-size').innerHTML = pixels.toString()
})
