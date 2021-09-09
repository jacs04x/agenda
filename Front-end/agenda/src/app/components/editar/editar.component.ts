import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacto } from 'src/app/_models/contacto';
import { ContactoService } from 'src/app/_services/contacto.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id: number 
  contacto: Contacto | any

  constructor(
    
    private contactoService: ContactoService,
    private route: ActivatedRoute,
    
    ) { }

  ngOnInit(): void {
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
        console.log(err)
      }
    )

  }

}
