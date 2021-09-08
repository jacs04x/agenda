import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from '../app/components/inicio/inicio.component'
import {EditarComponent} from '../app/components/editar/editar.component'
import { NuevoComponent } from './components/nuevo/nuevo.component';

const routes: Routes = [
  {path : '', component: InicioComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'nuevo', component: NuevoComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
