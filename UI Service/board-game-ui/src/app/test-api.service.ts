import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TestApiService {

  baseurl = 'http://192.168.1.104:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient
  ) { }

  apiGetUsers = (): Observable<any> => {
    return this.http.get(this.baseurl + '/users',
    {headers: this.httpHeaders});
  }
}
