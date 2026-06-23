import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTask } from './team-task';

describe('TeamTask', () => {
  let component: TeamTask;
  let fixture: ComponentFixture<TeamTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
