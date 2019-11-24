import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-playlist-player',
  templateUrl: './video-playlist-player.component.html',
  styleUrls: ['./video-playlist-player.component.css']
})
export class VideoPlaylistPlayerComponent implements OnInit {
  @Input() playVideo: any;
  videoUrl: any;
  constructor() { 
    this.videoUrl = this.playVideo;
  }

  ngOnInit() {
    this.videoUrl = this.playVideo;
  }
}

