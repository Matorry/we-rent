import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReadDataService } from '../../services/read.data.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent implements OnInit, OnDestroy {
  suscription!: Subscription;
  title!: string;
  paragraphs!: string[];
  constructor(private readDataService: ReadDataService) {}

  ngOnInit(): void {
    this.suscription = this.readDataService.getData().subscribe({
      next: (data) => {
        this.title = data.welcome.title;
        this.paragraphs = this.readDataService.splitIntoParagraphs(
          data.welcome.description
        );
      },
    });
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }
}
