(function(){

let home_section = document.querySelectorAll('.home-section')

for (let i = 0; i < home_section.length; i++) {
  home_section[i].addEventListener('click', function(e) {
    e.defaultPrevented
    this.classList.toggle('big-section')
  })
}






})()