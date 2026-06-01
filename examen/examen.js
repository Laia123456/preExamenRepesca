let inputFrase = document.querySelector("#inputFrase")
let superior = document.querySelector("#superior")
let selectDias = document.querySelector("#selectDias")

function fraseDia (){
    superior.innerHTML = selectDias.value +" "+ inputFrase.value
}

inputFrase.addEventListener("change", fraseDia)
inputFrase.addEventListener("input", fraseDia)