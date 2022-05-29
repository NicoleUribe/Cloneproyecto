import wordle from "./wordle";

const intentoForm = document.querySelector("#intento-form");
const intentoInput = document.querySelector("#intento");
const botonAdivinar = document.querySelector("#boton-adivinar");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado-div2");
const div3 = document.querySelector("#resultado-div3");
const juego = new wordle("PEINE");
const squares = document.getElementById("cuadrados");
let cuadrado;
let intentos = 6;

document.addEventListener("DOMContentLoaded", () => {
crearCudrados();
function crearCudrados(){
  for(let cont = 0; cont < 30; cont ++){
    cuadrado = document.createElement("div");
    cuadrado.classList.add("cuadrado");
    cuadrado.setAttribute("id", cont+1);
    squares.appendChild(cuadrado);
  }
}
});

intentoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const intento = intentoInput.value.toUpperCase();
  let resp1 = juego.letrasCorectas(intento);
  let resp2 = juego.lestrasPosIncorrecta(intento);
  let resp3 = juego.lestrasIncorrecta(intento);  
  insertPalabraEnCuadros(intento); 
  /*intentos--  
  if(intentos>=0){    
    div.innerHTML = "<p> Letras que estan en palabra en la posición correcta:" + resp1 + "</p>"
    div.innerHTML = div.innerHTML + "<p> Letras que estan en la palabra pero en posición incorrecta:" + resp2 + "</p>"
    div.innerHTML = div.innerHTML + "<p> Letras que no estan en la palabra:" + resp3 + "</p>" 
  }
  if(juego.adivinar(resp1) == "¡ ¡ ¡ G  A  N  A  S  T  E ! ! ! "){
    intentos = 0;
  }
  if(intentos==0){
    div.innerHTML = "<p>" + juego.adivinar(resp1) + "</p>"    
  }*/

  
  div.innerHTML =  "<p>" + " Letras en posicion Correcta: "+  resp1 +"</p>"
  div2.innerHTML = "<p>" + " Letras en posicion Incorrecta: "+  resp2 +"</p>"  
  div3.innerHTML = "<p>" + " Letras en Incorrectas: "+  resp3 +"</p>"

  function insertPalabraEnCuadros(intent){
    for(let cont=0;cont<intent.length;cont++){
      const espacio = document.getElementById(String(cont+1));
      espacio.textContent= intent[cont];
    }
  }
  
});
