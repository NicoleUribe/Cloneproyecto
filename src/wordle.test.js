
import Wordle from "./wordle";

describe("UCB-Wordle  -> Ganar", () => {
  it("Deberia responder 'Ganaste!' si se adivina La palabra", () => {
    const wordle = new Wordle("a");
    expect(wordle.adivinar("a")).toEqual("Ganaste!");
  });

  it("Deberia mostrar '' si no  se adivina La palabra", () => {
    const wordle = new Wordle("a");
    expect(wordle.adivinar("b")).toEqual("");
  });

});

describe("UCB-Wordle  -> Pista palabra primera posicion", () => {
  it("En caso de que la palabra sea 'marte' y el intento 'moler' deberia devoler 'm'", () => {
    const wordle = new Wordle("marte");
    expect(wordle.adivinar("moler")).toEqual("m");
  });
  
  it("En caso de que la palabra sea 'palta' y el intento 'peras' deberia devoler 'p'", () => {
    const wordle = new Wordle("palta");
    expect(wordle.adivinar("peras")).toEqual("p");
  });
});
