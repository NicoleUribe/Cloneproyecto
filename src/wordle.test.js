
import Wordle from "./wordle";

describe("UCB-Wordle  -> Ganar", () => {
  it("Deberia responder 'Ganaste!' si se adivina La palabra", () => {
    const wordle = new Wordle("artes");
    expect(wordle.adivinar("artes")).toEqual("Ganaste!");
  });

  it("Deberia mostrar '' si no  se adivina La palabra", () => {
    const wordle = new Wordle("corte");
    expect(wordle.adivinar("rumor")).toEqual("");
  });

});

describe("UCB-Wordle  -> Pista palabra en posicion correcta", () => {
  it("En caso de que la palabra sea 'molde' y el intento 'mosca' deberia devoler 'mo'", () => {
    const wordle = new Wordle("torta");
    expect(wordle.adivinar("morfa")).toEqual("ora");
  });  
  it("En caso de que la palabra sea 'molde' y el intento 'mosca' deberia devoler 'mo'", () => {
    const wordle = new Wordle("molde");
    expect(wordle.adivinar("mosca")).toEqual("mo");
  });
  it("En caso de que la palabra sea 'palta' y el intento 'peras' deberia devoler 'p'", () => {
    const wordle = new Wordle("palta");
    expect(wordle.adivinar("peras")).toEqual("p");
  });
});