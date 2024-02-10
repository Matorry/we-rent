import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMethodListComponent } from './our-method.list.component';

describe('OurMethodListComponent', () => {
  let component: OurMethodListComponent;
  let fixture: ComponentFixture<OurMethodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurMethodListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurMethodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
