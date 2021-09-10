import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/_models/contacto';
import {Direccion} from 'src/app/_models/direccion';
import { ContactoService } from 'src/app/_services/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id: number 
  contacto: Contacto | any
  fecha: Date
  contactoEditandoForm : FormGroup
  submitted = false

  constructor(
    
    private contactoService: ContactoService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
    
    ) { }

  ngOnInit(): void {
    this.contactoEditandoForm = this.formBuilder.group(
      {
        nombre: ['', Validators.required],
        apellidos : ['', Validators.required],
        fotografia : ['', Validators.required],
        fecha_nacimiento : ['', Validators.required]
      }
    )
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });
    this.getcontacto()
    
  }

  getcontacto(){

    this.contactoService.getContacto(this.id).subscribe(
      res => {
        this.contacto = res              
        
      },
      err => {
        console.log("err")
        console.log(err)
      }
    )

  }

  editar(){
    this.submitted = true
    if(this.contactoEditandoForm.invalid){
      this.showFail("hacen falta datos \n\n 😢")
      return  
    }else{
      
      const contactoEditando = new Contacto(this.id,
        this.contactoEditandoForm.value.nombre,
        this.contactoEditandoForm.value.apellidos,
        this.contactoEditandoForm.value.fecha_nacimiento,
        this.contactoEditandoForm.value.fotografia,
        [], new Direccion("","","","","","",""))

      console.log(contactoEditando)

      this.contactoService.editContacto(contactoEditando).subscribe(
        res => {
            this.showSucces("Editado!")
        },
        err => {
          if(err.statusText=="OK" && err.status==200){
          this.showSucces("Editado!")
          this.regresarAlInicio()
          }else{
            this.showFail("Algo salio mal...")
          }
        }
      )
    }
  }

  regresarAlInicio(){
    this.router.navigate(['/'])
  }

  get f () {return this.contactoEditandoForm.controls}

  showFail(message: string){
    Swal.fire({
      icon: 'error',
      title: message
      
    });
  }

  showSucces(message: string){
    Swal.fire({
      icon: 'success',
      title: message,
    });
  }
}
