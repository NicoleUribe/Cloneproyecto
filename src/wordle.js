class Wordle{
    constructor(palabra) {
        this.palabra = palabra;
    }
    adivinar(intento) {   
        if(intento == this.palabra) 
            return "Ganaste!";
        else 
            return ""
        }
}
export default Wordle