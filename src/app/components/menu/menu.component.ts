import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MenuOptions } from '../../types/menu.options';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() menuOptions!: MenuOptions[];
}
