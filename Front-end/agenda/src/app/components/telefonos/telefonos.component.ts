import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/_models/contacto';
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
  lista_de_telefonos : [] = []
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
    this.catidad_de_telefonos +=1 
    /*let row = document.createElement('div'); 
      this.catidad_de_telefonos +=1 
      row.className = 'row';
      row.innerHTML = ' <input type="text"  id="'+this.catidad_de_telefonos+'" class="form-control mb-3" placeholder="Alias"> <button>Cancelar</button>';
      document.querySelector('.showInputField').appendChild(row);*/
  }



}
