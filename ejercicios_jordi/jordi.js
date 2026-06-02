let selectCoches = document.querySelector("#selectCoches")
let resultadoCoches = document.querySelector("#resultadoCoches")

function seleccionarCoches (){
    resultadoCoches.innerHTML = (`<img src="${selectCoches.value}" alt="">`)
}
selectCoches.addEventListener("change", seleccionarCoches)

let divArray = document.querySelector("#divArray")
let selectArray = document.querySelector("#selectArray")
const arrayCoches = [
    {
        nombre: "coche 1",
        img: `<img src="https://fotos.quecochemecompro.com/opel-corsa/opel-corsa-dinamismo-carretera.jpg?size=750x400" alt="">`
    },
    {
        nombre: "coche 2",
        img: `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYVN7UfjOkY-97LEBIeiXwjvpoYvduFU4_w&s" alt="">`
    },
    {
        nombre: "coche 3",
        img: `<img src="https://img.magnific.com/vector-gratis/coche-sedan-rojo-estilo-dibujos-animados-aislado-sobre-fondo-blanco_1308-64900.jpg" alt="">`
    },
    {
        nombre: "coche 4",
        img: `<img src="https://us.123rf.com/450wm/alenanv/alenanv1712/alenanv171200027/90964516-cute-cartoon-car-isolated-on-white-background-vector-illustration.jpg" alt="">`
    }
]

function recorrerCoches (){
    for (let i = 0; i < arrayCoches.length; i++){
        divArray.innerHTML += `<div>${arrayCoches[i].selectArray.value}</div>`
        divArray.innerHTML += `<div>${arrayCoches[i].selectArray.value}</div>`
    }
}

recorrerCoches.addEventListener("change", recorrerCoches)