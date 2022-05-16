class Wordle{
    constructor(palabra) {
        this.palabra = palabra;
    }
    adivinar(intento) {           
        let respuesta = ""
        if(this.palabra == intento){
            return "Ganaste!"
        }
        //respuesta = this.letrasCorectas(intento); 
        //respuesta = this.lestrasPosIncorrecta(intento);
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
    lestrasPosIncorrecta(intento){
        let respuesta = ""
        for(let i =0; i<this.palabra.length;i++){
            if(this.palabra.includes(intento[i])){
                respuesta += intento[i]
            }
        }        
        return respuesta
    }
    lestrasIncorrecta(intento){
        let respuesta = ""
        if(!this.palabra.includes(intento[0])){
            respuesta = respuesta + intento[0]
        }
        if(!this.palabra.includes(intento[1]) && intento[1]!="undefined"){
            respuesta = respuesta + intento[1]
        }
        return respuesta
    }
}
export default Wordle