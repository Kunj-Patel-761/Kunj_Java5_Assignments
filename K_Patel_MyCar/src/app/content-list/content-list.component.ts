import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { FilterContentPipe } from '../filter-content.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from '../hover-affect.directive';
import { CarService } from '../car.service';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { ModifyContentComponent } from '../modify-content/modify-content.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypedeciderPipe, FormsModule, HoverAffectDirective, ModifyContentComponentComponent, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  contentArray: Content[] = [];
  constructor(private carService: CarService, private messageService: MessageService) {}
    onContentAdded(newContent: Content) {
      this.contentArray.push(newContent);
      this.messageService.sendMessage(`Content '${newContent.title}' added successfully!`);
    }
    ngOnInit() {
      this.loadContentArray();
    }
  
    loadContentArray() {
      this.carService.getContentArray().subscribe((data) => {
        this.contentArray = data;
        console.log('Content array loaded!');
      });
    }
    searchTitle: string = '';
    searchMsg: string = '';
    searchClr: string = '';
  
    searchCard(): void{
      const foundContent = this.contentArray.find(content => content.title.toLowerCase() === this.searchTitle.toLowerCase()); 
  
      if (foundContent) {
        this.searchMsg = `Content with title "${this.searchTitle}" exists.`;
        this.searchClr = 'green';
      }
      else {
        this.searchMsg = `Content with title "${this.searchTitle}" does not exist.`;
        this.searchClr = 'red';
      }
    }
  }