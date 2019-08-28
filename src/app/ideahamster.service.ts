import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDomain } from './domain';
import { ISubDomain } from './subdomain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeahamsterService {

  private _url:string='/assets/data/domains.json';
    private _url1:string='/assets/data/subdomains.json';
    constructor(private http : HttpClient){
       //  this.http=http;
    }
    getDomains():Observable<IDomain[]>{
        return this.http.get<IDomain[]>(this._url);
    }
    getSubDomains():Observable<ISubDomain[]>{
        return this.http.get<ISubDomain[]>(this._url1);
    }
}
