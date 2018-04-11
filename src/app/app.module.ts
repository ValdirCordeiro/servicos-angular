import { FuncionarioModule } from './funcionario/funcionario.module';
import { FuncionarioService } from './funcionario.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FuncionarioModule
  ],
  // O Angular faz a injeção de dependencia da classe que é colocada nos providers
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
