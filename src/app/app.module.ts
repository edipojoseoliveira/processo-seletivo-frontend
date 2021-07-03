import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { StatusServicoService } from './statusservico.service';

import { StatusServicoPipe } from './statusservico.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StatusServicoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule,
    TableModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [StatusServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
