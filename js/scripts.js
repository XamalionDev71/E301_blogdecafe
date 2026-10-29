//query selector
const heading = document.querySelector('.header__texto h2') //devolver 0 o 1 
heading.textContent = "#TeamSistemas"
heading.classList.add('nueva-clase')
console.log(heading)

//query selectorAll
const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces)
enlaces[0].textContent = 'Nuevo Enlace'
enlaces[0].href = 'http://www.google.com'

//getElementById
const heading2 = document.getElementById('heading')
console.log(heading2)

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A')
nuevoEnlace.href = "nuevo-enlace.html"
nuevoEnlace.textContent = "Otro Enlace"
nuevoEnlace.classList.add("navegacion__enlace")
const navegacion = document.querySelector(".navegacion")
navegacion.appendChild(nuevoEnlace)

//Eventos
console.log(nuevoEnlace)

console.log(1)
window.addEventListener('load',function(){
    console.log(2)
})
window.onload = function(){
    console.log(3)
}
document.addEventListener('DOMContentLoaded',function(){
    console.log(4)
})
console.log(5)
window.onscroll = function(){
    console.log('scrolling...')
}

const btnEnviar = document.querySelector('.boton--secundario')
btnEnviar.addEventListener('click',function(evento){
    console.log(evento)
    evento.preventDefault() //Evita que se ejecute el botón submit, hasta que evaluemos el formulario
    console.log('Enviando formulario...')
})

//Eventos con teclado
const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
nombre.addEventListener('input',leerTexto)
email.addEventListener('input',leerTexto)
mensaje.addEventListener('input',leerTexto)

function leerTexto(){
    console.log('Escribiendo...')
}