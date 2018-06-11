import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLegUserComponent } from './delete-leg-user.component';

describe('DeleteLegUserComponent', () => {
  let component: DeleteLegUserComponent;
  let fixture: ComponentFixture<DeleteLegUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLegUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLegUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
