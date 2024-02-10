import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from '../../model/home.page';
import { ReadDataService } from '../../services/read.data.service';
import { OurOfferCardComponent } from '../our-offer.card/our-offer.card.component';

@Component({
  selector: 'app-our-offer-list',
  standalone: true,
  imports: [OurOfferCardComponent],
  templateUrl: './our-offer.list.component.html',
  styleUrl: './our-offer.list.component.scss',
})
export class OurOfferListComponent {
  title!: string;
  paragraphs!: string[];
  cards!: Card[];
  dataSuscription!: Subscription;
  constructor(public readDataService: ReadDataService) {}

  ngOnInit(): void {
    this.dataSuscription = this.readDataService.getData().subscribe({
      next: (data) => {
        this.title = data.ourOffer.title;
        this.paragraphs = data.ourOffer.descriptionList;
        this.cards = data.ourOffer.cards;
      },
    });
  }

  ngOnDestroy(): void {
    this.dataSuscription.unsubscribe();
  }
}
