// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Ruta para el módulo de administración
  {
    path: 'admin',
    loadChildren: () => import ('./admin').then(m => m.AdminModule)
  },
  
  // Rutas principales de la aplicación fuera de /admin
  {
    path: '',
    loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)
  },
  
  // Ruta por defecto si se accede a la raíz
  { path: '', redirectTo: 'admin/materias', pathMatch: 'full' },

  // Otras rutas de la aplicación si las hay
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
