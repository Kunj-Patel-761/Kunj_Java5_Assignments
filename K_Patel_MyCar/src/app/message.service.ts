import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageSource = new Subject<string>();
  messages$ = this.messageSource.asObservable();

  constructor() { }
  sendMessage(message: string) {
    this.messageSource.next(message);
  }
}