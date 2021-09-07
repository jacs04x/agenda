export class Direccion{
    
    calle: String | undefined
    numero_exterior : String | undefined
    numero_interior : String | undefined
    colonia : String | undefined
    municipio : String | undefined
    estado : String | undefined
    referencias : String | undefined

    
    
  constructor(
    calle: String , 
    numero_exterior: String , 
    numero_interior: String , 
    colonia: String , 
    municipio: String , 
    estado: String , 
    referencias: String 
) {
    this.calle = calle
    this.numero_exterior = numero_exterior
    this.numero_interior = numero_interior
    this.colonia = colonia
    this.municipio = municipio
    this.estado = estado
    this.referencias = referencias
  }

}