import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternaltransportComponent } from './externaltransport.component';

describe('ExternaltransportComponent', () => {
  let component: ExternaltransportComponent;
  let fixture: ComponentFixture<ExternaltransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternaltransportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternaltransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
