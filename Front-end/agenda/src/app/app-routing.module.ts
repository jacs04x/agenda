import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from '../app/components/inicio/inicio.component'
import {EditarComponent} from '../app/components/editar/editar.component'
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { DireccionComponent } from './components/direccion/direccion.component';
import { TelefonoComponent } from './components/telefono/telefono.component';

const routes: Routes = [
  {path : '', component: InicioComponent},
  {path: 'direccion', component: DireccionComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'nuevo', component: NuevoComponent},
  {path: 'telefono', component: TelefonoComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
