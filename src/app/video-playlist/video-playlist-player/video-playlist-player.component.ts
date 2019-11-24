import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-video-playlist-player',
  templateUrl: './video-playlist-player.component.html',
  styleUrls: ['./video-playlist-player.component.css']
})
export class VideoPlaylistPlayerComponent implements OnChanges {
  @Input() playVideo: any;
  videoUrl: any;
  constructor() {  }

  ngOnChanges() {
    // this.videoUrl = this.playVideo;
  }
}

