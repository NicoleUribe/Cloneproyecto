import fs from "fs";

describe("Adivinar Palabra", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index2.html", "utf8");
    require("./presenter.js");
  });  

  it("Si la palabra ingresada es autos debe ser recuperada y mostrada en mayusculas", () => {
    const palabraAdivinar = document.querySelector("#intento");
    palabraAdivinar.value = "autos";

    const botonAdivinar = document.querySelector("#boton-adivinar");
    botonAdivinar.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("AUTOS");
  });

  
  it("Si la palabra ingresada es carta debe ser recuperada y mostrada en mayusculas", () => {
    const palabraAdivinar = document.querySelector("#intento");
    palabraAdivinar.value = "carta";

    const botonAdivinar = document.querySelector("#boton-adivinar");
    botonAdivinar.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("CARTA");
  });
});