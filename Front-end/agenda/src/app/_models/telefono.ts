export class Telefono {
    alias: String | undefined
    tipo: String | undefined
    numero: String | undefined

    constructor(alias: String, tipo: String, numero: String){
        this.alias = alias
        this.tipo = tipo 
        this.numero = numero
    }
}