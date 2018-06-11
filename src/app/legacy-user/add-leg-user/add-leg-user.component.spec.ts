import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLegUserComponent } from './add-leg-user.component';

describe('AddLegUserComponent', () => {
  let component: AddLegUserComponent;
  let fixture: ComponentFixture<AddLegUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLegUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLegUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
