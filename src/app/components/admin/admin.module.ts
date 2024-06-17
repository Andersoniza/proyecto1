// src/app/admin/admin.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from '../../layout/layout.component';
import { MateriaComponent } from '../materia/materia-create.component'; 
import { ClaseListComponent } from '../clase/clase-list.component'; 

@NgModule({
  declarations: [
    LayoutComponent,
    MateriaComponent,
    ClaseListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
