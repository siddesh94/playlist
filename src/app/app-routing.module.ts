import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestPlaylistComponent } from './request-playlist/request-playlist.component';
import { VideoPlaylistComponent } from './video-playlist/video-playlist.component';


const routes: Routes = [
  {
    path: '',
    component: VideoPlaylistComponent
  },
  {
    path: 'request-playlist',
    component: RequestPlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
