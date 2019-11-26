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
  isGoodRequest: boolean;
  isBadRequestToast: boolean;
  isRequestLoaded: boolean;
  @ViewChild('playlistElement', { static: true }) playlistElement: ElementRef;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.fetchPlaylist();
  }

  fetchPlaylist() {
    const url = 'https://valuefy-assignment-x.herokuapp.com/api/getVideos';
    this.http.get(url).subscribe((response) => {
      if (response) {
        this.isGoodRequest = true;
        this.isRequestLoaded = true;
        this.videoPlaylist = response;
        this.videoPlaylist = this.videoPlaylist.concat(response); // only to test carousel
        this.posterName = this.videoPlaylist[0].name;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoPlaylist[0].trailer);
      } else {
        this.isGoodRequest = false;
        this.isRequestLoaded = false;
        this.isBadRequestToast = true;
        setTimeout(() => {
          this.isBadRequestToast = false;
        }, 5000);
      }
    }, (error) => {
      this.isGoodRequest = false;
      this.isBadRequestToast = true;
      this.isRequestLoaded = false;
      setTimeout(() => {
        this.isBadRequestToast = false;
      }, 5000);
    });
  }
  videoChange(url, name) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.posterName = name;
  }


  leftArrowClick() {
    const element = this.playlistElement;
    const scrollValue = element.nativeElement.scrollLeft;
    if (scrollValue <= 0) {
      return;
    }
    const scrollPerClick = scrollValue - 500;
    const scrollLeftInterval = setInterval(() => {
      let scrollPos = element.nativeElement.scrollLeft;
      scrollPos = scrollPos - 20;
      if (scrollPos >= scrollPerClick && scrollPos >= 0) {
        element.nativeElement.scrollLeft = scrollPos;
      } else {
        clearInterval(scrollLeftInterval);
      }
    }, 30);
  }

  rightArrowClick() {
    const element = this.playlistElement;
    const scrollValue = element.nativeElement.scrollLeft;
    const elementWidth = element.nativeElement.offsetWidth;
    const scrollWidth = element.nativeElement.scrollWidth;
    if ((scrollValue + elementWidth) >= scrollWidth) {
      return;
    }
    const scrollPerClick = element.nativeElement.scrollLeft + 500;
    const scrollLeftInterval = setInterval(() => {
      let scrollPos = element.nativeElement.scrollLeft;
      scrollPos = scrollPos + 20;
      if (scrollPos <= scrollPerClick && (scrollPos + elementWidth) <= scrollWidth) {
        element.nativeElement.scrollLeft = scrollPos;
      } else {
        clearInterval(scrollLeftInterval);
      }
    }, 30);
  }
}
