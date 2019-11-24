import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlaylistPlayerComponent } from './video-playlist-player.component';

describe('VideoPlaylistPlayerComponent', () => {
  let component: VideoPlaylistPlayerComponent;
  let fixture: ComponentFixture<VideoPlaylistPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlaylistPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlaylistPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
