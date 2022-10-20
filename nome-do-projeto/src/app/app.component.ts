import { Component } from '@angular/core';
import { Cliente } from './clientes/cliente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './cliente-inserir.component.css',
    './app.component.css',
    './clientes/cliente-lista/cliente-lista.component.css',
  ],
})
export class AppComponent {
  clientes: Cliente[] = [];
  onClienteAdicionado(cliente: Cliente) {
    this.clientes = [...this.clientes, cliente];
  }

  title = 'nome-do-projeto';
}
