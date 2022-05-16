class Wordle{
    constructor(palabra) {
        this.palabra = palabra;
    }
    adivinar(intento) {           
        let respuesta = ""
        if(this.palabra == intento){
            return "Ganaste!"
        }
        respuesta = this.letrasCorectas(intento);
        return respuesta;
    }
    letrasCorectas(intento){
        let respuesta = ""
        for(let i =0; i<this.palabra.length;i++){
            if(this.palabra[i] == intento[i]){
                respuesta += intento[i]
            }
        }
        return respuesta;
    }
}
export default Wordle