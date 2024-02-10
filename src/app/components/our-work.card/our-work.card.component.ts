import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ImageInfo } from '../../model/home.page';

@Component({
  selector: 'app-our-work-card',
  standalone: true,
  imports: [],
  templateUrl: './our-work.card.component.html',
  styleUrl: './our-work.card.component.scss'
})
export class OurWorkCardComponent {
  @Input() imgUrl!: string;
  @Input() side!: string;
}
