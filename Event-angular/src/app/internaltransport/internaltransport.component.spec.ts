import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaltransportComponent } from './internaltransport.component';

describe('InternaltransportComponent', () => {
  let component: InternaltransportComponent;
  let fixture: ComponentFixture<InternaltransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternaltransportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternaltransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
