
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
  it("Deberia responder 'Ganaste!' si se adivina La palabra", () => {
    const wordle = new Wordle("marte");
    expect(wordle.adivinar("moler")).toEqual("m");
  });
});
