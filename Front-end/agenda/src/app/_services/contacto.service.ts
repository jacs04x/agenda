import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Contacto } from '../_models/contacto';
import { Telefono } from '../_models/telefono';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  API_URL = 'http://localhost:3000'

  constructor(private httpC: HttpClient) { }
  
  getContacto(id: number){
    return this.httpC.get(this.API_URL+'/contacto/'+id)
  }

  createContacto(contacto: Contacto){
    return this.httpC.post(this.API_URL+'/contacto/new',contacto)
  }

  editContacto(contacto: Contacto){
    return this.httpC.put(this.API_URL+'/contacto/edit/'+contacto._id, contacto)
  }

  deleteContacto(id: number){
    return this.httpC.delete(this.API_URL+'/contacto/delete/'+id)
  }

  deleteTelefono(id: number, telefono: Telefono){    
    console.log(telefono)
    return this.httpC.put(this.API_URL+'/contacto/telefono/delete/'+id, telefono )
  }

}
