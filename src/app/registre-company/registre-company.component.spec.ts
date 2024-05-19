import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreCompanyComponent } from './registre-company.component';

describe('RegistreCompanyComponent', () => {
  let component: RegistreCompanyComponent;
  let fixture: ComponentFixture<RegistreCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistreCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistreCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
