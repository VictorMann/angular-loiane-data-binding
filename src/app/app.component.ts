import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  valorCiclo: number = 5;
  isDestroiValor: boolean = false;

  mudarValorCiclo() {
    this.valorCiclo ++;
  }

  onDestruir() {
    this.isDestroiValor = true;
  }
}
