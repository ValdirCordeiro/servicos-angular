import { FuncionarioService } from './../funcionario.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FuncionarioCardComponent,
    FuncionarioFormComponent
  ],
  exports: [
    FuncionarioCardComponent,
    FuncionarioFormComponent
  ],
  providers: [
    FuncionarioService
  ]
})
export class FuncionarioModule { }
