import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'
@Component({
selector: 'app-Cliente',
templateUrl: './Cliente.component.html',
styleUrls: ['./Cliente.component.css']
})
export class ClienteComponent implements OnInit {
registro=[];
cliente:any;
nombre:string;
DUI:number;
codigo:number;
precio:number;
mayor:string;
Compra:number;
contador:number;
constructor() { }
ngOnInit() {
this.Compra=0;
this.nombre='';
this.contador=0;
}
ingresar(){
if(this.Compra>1 && this.Compra>1){
this.mayor='5% de descuento '
}else{
  this.mayor='10% de descuento'
}
this.cliente={"nombre":this.nombre,"DUI":this.DUI,"codigo":this.codigo,"precio":this.precio,"compra":this.Compra,"mayor":this.mayor,};
this.registro.push(this.cliente);
this.contador++;
}
}