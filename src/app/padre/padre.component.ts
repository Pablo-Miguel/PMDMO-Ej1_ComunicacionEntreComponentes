import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  texto: String = "";

  constructor() { 
  }

  ngOnInit(): void {
    
  }

  enviarTextoHijo(valorBtn: String) {
    this.texto = valorBtn;
  }
}
