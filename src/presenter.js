import wordle from "./wordle";

const intentoForm = document.querySelector("#intento-form");
const intentoInput = document.querySelector("#intento");
const botonAdivinar = document.querySelector("#boton-adivinar");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado-div2");
const div3 = document.querySelector("#resultado-div3");
const juego = new wordle("PEINE");

let intentos = 6

intentoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const intento = intentoInput.value.toUpperCase();
  let resp1 = juego.letrasCorectas(intento);
  let resp2 = juego.lestrasPosIncorrecta(intento);
  let resp3 = juego.lestrasIncorrecta(intento);      
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
  div.innerHTML = resp1
  div2.innerHTML = resp2
  div3.innerHTML = resp3
  
});
