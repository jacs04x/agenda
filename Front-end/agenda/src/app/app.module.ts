import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ForbidenComponent } from './components/forbiden/forbiden.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { EditarComponent } from './components/editar/editar.component';
import { TelefonosComponent } from './components/telefonos/telefonos.component';
import { DireccionComponent } from './components/direccion/direccion.component';
import { NavbareditarComponent } from './components/navbareditar/navbareditar.component';
import { NavbarnuevoComponent } from './components/navbarnuevo/navbarnuevo.component';
import { NavbaraboutComponent } from './components/navbarabout/navbarabout.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    ForbidenComponent,
    NuevoComponent,
    EditarComponent,
    TelefonosComponent,
    DireccionComponent,
    NavbareditarComponent,
    NavbarnuevoComponent,
    NavbaraboutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
