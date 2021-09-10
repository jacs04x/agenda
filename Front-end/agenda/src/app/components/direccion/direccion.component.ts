import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactoService } from 'src/app/_services/contacto.service';
import {Contacto} from 'src/app/_models/contacto';
import Swal from 'sweetalert2';
import { Direccion } from 'src/app/_models/direccion';
@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {
  id : number
  contacto: Contacto | any
  direccionForm: FormGroup 
  submitted = false
  estados = [
    { "clave": "AGS", "nombre": "AGUASCALIENTES" },
    { "clave": "BC",  "nombre": "BAJA CALIFORNIA" },
    { "clave": "BCS", "nombre": "BAJA CALIFORNIA SUR" },
    { "clave": "CHI", "nombre": "CHIHUAHUA" },
    { "clave": "CHS", "nombre": "CHIAPAS" },
    { "clave": "CMP", "nombre": "CAMPECHE" },
    { "clave": "CMX", "nombre": "CIUDAD DE MEXICO" },
    { "clave": "COA", "nombre": "COAHUILA" },
    { "clave": "COL", "nombre": "COLIMA" },
    { "clave": "DGO", "nombre": "DURANGO" },
    { "clave": "GRO", "nombre": "GUERRERO" },
    { "clave": "GTO", "nombre": "GUANAJUATO" },
    { "clave": "HGO", "nombre": "HIDALGO" },
    { "clave": "JAL", "nombre": "JALISCO" },
    { "clave": "MCH", "nombre": "MICHOACAN" },
    { "clave": "MEX", "nombre": "ESTADO DE MEXICO" },
    { "clave": "MOR", "nombre": "MORELOS" },
    { "clave": "NAY", "nombre": "NAYARIT" },
    { "clave": "NL",  "nombre": "NUEVO LEON" },
    { "clave": "OAX", "nombre": "OAXACA" },
    { "clave": "PUE", "nombre": "PUEBLA" },
    { "clave": "QR",  "nombre": "QUINTANA ROO" },
    { "clave": "QRO", "nombre": "QUERETARO" },
    { "clave": "SIN", "nombre": "SINALOA" },
    { "clave": "SLP", "nombre": "SAN LUIS POTOSI" },
    { "clave": "SON", "nombre": "SONORA" },
    { "clave": "TAB", "nombre": "TABASCO" },
    { "clave": "TLX", "nombre": "TLAXCALA" },
    { "clave": "TMS", "nombre": "TAMAULIPAS" },
    { "clave": "VER", "nombre": "VERACRUZ" },
    { "clave": "YUC", "nombre": "YUCATAN" },
    { "clave": "ZAC", "nombre": "ZACATECAS" } 
]

  constructor(

    private contactoService: ContactoService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      
    });

    this.direccionForm = this.formBuilder.group(
      {
        calle : ['', Validators.required],
        numero_exterior : ['', Validators.required],
        numero_interior : ['', Validators.required],
        colonia : ['', Validators.required],
        municipio : ['', Validators.required],
        estado : ['', Validators.required],
        referencias : ['', Validators.required]

      }
    )
    this.getInformacioncontacto()
  }

  getInformacioncontacto(){
    this.contactoService.getContacto(this.id).subscribe(
      res => {
        this.contacto = res
        
      },
      err => {

      }
    )
  }

  actualizarDireccion(){
    this.submitted = true
    if(this.direccionForm.invalid){
      this.showFail("Hacen falta datos \n\n 😢")
      return
    }else{
      const contacto = new Contacto(this.contacto._id,
                                    this.contacto.nombre,
                                    this.contacto.apellidos,
                                    this.contacto.fecha_nacimiento,
                                    this.contacto.fotografia,
                                    [], new Direccion(
                                      this.direccionForm.value.calle,
                                      this.direccionForm.value.numero_exterior,
                                      this.direccionForm.value.numero_interior,
                                      this.direccionForm.value.colonia,
                                      this.direccionForm.value.municipio,
                                      this.direccionForm.value.estado,
                                      this.direccionForm.value.referencias
                                      )
        )
      this.contactoService.editContacto(contacto).subscribe(
        res => {

        },
        err => {
          if(err.statusText=="OK" && err.status==200){
              this.showSucces("Dirección Actualizada!")
          }else {
            this.showFail("Algo salio mal...")
          }

        }
      )
    }
  }

  get f () {return this.direccionForm.controls}

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
