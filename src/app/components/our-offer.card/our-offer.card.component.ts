import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ReadDataService } from '../../services/read.data.service';

@Component({
  selector: 'app-our-offer-card',
  standalone: true,
  imports: [],
  templateUrl: './our-offer.card.component.html',
  styleUrl: './our-offer.card.component.scss'
})
export class OurOfferCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  paragraphs!: string[];
  constructor(public readDataService: ReadDataService) {}
  
  ngOnInit(): void {
    this.paragraphs = this.readDataService.splitIntoParagraphs(
      this.description);
  }
}
