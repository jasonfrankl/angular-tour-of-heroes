import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillanDetailComponent } from './villan-detail.component';

describe('VillanDetailComponent', () => {
  let component: VillanDetailComponent;
  let fixture: ComponentFixture<VillanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillanDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VillanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
