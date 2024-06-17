// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MateriaComponent } from './components/materia/materia-create.component'; // Asegúrate de que el path sea correcto
import { ClaseListComponent } from './components/clase/clase-list.component'; // Asegúrate de que el path sea correcto

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MateriaComponent,
    ClaseListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
