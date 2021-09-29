import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string = "";
  nombre: string = "";
  telefono: string| any = 0;
  valido: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  enviar(email: string, nombre: string, telefono: string|any): void{
    if (nombre!=""){
      if (nombre.length < 4 || nombre.length >10){
          console.log("nombre correcto", nombre);
      } 
      if(email!=null) {
        let regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
            if (regex.test(email.trim())) {
                  console.log("Correo validado");
                  console.log(this.email);
            } else {
                  console.log('La direccón de correo no es válida');
                  return;
            } 

            if(telefono!=null){
              let regex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/g;
              if (regex.test(telefono)) {
                console.log('Formato Correcto');
                console.log(telefono);
              } else {
                console.log('El formato no es correcto');
              return;
              }
        this.valido = true;     
    } else {
      this.valido = false;
    }
    }
    }
  }
}
