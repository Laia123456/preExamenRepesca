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