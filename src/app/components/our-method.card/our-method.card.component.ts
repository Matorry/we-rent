import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-our-method-card',
  standalone: true,
  imports: [],
  templateUrl: './our-method.card.component.html',
  styleUrl: './our-method.card.component.scss'
})
export class OurMethodCardComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
}
