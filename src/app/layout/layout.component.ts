// src/app/admin/layout/layout.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div>
      <h2>Panel de Administración</h2>
      <router-outlet></router-outlet>
    </div>
  `
})
export class LayoutComponent { }
