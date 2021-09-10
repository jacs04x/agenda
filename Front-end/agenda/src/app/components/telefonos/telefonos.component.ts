import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/_models/contacto';
import {Telefono} from 'src/app/_models/telefono'
import { FormatoTelefonos } from 'src/app/_models/formatoTelefonos';
import {ContactoService} from 'src/app/_services/contacto.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-telefonos',
  templateUrl: './telefonos.component.html',
  styleUrls: ['./telefonos.component.css']
})
export class TelefonosComponent implements OnInit {
  id :number
  contacto: Contacto | any
  catidad_de_telefonos: number = 0
  carrito_de_telefonos: FormatoTelefonos [] 
  constructor(
    private route: ActivatedRoute,
    private contactoService: ContactoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    })
    this.getInformacioncontacto()
  }

  getInformacioncontacto(){
    this.contactoService.getContacto(this.id).subscribe(
      res => {
        this.contacto=res
      },
      err=> {

      }
      
    )
  }

  add(){
    
  }



}
