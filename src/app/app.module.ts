import { FuncionarioService, FuncionarioAbreviadoService } from './funcionario.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent
  ],
  imports: [
    BrowserModule
  ],
  // O Angular faz a injeção de dependencia da classe que é colocada nos providers
  providers: [
    { provide: FuncionarioService, useClass: FuncionarioAbreviadoService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
