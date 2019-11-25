import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-request-playlist',
  templateUrl: './request-playlist.component.html',
  styleUrls: ['./request-playlist.component.css']
})
export class RequestPlaylistComponent implements OnInit {
  playlistForm = new FormGroup({
    name: new FormControl('', Validators.required),
    poster: new FormControl('', Validators.required),
    trailer: new FormControl('', Validators.required)
  });
  playlistAdded: boolean;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {
    this.playlistForm.reset();
    this.playlistAdded = true;
    setTimeout(() => {
      this.playlistAdded = false;
    }, 3000);
  }

}
