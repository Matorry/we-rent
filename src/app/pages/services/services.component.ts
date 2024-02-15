import { Component } from '@angular/core';
import { OurMethodListComponent } from '../../components/our-method.list/our-method.list.component';
import { OurOfferListComponent } from '../../components/our-offer.list/our-offer.list.component';
import { OurWorkListComponent } from '../../components/our-work.list/our-work.list.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    OurOfferListComponent,
    OurWorkListComponent,
    OurMethodListComponent,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {}
