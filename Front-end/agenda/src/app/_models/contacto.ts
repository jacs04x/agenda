import {Telefono} from '../_models/telefono';
import {Direccion} from '../_models/direccion';
import {Fotografia} from '../_models/fotografia';

export class Contacto{
    _id: number 
    nombre: String 
    apellidos : String 
    fecha_nacimiento: Date
    fotografia: Fotografia 
    telefono: Telefono [] 
    direccion : Direccion 



  constructor(
    _id: number , 
    nombre: String , 
    apellidos: String , 
    fecha_nacimiento: Date , 
    fotografia: Fotografia , 
    telefono: Telefono [] , 
    direccion: Direccion 
) {
    this._id = _id
    this.nombre = nombre
    this.apellidos = apellidos
    this.fecha_nacimiento = fecha_nacimiento
    this.fotografia = fotografia
    this.telefono = telefono
    this.direccion = direccion
  }




}