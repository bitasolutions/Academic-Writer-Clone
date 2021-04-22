import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private messageService: NzMessageService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          debugger
          if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
          } else {

            if (error.status === 400) {
              this.showNofication('Error 400:Contact Admin');
            }
            else if (error.status === 401) {
              this.showNofication('Error 401:Access Denied Contact Admin');
            }
            else if (error.status === 403) {
              this.showNofication(`Error 403: ${error.error}`);
            }
            else if (error.status === 404) {
              this.showNofication('Error 404:Api Url Provided cannot be Found');
            }
            else if (error.status === 0) {
              this.showNofication('Error 0:Server is Unavailable, Contact Admin');
            }
            else if (error.status === 1) {
              this.showNofication('Username or Password is incorrect.');
            }
            else {
              this.showNofication(errorMessage);
            }
            return throwError(errorMessage);
          } errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        })
      );
  }
  showNofication(str: string) {
    this.messageService.create('error', str);
  }
}
