
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
