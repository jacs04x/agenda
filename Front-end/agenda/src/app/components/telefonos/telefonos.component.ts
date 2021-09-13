import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/_models/contacto';
import {Telefono} from 'src/app/_models/telefono'
import { FormatoTelefonos } from 'src/app/_models/formatoTelefonos';
import {ContactoService} from 'src/app/_services/contacto.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import * as $ from 'jquery';

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
  paraEnviar: Telefono [] 
  nuevoForm : FormGroup 
  alias: string | any
  submitted = false
  constructor(
    private route: ActivatedRoute,
    private contactoService: ContactoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.carrito_de_telefonos= []
    this.nuevoForm =this.formBuilder.group(
      {
        alias: ['',Validators.required],
        tipo: ['', Validators.required],
        numero: ['', Validators.required]
      }
    )
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
  addTelefono(){

    this.catidad_de_telefonos +=1
    this.submitted = true
    if(this.nuevoForm.invalid){
      this.showFail("Hacen falta datos \n\n 😢")
      return
    }else {
      const toString = this.nuevoForm.value.numero+""
      if(toString.length < 10 || toString.length > 10){
        this.showFail("El número telefónico es incorrecto")
        return
      }else{
      this.carrito_de_telefonos.push(new FormatoTelefonos(this.catidad_de_telefonos,
                 new Telefono(this.nuevoForm.value.alias, this.nuevoForm.value.tipo, this.nuevoForm.value.numero ),false, false))
      this.submitted=false
      this.nuevoForm.reset()

      this.showSucces("Agregado!")
        
      }
    }
  }

cancela(id: number){
  for(let i of this.carrito_de_telefonos){
    if (id == i.id){
      i.cancelado = true
      break
    }
  }
  this.showSucces("Cancelado!")

}
eliminar(id: number){
  for(let i of this.carrito_de_telefonos){
    if (id == i.id){
      i.eliminado = true
      
      break
    }
  }
  this.showSucces("Eliminado!")
}

eliminarDeBase(id:number, t: Telefono){
  console.log(id) 
  const telefono = new Telefono(t.alias, t.tipo, t.numero)
  console.log(telefono)
  this.contactoService.deleteTelefono(id, telefono).subscribe(
    res => {

    },
    err => {
      if(err.statusText=="OK" && err.status==200){
        this.showSucces("Eliminadoa!")
      }else {
        this.showFail("Algo salio mal...")
      }
    }
  )
}

registrar() {
  var arr = []
  if(this.carrito_de_telefonos.length == 0){
    this.showFail("No hay nada que registrar")
  }else{
    for(let i of this.carrito_de_telefonos){
      if(i.cancelado==false && i.eliminado == false ){
        arr.push(i.telefono)
      }
    }
  }
  if(arr.length == 0){
    this.showFail("No hay nada que registrar")
  }else {
    const contacto = new Contacto(this.contacto._id,
                                  this.contacto.nombre,
                                  this.contacto.apellidos, 
                                  this.contacto.fecha_nacimiento, 
                                  this.contacto.fotografia, 
                                  this.contacto.telefono.concat(arr), 
                                  this.contacto.direccion )
    
    this.contactoService.editContacto(contacto).subscribe(
      res => {
        
      },
      err => {
        if(err.statusText=="OK" && err.status==200){
        this.showSucces("Teléfonos Registrados")
        console.log(err)
        this.getInformacioncontacto()
        this.carrito_de_telefonos = []
        }
      }
    )
  }
  
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

  get f () {return this.nuevoForm.controls}



}
