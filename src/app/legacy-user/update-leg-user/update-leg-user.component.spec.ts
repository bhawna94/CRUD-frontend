import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLegUserComponent } from './update-leg-user.component';

describe('UpdateLegUserComponent', () => {
  let component: UpdateLegUserComponent;
  let fixture: ComponentFixture<UpdateLegUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLegUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLegUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
