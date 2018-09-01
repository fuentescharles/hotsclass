import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotsroleViewComponent } from './hotsrole-view.component';

describe('HotsroleViewComponent', () => {
  let component: HotsroleViewComponent;
  let fixture: ComponentFixture<HotsroleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotsroleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotsroleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
