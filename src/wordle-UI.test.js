import fs from "fs";

describe("Adivinar Palabra", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index2.html", "utf8");
    require("./presenter.js");
  });  

  it("No ver ningun mensaje si intento con una palabra sin ninguna letra que coincide", () => {
    const palabraAdivinar = document.querySelector("#intento");
    palabraAdivinar.value = "autos";

    const botonAdivinar = document.querySelector("#boton-adivinar");
    botonAdivinar.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("AUTOS");
  });
});