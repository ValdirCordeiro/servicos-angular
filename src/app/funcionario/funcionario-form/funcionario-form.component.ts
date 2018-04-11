import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LogService } from 'app/log.service';
import { FuncionarioService } from '../../funcionario.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  constructor(
    private funcionarioService: FuncionarioService,
    private logService: LogService) {  }

  adicionar(nome: string) {
    this.funcionarioService.adicionar(nome);
  }

}
