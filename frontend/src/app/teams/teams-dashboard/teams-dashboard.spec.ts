import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsDashboard } from './teams-dashboard';

describe('TeamsDashboard', () => {
  let component: TeamsDashboard;
  let fixture: ComponentFixture<TeamsDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
