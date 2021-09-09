import { Component, OnInit } from '@angular/core';
import {AgendaService} from '../../_services/agenda.service'
import {Contacto} from '../../_models/contacto';
import Swal from 'sweetalert2';
import {Router, ActivatedRoute} from '@angular/router'
import * as $ from 'jquery';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  agenda : Contacto [] | any
  oculto = false

  constructor(
    private agendaService: AgendaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAgenda()
    
  }

  getAgenda(){

    this.agendaService.getAgenda().subscribe(
      res => {
        this.agenda = res
      },
      err => {
        
        console.log(err)
      }
    )

  }

  createContacto(){}

  editar(contacto: Contacto){
    this.router.navigate(["/editar"], {queryParams: {id: contacto._id}})
  }

  eliminar(contacto: Contacto){
    console.log(contacto)
  }

  
  showFail(message: string){
    Swal.fire({
      icon: 'error',
      title: message
    })
  }

  showSucces(message: string){
    Swal.fire({
      icon: 'success',
      title: message,
    });
  }

}
