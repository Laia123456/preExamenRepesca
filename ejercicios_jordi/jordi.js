let contenido = document.querySelector("#contenido")
let bntColor = document.querySelector("#bntColor")
let bntcolorRojo = document.querySelector("#bntcolorRojo")
let limpiar = document.querySelector("#limpiar")

//cambio clases
function colorVerde (){
    contenido.classList.remove("rojo")
    contenido.classList.add("verde")
}

bntColor.addEventListener("click", colorVerde)

function colorRojo (){
    contenido.classList.remove("verde")
    contenido.classList.add("rojo")
}

bntcolorRojo.addEventListener("click", colorRojo)

function limpiarColor (){
    contenido.classList.remove("verde")
    contenido.classList.remove("rojo")
}

limpiar.addEventListener("click", limpiarColor)

//input alerta
let input = document.querySelector("#input")
let resultadoInput = document.querySelector("#resultadoInput")
let bntInput = document.querySelector("#bntInput")

function inputBarça (){
    if (input.value == "barça") {
        resultadoInput.innerHTML = `<img src="https://a.espncdn.com/i/teamlogos/soccer/500/83.png" alt="">`;
    } else {
        alert("jordi marica");
    }
}

bntInput.addEventListener("click", inputBarça)