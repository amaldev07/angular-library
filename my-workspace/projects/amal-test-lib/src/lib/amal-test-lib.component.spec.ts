import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmalTestLibComponent } from './amal-test-lib.component';

describe('AmalTestLibComponent', () => {
  let component: AmalTestLibComponent;
  let fixture: ComponentFixture<AmalTestLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmalTestLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmalTestLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
