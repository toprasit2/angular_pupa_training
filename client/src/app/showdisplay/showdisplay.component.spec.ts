import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdisplayComponent } from './showdisplay.component';

describe('ShowdisplayComponent', () => {
  let component: ShowdisplayComponent;
  let fixture: ComponentFixture<ShowdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
