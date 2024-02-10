import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkCardComponent } from './our-work.card.component';

describe('OurWorkCardComponent', () => {
  let component: OurWorkCardComponent;
  let fixture: ComponentFixture<OurWorkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurWorkCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurWorkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
