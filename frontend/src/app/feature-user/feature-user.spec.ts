import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureUser } from './feature-user';

describe('FeatureUser', () => {
  let component: FeatureUser;
  let fixture: ComponentFixture<FeatureUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
