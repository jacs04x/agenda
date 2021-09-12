import { Component, OnInit } from '@angular/core';
import {AgendaService} from '../../_services/agenda.service'
import {ContactoService} from '../../_services/contacto.service'
import {Contacto} from '../../_models/contacto';
import Swal from 'sweetalert2';
import {Router, ActivatedRoute} from '@angular/router'
import * as $ from 'jquery';
import { Agenda } from 'src/app/_models/agenda';


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
    private router: Router,
    private contactoService: ContactoService
  ) { }

  ngOnInit(): void {
    this.getAgenda()
    
  }

  getAgenda(){

    this.agendaService.getAgenda().subscribe(
      res => {
        this.agenda = res
        console.log(this.agenda)
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


  eliminar(id: number){
    Swal.fire({
      title: '¿Eliminar?',
      text: "No se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, elimina!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.contactoService.deleteContacto(id).subscribe(
          res => {
            this.getAgenda()
          },
          err => {
            if(err.statusText=="OK" && err.status==200){
            this.getAgenda()
            }
          }
        )
        Swal.fire(
          'Eliminado!',
          '',
          'success'
        )
      }
    })
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
