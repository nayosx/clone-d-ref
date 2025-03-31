import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [MenuModule, ButtonModule, AvatarModule, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  items: MenuItem[] = [];

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  menuItems: MenuItem[] = [
    {
      label: 'Perfil',
      escape: false,
    },
    {
      label: 'Configuración',
    },
    {
      separator: true,
    },
    {
      label: 'Cerrar sesión',
    },
  ];
}
