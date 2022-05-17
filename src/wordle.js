class Wordle{
    constructor(palabra) {
        this.palabra = palabra;
    }
    adivinar(intento) {                   
        if(this.palabra == intento){
            return "¡ ¡ ¡ G  A  N  A  S  T  E ! ! ! "
        }
        else
            return "PERDISTE LA PALABRA ERA: " + this.getPalabra()
        //respuesta = this.letrasCorectas(intento); 
        //respuesta = this.lestrasPosIncorrecta(intento);        
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
            if(this.palabra.includes(intento[i])  && this.palabra[i] != intento[i]){
                respuesta += intento[i]
            }
        }        
        return respuesta
    }
    lestrasIncorrecta(intento){
        let respuesta = ""
        for(let i = 0; i<intento.length;i++){
            if(!this.palabra.includes(intento[i])){
                respuesta += intento[i]
            }
        }         
        return respuesta
    }
    getPalabra(){
        return this.palabra;
    }    
}
export default Wordle