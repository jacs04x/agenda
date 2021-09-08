import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarnuevoComponent } from './navbarnuevo.component';

describe('NavbarnuevoComponent', () => {
  let component: NavbarnuevoComponent;
  let fixture: ComponentFixture<NavbarnuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarnuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarnuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
