import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteCompanyComponent } from './complete-company.component';

describe('CompleteCompanyComponent', () => {
  let component: CompleteCompanyComponent;
  let fixture: ComponentFixture<CompleteCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompleteCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompleteCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
