import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReadDataService } from '../../services/read.data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  title!: string;
  paragraphs!: string[];
  dataSuscription!: Subscription;
  constructor(public readDataService: ReadDataService) {}

  ngOnInit(): void {
    this.dataSuscription = this.readDataService.getData().subscribe({
      next: (data) => (
        (this.title = data.welcome.title),
        (this.paragraphs = this.readDataService.splitIntoParagraphs(
          data.welcome.description
        ))
      ),
    });
  }

  ngOnDestroy(): void {
    this.dataSuscription.unsubscribe();
  }
}
