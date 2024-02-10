import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMethodCardComponent } from './our-method.card.component';

describe('OurMethodCardComponent', () => {
  let component: OurMethodCardComponent;
  let fixture: ComponentFixture<OurMethodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurMethodCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurMethodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
