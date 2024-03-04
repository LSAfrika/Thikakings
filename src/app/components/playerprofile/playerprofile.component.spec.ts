import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerprofileComponent } from './playerprofile.component';

describe('PlayerprofileComponent', () => {
  let component: PlayerprofileComponent;
  let fixture: ComponentFixture<PlayerprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
