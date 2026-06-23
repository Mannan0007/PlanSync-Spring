import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTask } from './my-task';

describe('MyTask', () => {
  let component: MyTask;
  let fixture: ComponentFixture<MyTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
