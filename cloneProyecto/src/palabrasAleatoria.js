import myArray from "./palabras";

function palabrasAleatoria(){     
    var rand = Math.random()*myArray.length | 0;
    const respuesta = myArray[rand]
    return respuesta;
}
export default palabrasAleatoria