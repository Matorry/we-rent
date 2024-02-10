import { Component } from '@angular/core';
import { StepInfo } from '../../model/home.page';
import { ReadDataService } from '../../services/read.data.service';
import { Subscription } from 'rxjs';
import { OurMethodCardComponent } from '../our-method.card/our-method.card.component';

@Component({
  selector: 'app-our-method-list',
  standalone: true,
  imports: [OurMethodCardComponent],
  templateUrl: './our-method.list.component.html',
  styleUrl: './our-method.list.component.scss'
})
export class OurMethodListComponent {
  title!: string;
  steps!: StepInfo[];
  dataSuscription!: Subscription;
  constructor(public readDataService: ReadDataService) {}

  ngOnInit(): void {
    this.dataSuscription = this.readDataService.getData().subscribe({
      next: (data) => {
        this.title = data.ourMethod.title;
        this.steps = data.ourMethod.steps;
      },
    });
  }

  ngOnDestroy(): void {
    this.dataSuscription.unsubscribe();
  }
}
