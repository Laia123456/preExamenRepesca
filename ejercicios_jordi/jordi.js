let selectCoches = document.querySelector("#selectCoches")
let resultadoCoches = document.querySelector("#resultadoCoches")

function seleccionarCoches (){
    resultadoCoches.innerHTML = (`<img src="${selectCoches.value}" alt="">`)
}
selectCoches.addEventListener("change", seleccionarCoches)