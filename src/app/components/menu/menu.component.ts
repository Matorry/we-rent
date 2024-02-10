import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuOptions } from '../../types/menu.options';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() menuOptions!: MenuOptions[];
}
