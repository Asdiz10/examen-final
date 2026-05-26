let platosDisponibles = [
  {
    nombre: "Ensalada César",
    descripcion: "Ensalada con pollo, lechuga, queso y salsa César",
    tipo: "primero",
    precio: 8.5,
    foto: "ensalada.jpg",
  },
  {
    nombre: "Macarrones boloñesa",
    descripcion: "Pasta con salsa de tomate y carne picada",
    tipo: "primero",
    precio: 9.0,
    foto: "macarrones.jpg",
  },
  {
    nombre: "Pollo al horno",
    descripcion: "Pollo asado con patatas",
    tipo: "segundo",
    precio: 11.5,
    foto: "pollo.jpg",
  },
  {
    nombre: "Merluza a la plancha",
    descripcion: "Merluza con verduras salteadas",
    tipo: "segundo",
    precio: 12.0,
    foto: "merluza.jpg",
  },
];


let miDiv1 = document.querySelector("#div1")
let ipt1 = document.querySelector("#input1")
let sl = document.querySelector("#sele")

function hola(){
    miDiv1.innerHTML = ipt1.value
    ; 
}
ipt1.addEventListener("input", hola)

function select(){
    miDiv1.innerHTML = ` ${ipt1.value}  ${sl.value}
    
    `
}
ipt1.addEventListener("change", select)