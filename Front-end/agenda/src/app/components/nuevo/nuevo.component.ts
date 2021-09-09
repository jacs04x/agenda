import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/_models/contacto';
import { Direccion } from 'src/app/_models/direccion';
import {Fotografia} from 'src/app/_models/fotografia';
import { ContactoService } from 'src/app/_services/contacto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import {Router, ActivatedRoute} from '@angular/router'

import * as $ from 'jquery';
import { Telefono } from 'src/app/_models/telefono';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  contactoForm: FormGroup | any
  submitted = false
  datos : string

  constructor(
    private contactoService: ContactoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.contactoForm = this.formBuilder.group({
      nombre : ['', Validators.required],
      apellidos: ['', Validators.required],
      fotografia: ['', Validators.required],
      fecha_nacimiento : ['', Validators.required]
    }

    )

  }

  /**
   * Funcion para crear un contacto, este se creara parcialmente
   * 
   */

  createContacto(){
    this.submitted = true
    if(this.contactoForm.invalid){
      this.showFail("hacen falta datos \n\n 😢")
      return
    }else {

      console.log(this.contactoForm.value.fotografia)

      
      const contacto = new Contacto(null,this.contactoForm.value.nombre,
                                    this.contactoForm.value.apellidos,
                                    this.contactoForm.value.fecha_nacimiento,
                                    new Fotografia("name", "path"), 
                                    [], 
                                    new Direccion("","","","","","",""))
      this.contactoService.createContacto(contacto).subscribe(
        res => {
            console.log(res)
            this.showSucces("agregado!")
        }, 
        err => {
          console.log(JSON.stringify(err))
          if(err.statusText=="OK" && err.status==200){
            
            this.showSucces("agregado!")
            this.inicio()
          }else{
            this.showFail("Algo salio mal...")
          }
        }
      )

    }


  }

  selected(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
      this.contactoForm.patchValue( {fotografia : file})
      const allowedMimeTypes = ["image/png","image/jpeg", "image/jpg"]
      if(file && allowedMimeTypes.includes(file.type)){
        const reader = new FileReader()
        reader.onload = () => {
          this.datos = reader.result as string
        }
        reader.readAsDataURL(file)
      }
  }

  regresar(){
    this.contactoForm.reset()
  }

  inicio(){
    this.router.navigate(['/'])
  }



  get f () {return this.contactoForm.controls}

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
