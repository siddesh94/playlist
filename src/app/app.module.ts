import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoPlaylistComponent } from './video-playlist/video-playlist.component';
import { VideoPlaylistPlayerComponent } from './video-playlist/video-playlist-player/video-playlist-player.component';
import { HttpRequestInterceptor } from './http-request-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomUppercasePipe } from './custom-uppercase.pipe';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    VideoPlaylistComponent,
    VideoPlaylistPlayerComponent,
    CustomUppercasePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // ToastrModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpRequestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
