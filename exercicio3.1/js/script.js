(function () {

  // Exercicio 1
  let square = document.querySelector('#quadrado')
  let orange = document.querySelector('#botao-laranja')
  let blue = document.querySelector('#botao-azul')

  blue.addEventListener('click', () => {
    square.style.backgroundColor = '#09F'
  })

  orange.addEventListener('click', () => {
    square.style.backgroundColor = '#F90'
  })

  // ----------------------------------------

  // Exercicio 2

  let button = document.querySelector('#botao-ligar')
  button.addEventListener('click', (e) => {
    e.preventDefault()
    button.classList.toggle('ligado')
  })

  // ----------------------------------------

  // Exercicio 3

  let forward = document.querySelector('#botao-avancar')
  let rewind = document.querySelector('#botao-recuar')
  let carro = document.querySelector('#carro')

  forward.addEventListener('click', function () {
    carro.style.marginLeft = "300px"
  })

  rewind.addEventListener('click', function () {
    carro.style.marginLeft = 0
  })

  // ----------------------------------------

  // Exercicio 4

  let pictures = document.querySelectorAll('.imagem')

  pictures.forEach((pic) => {
    pic.classList.remove('imagem-activa')
    pic.addEventListener('click', function () {
      this.classList.add('imagem-activa')
    })
  })

})()