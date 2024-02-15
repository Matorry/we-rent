import { Component } from '@angular/core';
import { AboutUsComponent } from '../../components/about.us/about.us.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutUsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
