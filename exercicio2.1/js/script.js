(function () {

  let thumbnails = document.querySelectorAll('.thumb')

  thumbnails.forEach((item) => {
    item.addEventListener('click', () => {
      let main_image = document.querySelector('#main-image')
      main_image.src = item.getAttribute('src')
    })
  })

})()