import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IDetails } from './details';
@Injectable()
export class IdeaViewService {
   private _url: string = 'http://localhost:3000/details';
   constructor(private http: HttpClient) { }
   getDetails(): Observable<IDetails[]> {
       return this.http.get<IDetails[]>(this._url);
   }
}