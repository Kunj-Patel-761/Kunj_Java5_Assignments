import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface'
import { CommonModule } from '@angular/common';
import { HoverAffectDirective } from '../hover-affect.directive';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, HoverAffectDirective, MatCardModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  @Input() content: any;
  onCardClick(content: any): void {
    console.log(`Card Clicked - ID: ${content.id} and Title: ${content.title}`);
  }
}


 