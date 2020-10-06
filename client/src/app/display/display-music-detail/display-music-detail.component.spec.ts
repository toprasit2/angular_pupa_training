import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMusicDetailComponent } from './display-music-detail.component';

describe('DisplayMusicDetailComponent', () => {
  let component: DisplayMusicDetailComponent;
  let fixture: ComponentFixture<DisplayMusicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMusicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMusicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
