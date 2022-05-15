class Wordle{
    constructor(palabra) {
        this.palabra = palabra;
    }
    adivinar(intento) {           
        let respuesta = ""
        if(intento == this.palabra) 
            return "Ganaste!";                 
        if(intento[0] == this.palabra[0])
            respuesta =  respuesta + intento[0]        
        if(intento[1] == this.palabra[1])
            respuesta =  respuesta + intento[1]
        return respuesta;
    }
}
export default Wordle