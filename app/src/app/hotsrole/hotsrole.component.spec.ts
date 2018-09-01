import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotsroleComponent } from './hotsrole.component';

describe('HotsroleComponent', () => {
  let component: HotsroleComponent;
  let fixture: ComponentFixture<HotsroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotsroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotsroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
