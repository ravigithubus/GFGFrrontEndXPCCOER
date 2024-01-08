import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeadsPageComponent } from './team-leads-page.component';

describe('TeamLeadsPageComponent', () => {
  let component: TeamLeadsPageComponent;
  let fixture: ComponentFixture<TeamLeadsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamLeadsPageComponent]
    });
    fixture = TestBed.createComponent(TeamLeadsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
