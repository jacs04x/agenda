import { Component, OnInit } from '@angular/core';
import {AgendaService} from '../../_services/agenda.service'
import {Contacto} from '../../_models/contacto';

import * as $ from 'jquery';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  contactos : Contacto [] | any
  oculto = false

  constructor(
    private agendaService: AgendaService

  ) { }

  ngOnInit(): void {
    this.getAgenda()
    
  }

  getAgenda(){

    this.agendaService.getAgenda().subscribe(
      res => {
        this.contactos = res
        console.log(res)
      },
      err => {

      }
    )

  }

  createContacto(){
    
    
  }

}
