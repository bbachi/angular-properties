import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserconfirmComponent } from './userconfirm.component';

describe('UserconfirmComponent', () => {
  let component: UserconfirmComponent;
  let fixture: ComponentFixture<UserconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
