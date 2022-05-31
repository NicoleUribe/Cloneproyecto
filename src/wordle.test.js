import Wordle from "./wordle";
import palabrasAleatoria from "./palabrasAleatoria";

describe("UCB-Wordle  -> Ganar", () => {
  it("Deberia responder '¡ ¡ ¡ G  A  N  A  S  T  E ! ! !' si se adivina La palabra", () => {
    const wordle = new Wordle();
    let palabraAl = wordle.getPalabra();
    expect(wordle.adivinar(palabraAl)).toEqual('¡ ¡ ¡ G  A  N  A  S  T  E ! ! ! ');
  });

  it("Deberia mostrar 'PERDISTE LA PALABRA ERA:' CORTE si no  se adivina La palabra", () => {
    const wordle = new Wordle();
    let palabraAl = wordle.getPalabra();
    expect(wordle.adivinar("RUMOR")).toEqual("PERDISTE LA PALABRA ERA: "+palabraAl);
  });

});

describe("UCB-Wordle  -> Pista letra en posicion correcta", () => {
  it("En caso de que la palabra sea 'molde' y el intento 'mosca' deberia devoler 'mo'", () => {
    const wordle = new Wordle();
    wordle.palabra = "torta";
    expect(wordle.letrasCorectas("morfa")).toEqual("ora");
  });  
  it("En caso de que la palabra sea 'molde' y el intento 'mosca' deberia devoler 'mo'", () => {
    const wordle = new Wordle();
    wordle.palabra = "molde";
    expect(wordle.letrasCorectas("mosca")).toEqual("mo");
  });
  it("En caso de que la palabra sea 'palta' y el intento 'peras' deberia devoler 'p'", () => {
    const wordle = new Wordle();
    wordle.palabra = "palta";
    expect(wordle.letrasCorectas("peras")).toEqual("p");
  });
});

describe("UCB-Wordle  -> Pista letra en posicion incorrecta", () => {  
  it("En caso de que la palabra sea 'molde' y el intento 'e' deberia devoler 'mo'", () => {
    const wordle = new Wordle();
    wordle.palabra = "molde";
    expect(wordle.lestrasPosIncorrecta("e")).toEqual("e");
  });  
  it("En caso de que la palabra sea 'carta' y el intento 'ta' deberia devoler 'mo'", () => {
    const wordle = new Wordle();
    wordle.palabra = "carta";
    expect(wordle.lestrasPosIncorrecta("t")).toEqual("t");
  });
  it("En caso de que la palabra sea 'facil' y el intento 'prisa' deberia devoler 'mo'", () => {
    const wordle = new Wordle();
    wordle.palabra = "facil";
    expect(wordle.lestrasPosIncorrecta("prisa")).toEqual("ia");
  });
});

describe("UCB-Wordle  -> Pista letra no incluida en la palabra", () => {  
  it("En caso de que la palabra sea 'palta' y el intento 'c' deberia devoler 'c'", () => {
    const wordle = new Wordle();
    wordle.palabra = "palta";
    expect(wordle.lestrasIncorrecta("c")).toEqual("c");
  });  
  it("En caso de que la palabra sea 'rimas' y el intento 'po' deberia devoler 'po'", () => {
    const wordle = new Wordle();
    wordle.palabra = "rimas";
    expect(wordle.lestrasIncorrecta("po")).toEqual("po");
  });
  it("En caso de que la palabra sea 'tacos' y el intento 'maria' deberia devoler 'maria'", () => {
    const wordle = new Wordle("tacos");
    expect(wordle.lestrasIncorrecta("maria")).toEqual("mri");
  });
});