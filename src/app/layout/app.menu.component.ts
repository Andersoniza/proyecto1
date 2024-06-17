import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Administración',
                items: [
                    { label: 'admin', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] },
                    { label: 'materia', icon: 'pi pi-fw pi-user', routerLink: ['/admin/materia'] }
                ]
            },
            {
                label: 'Inventario',
                items: [
                    { label: 'clase', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/clase'] },
                    { label: 'Producto', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/producto'] }                   
                ]
            },
            {
                label: 'Pedidos',
                items: [
                    { label: 'Lista Pedidos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/pedido'], badge: 'NEW' },
                    { label: 'Nuevo Pedidos', icon: 'pi pi-fw pi-eye', routerLink: ['/admin/pedido/nuevo'], badge: 'NEW' },
                    { label: 'Clientes', icon: 'pi pi-fw pi-users',routerLink: ['/admin/cliente'], target: '_blank' },
                ]
            },
            {
                label: 'Roles y Usuario',
                items: [
                    { label: 'Usuarios', icon: 'pi pi-fw pi-users', routerLink: ['/utilities/icons'] },
                    { label: 'Roles', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
                ]
            }
        ];
          
    }
}
