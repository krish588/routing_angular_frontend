import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpcardImplementationserviceService {

  constructor(private http: HttpClient) { this.http = http; }

  public request: any = {

  };

  getUser(): Observable<any> {
    console.log('message');
    // this.request.userName = user;
    // this.request.password = password;
    console.log(this.request);
    return this.http.get('http://localhost:4401/spDetails');
  }

  spRecommendation(): Observable<any> {
    console.log('message');
    // this.request.userName = user;
    // this.request.password = password;
    console.log(this.request);
    return this.http.get('http://localhost:4401/spDetails');
  }
}
