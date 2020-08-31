(function(){

let tabsTitle = document.querySelectorAll('.tab-title')
let tabsContent = document.querySelectorAll('.tab-content')

for (let i = 0; i < tabsTitle.length; i++) {
  tabsTitle[i].addEventListener('click', function () {
    const element = tabsContent[i];
    if (element.style.display == 'block') {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  })
  
}



})()