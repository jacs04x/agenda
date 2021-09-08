import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbareditarComponent } from './navbareditar.component';

describe('NavbareditarComponent', () => {
  let component: NavbareditarComponent;
  let fixture: ComponentFixture<NavbareditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbareditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbareditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
