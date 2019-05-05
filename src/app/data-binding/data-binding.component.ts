import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  // styleUrls: ['./data-binding.component.css']
  styles: [`
    .highlight {
      background: yellow;
      font-weight: bold;
    }
  `]
})
export class DataBindingComponent implements OnInit {

  url: string = 'https://cicloleiriense.com.br';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  valorAtual: string;
  valorSalvo: string;
  isMouseOver: boolean = false;

  nomeDoCurso = 'Angular';

  constructor() { }

  getValor() {
    return 1;
  }

  getCurtiCurso() {
    return true;
  }

  botaoClicado() {
    alert('me clique!');
  }

  keyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  ngOnInit() {
  }

}
