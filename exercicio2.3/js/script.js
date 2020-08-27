(function () {

  let imagens = document.querySelectorAll('.pic')

  for (let index = 0; index < imagens.length; index++) {
    imagens[index].addEventListener('click', function (e) {
      e.stopPropagation()
      for (let index2 = 0; index2 < imagens.length; index2++) {
        imagens[index2].className = 'pic pic-center pic-hide'
      }
      this.className = 'pic pic-center pic-show'
    }, true)
  }

  document.querySelector('body').addEventListener('click', function () {
    for (let index2 = 0; index2 < imagens.length; index2++) {
      imagens[index2].className = 'pic'
    }
  })
})()