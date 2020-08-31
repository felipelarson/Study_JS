(function () {
  
  let images = document.querySelectorAll('#gallery img')

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
      if (this.style.display == 'block') {
        this.style.display = 'none';
      } else {
        images[i+1].style.display = 'block';
      }
    })
    
  }

})()