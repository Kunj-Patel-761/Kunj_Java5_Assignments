import { Injectable } from '@angular/core';
import {Content } from './helper-files/content-interface';
import { CONTENT } from './helper-files/ContentDb'; 
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }
  getContentObs():Observable<Content[]>{
    return this.http.get<Content[]>("api/content");
  }
  getContentById(id:number):Observable<any>{
    return of(CONTENT.find(item => item.id === id));
  }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
    };

    addContent(newContentItem: Content):
      Observable<Content>{
      return this.http.post<Content>("api/content",
      newContentItem, this.httpOptions);
}
updateContent(contentItem: Content): Observable<any>{
  return this.http.put("api/content"
  , contentItem,
  this.httpOptions);
  }
}