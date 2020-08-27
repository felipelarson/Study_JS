(() => {
  let info = document.querySelector('#info-window')
  let text = document.querySelectorAll('.tab')

  for (let index = 0; index < text.length; index++) {
    text[index].addEventListener('click', function () {
      info.innerHTML = this.innerHTML
      info.style.left = 0
    })
  }

  info.addEventListener('click', () => {
    info.style.left = '100%'
    info.style.cursor = 'pointer'
  })

})()