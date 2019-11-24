import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomUppercasePipe } from '../custom-uppercase.pipe';


@Component({
  selector: 'app-video-playlist',
  templateUrl: './video-playlist.component.html',
  styleUrls: ['./video-playlist.component.css']
})
export class VideoPlaylistComponent implements OnInit {
  videoPlaylist: any;
  videoUrl: any;
  posterName: any;
  @ViewChild('playlistElement', {static: true})playlistElement: ElementRef;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.fetchPlaylist();
    // fetch(url).then((response) => {
    //   if (!response.ok) {
    //     console.log('Error While Fetching Movie Playlist');
    //   }
    //   console.log(response.json);
    // }).then(() => {

    // });
  }

   fetchPlaylist() {
    const url = 'https://valuefy-assignment-x.herokuapp.com/api/getVideos';
    this.http.get(url).subscribe((response) => {
      if (response) {
        this.videoPlaylist = response;
        this.videoPlaylist =  this.videoPlaylist.concat(response);
        this.posterName = this.videoPlaylist[0].name;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoPlaylist[0].trailer);
        console.log(response);
      } else {
        console.log('Error While Fetching Video Playlist');
      }
    });
  }
  videoChange(url, name) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.posterName = name;
  }


  leftArrowClick() {
    const element = this.playlistElement;
    const scrollLeftInterval = setInterval(() => {
      const scrollPos = element.nativeElement.scrollLeft;
      if (scrollPos <= 0) {
        element.nativeElement.scrollLeft = scrollPos - 20;
      } else {
        clearInterval(scrollLeftInterval);
      }
    }, 100);
    // element.nativeElement.scrollLeft -= 200;
  }

  rightArrowClick() {
    const element = this.playlistElement;
    const scrollPerClick = element.nativeElement.scrollLeft + 500;
    const scrollLeftInterval = setInterval(() => {
      const scrollPos = element.nativeElement.scrollLeft;
      if (scrollPos <= scrollPerClick) {
        element.nativeElement.scrollLeft = scrollPos + 30;
      } else {
        clearInterval(scrollLeftInterval);
      }
    }, 50);
    // element.nativeElement.scrollLeft += 200;
  }
}
