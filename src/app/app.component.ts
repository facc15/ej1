import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ej1';
  public edadUno:any;
  public edadDos:any;
  public resultadoSuma:any;
  public resultadoPromedio:any;

  calcular(){
    this.calcularSuma();
    this.calcularPromedio();
  }

  calcularSuma(){ this.resultadoSuma = this.edadUno + this.edadDos; }

  calcularPromedio(){ this.resultadoPromedio = this.resultadoSuma / 2; }

  limpiar(){
    this.edadUno = "";
    this.edadDos = "";
    this.resultadoPromedio = "";
    this.resultadoSuma = "";
  }
}
