let platosDisponibles = [
  {
    nombre: "Ensalada César",
    descripcion: "Ensalada con pollo, lechuga, queso y salsa César",
    tipo: "primero",
    precio: 8.5,
    foto: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/b876d8ea-fc9b-4b04-9958-9c70fe1c74e0/Derivates/fb3399fa-df15-4d0d-9beb-83a79a37a16e.jpg",
  },
  {
    nombre: "Macarrones boloñesa",
    descripcion: "Pasta con salsa de tomate y carne picada",
    tipo: "primero",
    precio: 9.0,
    foto: "https://static.bainet.es/clip/9902dcbd-d24e-4834-a39d-a35836e98383_source-aspect-ratio_1600w_0.jpg",
  },
  {
    nombre: "Pollo al horno",
    descripcion: "Pollo asado con patatas",
    tipo: "segundo",
    precio: 11.5,
    foto: "https://imag.bonviveur.com/pollo-asado-al-horno-con-patatas.jpg",
  },
  {
    nombre: "Merluza a la plancha",
    descripcion: "Merluza con verduras salteadas",
    tipo: "segundo",
    precio: 12.0,
    foto: "https://imag.bonviveur.com/merluza-a-la-plancha.jpg",
  },
];


let miDiv1 = document.querySelector("#div1")
let miDivv = document.querySelector("#divv")
let ipt1 = document.querySelector("#input1")
let sl = document.querySelector("#sele")


function select(){
    miDiv1.innerHTML = ipt1.value;
}
ipt1.addEventListener("input", select)



function dia(){
    miDivv.innerHTML =  sl.value;
}
sl.addEventListener("change", dia);




let cartasdiv = document.querySelector("#cartas")
const btn2 = document.querySelector("#boton2")
const btn3 = document.querySelector("#boton3")

function recorre(){
    cartasdiv.innerHTML = " "

    for(let i = 0; i < platosDisponibles.length; i++){
        cartasdiv.innerHTML += `  
        <div class="tarjeta">
        <h3>Nombre: ${platosDisponibles[i].nombre}</h3>
        <p>Descripción: ${platosDisponibles[i].descripcion}</p>
        <p>Descripción: ${platosDisponibles[i].precio}</p>
        <img src="${platosDisponibles[i].foto}" alt="fotos">
        </div>       
        `
    }
}
recorre()

function borrarCarta(){
    cartasdiv.innerHTML = " "
}
btn2.addEventListener("click", borrarCarta)