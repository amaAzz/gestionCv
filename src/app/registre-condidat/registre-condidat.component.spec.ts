import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreCondidatComponent } from './registre-condidat.component';

describe('RegistreCondidatComponent', () => {
  let component: RegistreCondidatComponent;
  let fixture: ComponentFixture<RegistreCondidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistreCondidatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistreCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
