import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { OurOfferListComponent } from './components/our-offer.list/our-offer.list.component';
import { OurWorkListComponent } from './components/our-work.list/our-work.list.component';
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
  ],
})
export class AppComponent {
  title = 'we-rent';
}
