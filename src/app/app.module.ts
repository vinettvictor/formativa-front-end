import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartidas/header/header.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { RegistroProductoComponent } from './vistas/registro-producto/registro-producto.component';
import { HomeComponent } from './vistas/home/home.component';
import { DefaultComponent } from './vistas/default/default.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistroComponent,
    RegistroProductoComponent,
    HomeComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
