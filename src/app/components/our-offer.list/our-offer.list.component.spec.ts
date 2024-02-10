import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurOfferListComponent } from './our-offer.list.component';

describe('OurOfferListComponent', () => {
  let component: OurOfferListComponent;
  let fixture: ComponentFixture<OurOfferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurOfferListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurOfferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
