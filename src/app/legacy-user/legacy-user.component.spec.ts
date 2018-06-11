import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegacyUserComponent } from './legacy-user.component';

describe('LegacyUserComponent', () => {
  let component: LegacyUserComponent;
  let fixture: ComponentFixture<LegacyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegacyUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
