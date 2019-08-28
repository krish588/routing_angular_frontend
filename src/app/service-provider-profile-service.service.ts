import { ServiceProvider } from './service-provider-profile-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderProfileServiceService {

  private _url: string = "http://localhost:3000/ServiceProviderData";

  constructor(private http: HttpClient) { }

  getProfileDetails():Observable<ServiceProvider[]>{
    return this.http.get<ServiceProvider[]>(this._url,headerOption);
  }
}
