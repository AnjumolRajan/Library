import { AuthserviceService } from './shared/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
  
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    if (req.url.includes('http://192.168.12.112:5001/LibraryManagent/login')){
         return next.handle(req);
       }
   else
   {
    let token=sessionStorage.getItem('token')
    console.log("tokennn",token);
    let jwtToken=req.clone({
    setHeaders:{
    Authorization:`bearer` + token
   }
});

    return next.handle(jwtToken);
  }
 }
    
}

 

