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

  errNombre: string = "";
  errCodigo: string = "";
  errCantidad: string = "";
  errPrecio: string = "";

  constructor() { }

  ngOnInit(): void {
  }


  guardar(nombre: string, cod: string, cantidad: number|any, precio: number|any): void {
    this.lista_producto.push(nombre,cod,cantidad,precio);
    console.log(this.nombre, this.cantidad, this.precio, this.cod);
  }

  insertar(){
    this.errNombre = "";
    this.errCodigo = "";
    this.errPrecio = "";
    this.errCantidad = "";

    if(this.nombre==""){
      this.errNombre = "Error, ingrese un nombre"
    }
    if(this.cod==""){
      this.errCodigo = "Error, ingrese un código"
    }
    if(this.precio==null){
      this.errPrecio = "Error,ingrese un precio"
    }
    if(this.nombre==""){
      this.errCantidad = "Error, ingrese la cantidad"
    }

    console.log(this.nombre, this.cantidad, this.precio, this.cod);
  }
}
