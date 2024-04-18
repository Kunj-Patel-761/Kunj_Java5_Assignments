import { Injectable } from '@angular/core';
import {Content } from './helper-files/content-interface';
import { contentArray } from './helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'api/content';

  constructor(private messageService:MessageService , private http: HttpClient) { }

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>(this.apiUrl, content);
  }

  getContentArray(): Observable<any[]> {
    this.messageService.sendMessage('Content array loaded!');
    return of(contentArray);
  }

  getContentItemById(id: number): Observable<any> {
    const contentItem = contentArray.find(item => item.id === id);
    this.messageService.sendMessage(`Content Item at id: ${id}`);
    return of(contentItem);
  }
}