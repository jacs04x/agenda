import {Telefono} from '../_models/telefono';
import {Direccion} from '../_models/direccion';

export class Contacto{

    nombre: String | undefined
    apellidos : String | undefined
    fecha_nacimiento: Date | undefined
    foto : any | undefined
    telefono: Telefono [] | undefined
    direccion : Direccion | undefined


  constructor(
    nombre: String , 
    apellidos: String , 
    fecha_nacimiento: Date , 
    foto: any , 
    telefono: Telefono [] , 
    direccion: Direccion 
) {
    this.nombre = nombre
    this.apellidos = apellidos
    this.fecha_nacimiento = fecha_nacimiento
    this.foto = foto
    this.telefono = telefono
    this.direccion = direccion
  }



}