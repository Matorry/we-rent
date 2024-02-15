import { Component } from '@angular/core';
import { DisscoverComponent } from '../../components/disscover/disscover.component';
import { RentYourAppartmentComponent } from '../../components/rent.your.appartment/rent.your.appartment.component';
import { TransfomYourAppartmentComponent } from '../../components/transfom.your.appartment/transfom.your.appartment.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WelcomeComponent,
    DisscoverComponent,
    RentYourAppartmentComponent,
    TransfomYourAppartmentComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
