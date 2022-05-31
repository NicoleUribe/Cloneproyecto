import palabrasAleatoria from "./palabrasAleatoria";
import wordle from "./wordle";
import myArray from "./palabras";

const intentoForm = document.querySelector("#intento-form");
const intentoInput = document.querySelector("#intento");
const juego = new wordle();
const squares = document.getElementById("cuadrados");
let cuadrado;
let intentos = 6;
let contadorEspacios = 1;

document.addEventListener("DOMContentLoaded", () => {
crearCuadrados();
function crearCuadrados(){  
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
  if(intentos>=0 && myArray.includes(intento)){        
    intentos--      
      for(let cont=0;cont<intento.length;cont++){
        const espacio = document.getElementById(String(contadorEspacios)); 
        if(juego.getLetra(cont) == intento[cont]){
          espacio.textContent= intento[cont];              
          espacio.style.background = "rgb(24, 187, 73)";
        }
        if(juego.getPalabra().includes(intento[cont]) && 
           juego.getLetra(cont) != intento[cont]){
          espacio.textContent= intento[cont];              
          espacio.style.background = "#E5EB14";
        }    
        if(!juego.getPalabra().includes(intento[cont])){
          espacio.textContent= intento[cont];              
          espacio.style.background = "#707169";
        }         
        contadorEspacios++;    
    }    
    intentoForm.reset()
  }
  if(juego.adivinar(intento) == "¡ ¡ ¡ G  A  N  A  S  T  E ! ! ! "){
    intentos = 0;
  }
  if(intentos==0){
    alert(juego.adivinar(intento))    
  }            
  if(!myArray.includes(intento)){
    confirm("Palabra no esta en la lista");    
  }
});
