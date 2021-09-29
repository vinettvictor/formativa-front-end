import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './vistas/default/default.component';
import { HomeComponent } from './vistas/home/home.component';
import { RegistroProductoComponent } from './vistas/registro-producto/registro-producto.component';
import { RegistroComponent } from './vistas/registro/registro.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'producto', component: RegistroProductoComponent},
  {path: 'registro', component: RegistroComponent},

  //default pages
  {path: '**', component: DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
