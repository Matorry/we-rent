import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutUsComponent } from './components/about.us/about.us.component';
import { DisscoverComponent } from './components/disscover/disscover.component';
import { HeaderComponent } from './components/header/header.component';
import { OpinionListComponent } from './components/opinion.list/opinion.list.component';
import { OurMethodListComponent } from './components/our-method.list/our-method.list.component';
import { OurOfferListComponent } from './components/our-offer.list/our-offer.list.component';
import { OurWorkListComponent } from './components/our-work.list/our-work.list.component';
import { RentYourAppartmentComponent } from './components/rent.your.appartment/rent.your.appartment.component';
import { TransfomYourAppartmentComponent } from './components/transfom.your.appartment/transfom.your.appartment.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    OurOfferListComponent,
    OurWorkListComponent,
    WelcomeComponent,
    OurMethodListComponent,
    DisscoverComponent,
    RentYourAppartmentComponent,
    TransfomYourAppartmentComponent,
    AboutUsComponent,
    OpinionListComponent,
  ],
})
export class AppComponent {}
