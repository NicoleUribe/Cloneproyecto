class Wordle{
    constructor(palabra) {
        this.palabra = palabra;
    }
    adivinar(intento) {   
        if(intento == this.palabra) 
            return "Ganaste!";
        if(intento[0] == this.palabra[0])
            return intento[0];
        else 
            return ""
    }
}
export default Wordle