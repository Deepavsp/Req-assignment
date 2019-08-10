import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }

  postUsers(url:string, userdata) {
    return this.http.post(url, userdata).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.message || 'Server Error'); 
      })
    )
  }

}
