import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildisplayComponent } from './detaildisplay.component';

describe('DetaildisplayComponent', () => {
  let component: DetaildisplayComponent;
  let fixture: ComponentFixture<DetaildisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaildisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaildisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
