// src/app/admin/admin-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../../layout/layout.component';
import { MateriaComponent } from '../materia/materia-create.component';
import { ClaseListComponent } from '../clase/clase-list.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: 'materias',
        component: MateriaComponent
      },
      {
        path: 'clases',
        component: ClaseListComponent
      },
      // Puedes añadir más rutas dentro de /admin según sea necesario
      { path: '', redirectTo: 'materias', pathMatch: 'full' } // Ruta por defecto dentro de /admin
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
