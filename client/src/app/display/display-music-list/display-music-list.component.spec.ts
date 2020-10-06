import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMusicListComponent } from './display-music-list.component';

describe('DisplayMusicListComponent', () => {
  let component: DisplayMusicListComponent;
  let fixture: ComponentFixture<DisplayMusicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayMusicListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMusicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
