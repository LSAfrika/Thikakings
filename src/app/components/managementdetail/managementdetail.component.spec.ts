import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementdetailComponent } from './managementdetail.component';

describe('ManagementdetailComponent', () => {
  let component: ManagementdetailComponent;
  let fixture: ComponentFixture<ManagementdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementdetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagementdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
