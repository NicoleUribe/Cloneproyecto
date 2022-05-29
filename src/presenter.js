import wordle from "./wordle";

const intentoForm = document.querySelector("#intento-form");
const intentoInput = document.querySelector("#intento");
const juego = new wordle();
const squares = document.getElementById("cuadrados");
let cuadrado;
let intentos = 6;
let contadorEspacios = 1;

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
  
  function validarPalabra(intent){
    for(let cont=0;cont<intent.length;cont++){
      const espacio = document.getElementById(String(contadorEspacios)); 
      if(juego.getLetra(cont) == intent[cont]){
        espacio.textContent= intent[cont];              
        espacio.style.background = "rgb(24, 187, 73)";
      }
      if(juego.getPalabra().includes(intento[cont]) && 
         juego.getLetra(cont) != intent[cont]){
        espacio.textContent= intent[cont];              
        espacio.style.background = "#E5EB14";
      }    
      if(!juego.getPalabra().includes(intento[cont])){
        espacio.textContent= intent[cont];              
        espacio.style.background = "#707169";
      }         
      contadorEspacios++;
    }   
  }

  const intento = intentoInput.value.toUpperCase();    
  intentos--  
  if(intentos>=0){        
    validarPalabra(intento)
    intentoForm.reset()
  }
  if(juego.adivinar(intento) == "¡ ¡ ¡ G  A  N  A  S  T  E ! ! ! "){
    intentos = 0;
  }
  if(intentos==0){
    alert(juego.adivinar(intento))
  }            
});
