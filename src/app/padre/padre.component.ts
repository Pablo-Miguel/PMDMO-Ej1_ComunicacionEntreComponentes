import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent implements OnInit {
  texto: String = '';
  id: String;

  constructor() {
    this.id = "";
  }

  ngOnInit(): void {}

  enviarTextoHijo(valorBtn: HTMLButtonElement) {
    this.texto = valorBtn.innerHTML;
    this.id = valorBtn.id;
  }
}
