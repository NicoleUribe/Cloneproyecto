import Wordle from "./wordle";
import sumar from "./wordle";
const word = new Wordle();

const form = document.querySelector("#codigosecreto-form");
const div = document.querySelector("#resultado-div");

const palabra = document.querySelector("#palabra");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML ="<p>" + word.adivinar(palabra.value) + "</p>";
  if(word.adivinar(palabra.value)=="Ganaste!")
  window.alert("¡ ¡ ¡ G  A  N  A  S  T  E ! ! ! ");
});
