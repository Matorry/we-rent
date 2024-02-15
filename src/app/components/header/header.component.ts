import { Component } from '@angular/core';
import { MenuOptions } from '../../types/menu.options';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [MenuComponent],
})
export class HeaderComponent {
  menuOptions: MenuOptions[] = [
    { label: 'Inicio', path: '' },
    { label: 'Quienes somos', path: '/about' },
    { label: 'Servicios', path: '/services' },
    { label: 'Contacto', path: '/contact' },
  ];
}
