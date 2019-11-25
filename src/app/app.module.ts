import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlaylistComponent } from './video-playlist/video-playlist.component';
import { VideoPlaylistPlayerComponent } from './video-playlist/video-playlist-player/video-playlist-player.component';
import { HttpRequestInterceptor } from './http-request-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomUppercasePipe } from './custom-uppercase.pipe';
import { RequestPlaylistComponent } from './request-playlist/request-playlist.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    VideoPlaylistComponent,
    VideoPlaylistPlayerComponent,
    CustomUppercasePipe,
    RequestPlaylistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
