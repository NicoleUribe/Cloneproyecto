import Wordle from "./wordle";
const word = new Wordle();

const form = document.querySelector("#codigosecreto-form");
const div = document.querySelector("#resultado-div");

const palabra = document.querySelector("#palabra");

form.addEventListener("button", (event) => {
  event.preventDefault();
  div.innerHTML =div.innerHTML+"<p>" + word.adivinar(palabra.value) + "</p>";
  if(word.adivinar(palabra.value)=="Ganaste!")
  window.alert("¡ ¡ ¡ G  A  N  A  S  T  E ! ! ! ");
});
