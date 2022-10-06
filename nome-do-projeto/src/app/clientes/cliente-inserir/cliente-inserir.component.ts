import { Component } from '@angular/core';
@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
})
export class ClienteInserirComponent {
  nome: string | undefined;
  fone: string | undefined;
  email: string | undefined;

  onAdicionarCliente() {
    console.log('inserindo cliente...');
  }
}
