import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnexureformComponent } from './annexureform.component';

describe('AnnexureformComponent', () => {
  let component: AnnexureformComponent;
  let fixture: ComponentFixture<AnnexureformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnexureformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnexureformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
