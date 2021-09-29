import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css']
})
export class RegistroProductoComponent implements OnInit {


  lista_producto: string[] = [];
  nombre: string = "";
  cod: string = "";
  cantidad: number = 0;
  precio: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  guardar(nombre: string, cod: string, cantidad: number|any, precio: number|any): void {
    this.lista_producto.push(nombre,cod,cantidad,precio);
    console.log(this.nombre, this.cantidad, this.precio, this.cod);
  }

  insertar(){
    console.log(this.nombre, this.cantidad, this.precio, this.cod);
  }
}
