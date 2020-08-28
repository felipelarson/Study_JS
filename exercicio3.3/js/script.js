(() => {

  let thumbnails = document.querySelectorAll('img')

  thumbnails.forEach((item) => {
    item.addEventListener('click', () => {
      let main_image = document.querySelector('#main-image')
      main_image.src = item.getAttribute('src')
    })
  })

})()