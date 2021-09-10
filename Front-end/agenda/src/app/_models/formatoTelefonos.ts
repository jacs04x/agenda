import {Telefono} from '../_models/telefono';
export class FormatoTelefonos{
    id: number
    telefono: Telefono 
    cancelado: boolean
    eliminado: boolean

  constructor(id:number,telefono: Telefono , cancelado: boolean, eliminado: boolean) {
    this.id=id
    this.telefono = telefono
    this.cancelado = cancelado
    this.eliminado = eliminado
  }



}