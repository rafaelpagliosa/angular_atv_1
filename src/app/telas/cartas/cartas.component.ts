import { Component } from '@angular/core';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent {

  numeroSelecionado: string = '';
  naipeSelecionado: string = '';

  selecionarNumero(numero: string) {
    this.numeroSelecionado = numero;
  }

  selecionarNaipe(naipe: string) {
    this.naipeSelecionado = naipe;
  }
}
