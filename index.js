let btnMostrar = document.querySelector("#btnMostrar")

//function bntPulsado (){
  //console.log("Botón pulsado")
//}
//btnMostrar.addEventListener("click", bntPulsado)

let divTexto = document.querySelector("#divTexto")

function textoJS (){
  divTexto.innerHTML = ("Texto desde JS")
}
btnMostrar.addEventListener("click", textoJS)

let divNaranja = document.querySelector("#divNaranja")
let btnNaranja = document.querySelector("#btnNaranja")

function naranja (){
  divNaranja.classList.add("divContenido")
}
btnNaranja.addEventListener("click", naranja)

let btnLimpiar = document.querySelector("#btnLimpiar")

function limpiar (){
  divNaranja.classList.remove("divContenido")
}
btnLimpiar.addEventListener("click", limpiar)

let inputNombre = document.querySelector("#inputNombre")
let selectNombres = document.querySelector("#selectNombres")
let bntAlumno = document.querySelector("#bntAlumno")
let divAlumnos = document.querySelector("#divAlumnos")

//function mostrarAlumnos (){
  //divAlumnos.innerHTML = (inputNombre.value + " " + selectNombres.value)
//}
//bntAlumno.addEventListener("click", mostrarAlumnos)

let inputUrl = document.querySelector("#inputUrl")
let divUrl = document.querySelector("#divUrl")

function mostrarUrl (){
  divUrl.innerHTML = (`<img src="${inputUrl.value}" alt="">`)
}
bntAlumno.addEventListener("click", mostrarUrl)

//ARRAYS 
let divGuitarras = document.querySelector("#divGuitarras")
const guitarras = [
  {
    id: 1,
    marca: "Fender",
    modelo: "Stratocaster",
    tipo: "Eléctrica",
    precio: 1200
  },
  {
    id: 2,
    marca: "Gibson",
    modelo: "Les Paul",
    tipo: "Eléctrica",
    precio: 1800
  },
  {
    id: 3,
    marca: "Yamaha",
    modelo: "FG800",
    tipo: "Acústica",
    precio: 250
  },
 {
    id: 4,
    marca: "Fender",
    modelo: "Telecaster",
    tipo: "Eléctrica",
    precio: 1200
  }

 ];

function pintarGuitarras(){
  for (let i = 0; i < guitarras.length; i++){
    divGuitarras.innerHTML += `<div>${guitarras[i].marca}</div>`;
    divGuitarras.innerHTML += `<div>${guitarras[i].modelo}</div>`;
    divGuitarras.innerHTML += `<div>${guitarras[i].tipo}</div>`;
    divGuitarras.innerHTML += `<div>${guitarras[i].precio}</div>`;
  }
}
pintarGuitarras()