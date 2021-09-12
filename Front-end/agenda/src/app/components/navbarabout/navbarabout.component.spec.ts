import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaraboutComponent } from './navbarabout.component';

describe('NavbaraboutComponent', () => {
  let component: NavbaraboutComponent;
  let fixture: ComponentFixture<NavbaraboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbaraboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbaraboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
