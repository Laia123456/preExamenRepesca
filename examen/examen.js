let inputFrase = document.querySelector("#inputFrase")
let superior = document.querySelector("#superior")
let selectDias = document.querySelector("#selectDias")
let arrayDiv = document.querySelector("#arrayDiv")

function fraseDia (){
    superior.innerHTML = selectDias.value +" "+ inputFrase.value
}

selectDias.addEventListener("change", fraseDia)
inputFrase.addEventListener("input", fraseDia)

let platosDisponibles = [
   {
       nombre: "Ensalada César",
       descripcion: "Ensalada con pollo, lechuga, queso y salsa César",
       tipo: "primero",
       precio: 8.50,
       foto: "ensalada.jpg"
   },
   {
       nombre: "Macarrones boloñesa",
       descripcion: "Pasta con salsa de tomate y carne picada",
       tipo: "primero",
       precio: 9.00,
       foto: "macarrones.jpg"
   },
   {
       nombre: "Pollo al horno",
       descripcion: "Pollo asado con patatas",
       tipo: "segundo",
       precio: 11.50,
       foto: "pollo.jpg"
   },
   {
       nombre: "Merluza a la plancha",
       descripcion: "Merluza con verduras salteadas",
       tipo: "segundo",
       precio: 12.00,
       foto: "merluza.jpg"
   }
];

function array (){
    for (let i = 0; i < platosDisponibles.length; i++){
        arrayDiv.innerHTML = (platosDisponibles[i].nombre);
    }
}