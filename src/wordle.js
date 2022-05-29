class Wordle{
    constructor() {
        let myArray = ['CARTA', 'TORTA', 'PEINE', 'POSTE', 'NAIPE'];
        var rand = Math.random()*myArray.length | 0;
        this.palabra = myArray[rand];
    }    
    adivinar(intento) {                   
        if(this.palabra == intento){
            return "¡ ¡ ¡ G  A  N  A  S  T  E ! ! ! "
        }
        else
            return "PERDISTE LA PALABRA ERA: " + this.getPalabra()        
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
    getLetra(pos){
        return this.palabra[pos];    
    }
}
export default Wordle