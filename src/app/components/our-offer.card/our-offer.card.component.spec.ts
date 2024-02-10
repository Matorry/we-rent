import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurOfferCardComponent } from './our-offer.card.component';

describe('OurOfferCardComponent', () => {
  let component: OurOfferCardComponent;
  let fixture: ComponentFixture<OurOfferCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurOfferCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurOfferCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
