import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationMenuComponent } from './authentication-menu.component';

describe('AuthenticationMenuComponent', () => {
  let component: AuthenticationMenuComponent;
  let fixture: ComponentFixture<AuthenticationMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
