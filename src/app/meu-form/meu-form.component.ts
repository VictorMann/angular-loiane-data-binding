import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: string = 'abc';
  pessoa: any = {
    nome: 'Loiane',
    idade: 18
  };

  constructor() { }

  ngOnInit() {
  }

}
