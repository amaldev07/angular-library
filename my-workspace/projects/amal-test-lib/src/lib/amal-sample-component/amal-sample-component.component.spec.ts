import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmalSampleComponentComponent } from './amal-sample-component.component';

describe('AmalSampleComponentComponent', () => {
  let component: AmalSampleComponentComponent;
  let fixture: ComponentFixture<AmalSampleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmalSampleComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AmalSampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
