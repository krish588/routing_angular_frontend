import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

 
  
  constructor(private http: HttpClient) {
    this.http = http;
   }
   public request: any = {
        'username' : 'javainuse',
        'password' : 'password'
       };

   saveUser(user: any): Observable<any> {
   const headers = new HttpHeaders({'Access-Control-Allow-Orgin': '*'});
   return this.http.post('http://localhost:8085/authenticate', this.request);
  }

  saveUserOAuth(): Observable<any> {
    const headers = new HttpHeaders({'Access-Control-Allow-Orgin': '*'});
    return this.http.post('http://localhost:8080/', this.request);
   }


}
