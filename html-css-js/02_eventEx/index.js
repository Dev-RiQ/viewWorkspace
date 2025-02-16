const body = document.querySelector('body')
const vartical = document.querySelector('.vartical')
const horizontal = document.querySelector('.horizontal')
const img = document.querySelector('img')
const span = document.querySelector('span')

body.addEventListener('mousemove', (e) => {
  span.innerHTML = `X:${e.clientX}, Y:${e.clientY}`
  let locationX = e.clientX / body.clientWidth * 100
  let locationY = e.clientY / body.clientHeight * 100
  vartical.setAttribute('style', `left: ${locationX}%`)
  horizontal.setAttribute('style', `top: ${locationY}%`)
  img.setAttribute('style', `left: ${locationX}%; top: ${locationY}%`)
  span.setAttribute('style', `left: ${locationX}%; top: ${locationY}%`)
})