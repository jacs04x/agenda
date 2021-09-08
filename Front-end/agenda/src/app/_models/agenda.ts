import {Contacto} from '../_models/contacto';

export class Agenda{

    contactos : Contacto[] | any


  constructor(contactos: Contacto[] ) {
    this.contactos = contactos
  }
    

}