//menu
const botoncito = document.getElementById('botoncito');
var grey = document.getElementById('grey');
botoncito.addEventListener('click', function(){
    grey.classList.toggle('mostrar');
})
function dia(){
    document.getElementById("sailor").setAttribute("href","dia1.css");
    const logo = document.querySelector(".banner img");
    logo.src = "./img/gifOF_logo.png";
    document.getElementById("switch").setAttribute("href","estilos.css");
}
function noche(){
    document.getElementById("sailor").setAttribute("href","noche1.css");
    const logo = document.querySelector(".banner img");
    logo.src = "./img/gifOF_logo_dark.png";
    document.getElementById("switch").setAttribute("href","estilos.css");
}
//fin menu
//Buscador de gifs//
//Buscar
const gifForm = document.querySelector("#gif-form");
gifForm.addEventListener("submit", fetchGiphs);

function fetchGiphs(e) {
    e.preventDefault();
    const searchTerm = document.querySelector(".busqueda").value;
    fetch(`https://api.giphy.com/v1/gifs/search?&q=${searchTerm}&limit=25&api_key=aAYiAr4AVgrmQrAa2brq24zRM4nBCKAa`)
    .then((response) => {return response.json(); })
    .then((resp => {
        // Here we get the data array from the response object
        let dataArray = resp.data
        // We pass the array to showGiphs function
        showGiphs(dataArray);
    }))
    .catch(err => console.log(err)); // We use catch method for Error handling
}
function showGiphs(dataArray) {
  const results = document.querySelector(".results");
  let output = '<div class="container">';
  dataArray.forEach((imgData) => {
    output += `
  <img src="${imgData.images.fixed_width.url}"/>
`;
  });
  document.querySelector('.results').innerHTML = output;
}      
//Fin de Buscador de gifs//
///Fetch Tendencias///
const apiKey = "pMHHnxxFoIamHkWffvDdx4NAtAklnYfM";
async function buscarTendencias() {
  var urlTendencias = 'https://api.giphy.com/v1/gifs/trending?api_key=';
  const respuesta = await fetch(urlTendencias + apiKey);
  const datos = await respuesta.json();
  const datosArray = datos.data;
  mostrarGiphs(datosArray);
}
function mostrarGiphs(dataArray) {
  const results = document.querySelector(".gif");
  let output = '<div class="contenedor">';
  dataArray.forEach((imgData) => {
    output += `
  <img src="${imgData.images.fixed_width.url}"/>
`;
  });
  document.querySelector('.gif').innerHTML = output;
}
console.log(buscarTendencias()); 
///Fin Fetch Tendencias///
///Fetch Random///
let param = '&api_key=';
let urlRandom = 'https://api.giphy.com/v1/gifs/random?';
let divRadom = document.getElementById('randomGif');
async function getRandom() {
  const load = urlRandom;
  const results = [];
  for(let i = 0; i < 4; i++) {
    const response = await fetch(urlRandom + param + apiKey);
    const data = await response.json();
    const datos = {
      titulo: data.data.title,
      urlMp4: data.data.images.original.mp4,
      urlLoad: data.data.url,
      alto: data.data.images.fixed_height.height,
      // ancho: data.data.images.fixed_width.width,
    }
    results.push(datos)
  }
  return results
}

function randomRes(){
  getRandom()
  .then((response) => {
    let resultado = '';
    for(let i = 0; i < response.length; i++){
      resultado = resultado + randomGif(response[i])
    }
    const container = divRadom
    container.innerHTML = resultado
  })
}

function randomGif(datos){
  const html =
    `<div id="empaque">
      <div id="titulo">
        <p>${datos.titulo}</p>
        <img src="./img/button3.svg" alt="button3">
      </div>
      <div id="videoRandom">
        <span>
          <video autoplay loop src="${datos.urlMp4}" height="${datos.alto}"></video>
          <a href="${datos.urlLoad}"><span>Ver más...</span></a>
        </span>
      </div>
    </div>`
  return html
}
console.log(randomRes());
 
///Fin Fetch Random///

//navbar
function nav_bar(){
    document.getElementById("opcionales").style.display = "block";
    const myString = document.getElementById("busqueda").value;
    console.log(myString);
    if(myString.length<3){
        document.getElementById("opcionales").style.display = "none";
    }else{
        document.getElementById("opcionales").style.display = "block";
    }
}
//Fin de navbar

//De gifos a pestaña2
//Pestaña2
function Mostrar(){
  document.getElementById("pestaña").style.display = "block";
}
function Ocultar(){
  document.getElementById("pestaña").style.display = "none";
}
function Mostrar_Ocultar(){
  var pestaña = document.getElementById("pestaña");

  if(pestaña.style.display == "none"){
    Mostrar();
  }else{
    Ocultar();
  } 
}
//crear a chequeo
function Chequeo(){
  document.getElementById("chequeo").style.display = "block";
  document.getElementById("creatividad").style.display = "none";
}
function NoChequeo(){
  document.getElementById("chequeo").style.display = "none";
  document.getElementById("creatividad").style.display = "block";
}
function Chequeo_NoChequeo(){
  var chequeo = document.getElementById("chequeo");

  if(chequeo.style.display == "none"){
    Chequeo();
  }else{
    NoChequeo();
  }
}





















