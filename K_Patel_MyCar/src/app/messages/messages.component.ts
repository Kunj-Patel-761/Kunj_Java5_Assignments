import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  
  messages: string[] = [];
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.messages$.subscribe((message) => {
      this.messages.push(message);
    })
  }
  
}