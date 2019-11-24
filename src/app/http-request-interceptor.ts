import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      const playlistReq = req.clone({
          headers: req.headers.set('Source', 'Web')
      });
      console.log(playlistReq);
      return next.handle(playlistReq);
  }
}
