import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  private baseUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  getResource(resource): Observable<any> {
    console.log(this.baseUrl + resource);
    return this.http.get<any>(this.baseUrl + resource)
    .pipe(map(result => result));

  }
  postResource(resource, payload): Observable<any> {
    console.log(this.baseUrl + resource);
    return this.http.post<any>(this.baseUrl + resource, payload)
    .pipe(map(result => result));

  }
}
