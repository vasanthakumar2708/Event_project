import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestdetailsComponent } from './guestdetails.component';

describe('GuestdetailsComponent', () => {
  let component: GuestdetailsComponent;
  let fixture: ComponentFixture<GuestdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
