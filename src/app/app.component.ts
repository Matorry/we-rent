import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { OurWorkListComponent } from "./components/our-work.list/our-work.list.component";
import { OurOfferListComponent } from './components/our-offer.list/our-offer.list.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, OurOfferListComponent, OurWorkListComponent]
})
export class AppComponent {
  title = 'we-rent';
}
