let bntMostrar = document.querySelector("#bntMostrar")
let contenido = document.querySelector("#contenido")
let btnLimpiar = document.querySelector("#btnLimpiar")

//function mostrar (){
  //  console.log("Botón pulsado")
//}

//bntMostrar.addEventListener("click", mostrar)

//function textoJS (){
  //  contenido.innerHTML = "Texto desde JS"
//}

//bntMostrar.addEventListener("click", textoJS)

function clase (){
    contenido.classList.add("divContenido")
}

bntMostrar.addEventListener("click", clase)

function limpiar (){
    contenido.classList.remove("divContenido")
}

btnLimpiar.addEventListener("click", limpiar)

//
let selectAlumnos = document.querySelector("#selectAlumnos")
let btnAlumnos = document.querySelector("#btnAlumnos")
let alumnos = document.querySelector("#alumnos")
let inputAlumnos = document.querySelector("#inputAlumnos")

//function nombreAlumnos (){
 // alumnos.innerHTML = (inputAlumnos.value + " " + selectAlumnos.value)
///}

//btnAlumnos.addEventListener("click", nombreAlumnos)
//selectAlumnos.addEventListener("change", nombreAlumnos)

//
let inputFoto = document.querySelector("#inputFoto")
let divInput = document.querySelector("#divInput")

function url (){
  divInput.innerHTML = `<img src="${inputFoto.value}" alt="">`
}

btnAlumnos.addEventListener("click", url)