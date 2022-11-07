import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  texto: String = "";
  claseCodigo: String;

  constructor() { 
    this.claseCodigo = "";
  }

  ngOnInit(): void {
    
  }

  enviarTextoHijo(valorBtn: String) {
    this.claseCodigo = valorBtn;
    this.texto = "Has pulsado el btn: " + valorBtn;
  }
}
