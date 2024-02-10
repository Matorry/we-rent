import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkListComponent } from './our-work.list.component';

describe('OurWorkListComponent', () => {
  let component: OurWorkListComponent;
  let fixture: ComponentFixture<OurWorkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurWorkListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurWorkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
