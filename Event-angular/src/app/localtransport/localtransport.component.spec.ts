import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaltransportComponent } from './localtransport.component';

describe('LocaltransportComponent', () => {
  let component: LocaltransportComponent;
  let fixture: ComponentFixture<LocaltransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaltransportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocaltransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
