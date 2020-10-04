import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayYoutubeComponent } from './play-youtube.component';

describe('PlayYoutubeComponent', () => {
  let component: PlayYoutubeComponent;
  let fixture: ComponentFixture<PlayYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
