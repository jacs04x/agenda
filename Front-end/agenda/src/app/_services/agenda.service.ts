import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Contacto } from '../_models/contacto';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  API_URL = 'http://localhost:3000'

  constructor(private httpC: HttpClient) { }

  getAgenda(){
    return this.httpC.get(this.API_URL+'/agenda')
  }

  


}
