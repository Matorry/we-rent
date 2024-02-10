import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReadDataService } from '../../services/read.data.service';
import { WorkSection } from '../../model/home.page';
import { OurWorkCardComponent } from '../our-work.card/our-work.card.component';

@Component({
  selector: 'app-our-work-list',
  standalone: true,
  imports: [OurWorkCardComponent],
  templateUrl: './our-work.list.component.html',
  styleUrl: './our-work.list.component.scss'
})
export class OurWorkListComponent {
  data!: WorkSection;
  dataSuscription!: Subscription;
  constructor(public readDataService: ReadDataService) {}

  ngOnInit(): void {
    this.dataSuscription = this.readDataService.getData().subscribe({
      next: (data) =>
        (this.data = data.ourWork),
    });
  }

  ngOnDestroy(): void {
    this.dataSuscription.unsubscribe();
  }
}
