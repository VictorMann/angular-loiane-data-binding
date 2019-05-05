import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // inputs: ['nomeCurso:nome'] *outra forma de fazer
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso = '';
  // nomeCurso: string = ''; *

  constructor() { }

  ngOnInit() {
  }

}
