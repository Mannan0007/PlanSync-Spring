import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkspace } from './my-workspace';

describe('MyWorkspace', () => {
  let component: MyWorkspace;
  let fixture: ComponentFixture<MyWorkspace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyWorkspace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyWorkspace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
