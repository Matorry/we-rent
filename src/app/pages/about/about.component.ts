import { Component } from '@angular/core';
import { AboutUsComponent } from '../../components/about.us/about.us.component';
import { OpinionListComponent } from '../../components/opinion.list/opinion.list.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutUsComponent, OpinionListComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
