import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulationJobComponent } from './postulation-job.component';

describe('PostulationJobComponent', () => {
  let component: PostulationJobComponent;
  let fixture: ComponentFixture<PostulationJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostulationJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostulationJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
