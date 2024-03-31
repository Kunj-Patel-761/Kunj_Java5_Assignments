import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { FilterContentPipe } from '../filter-content.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from '../hover-affect.directive';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, FilterContentPipe, FormsModule, HoverAffectDirective],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  DisplayContentInformation(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }
  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "Toyota Camry",
        description: "The Toyota Camry is a popular midsize sedan known for its reliability and fuel efficiency.",
        manufacturer: "Toyota", 
        imgURL: "https://th.bing.com/th/id/OIP.7jqOtiW4Doozm6QTtggzVgHaE6?rs=1&pid=ImgDetMain",
        type: "Sedan",
        tags: ["Reliable", "Fuel Efficient", "Midsize"]
      },
      {
        id: 1,
        title: "Tesla Model S",
        description: "The Tesla Model S is an all-electric luxury sedan known for its high-performance, long-range capabilities, and cutting-edge technology.",
        manufacturer: "Tesla, Inc.",
        imgURL: "https://th.bing.com/th/id/OIP.9Uvaied6CY0y5h6lYeKNLQHaE8?rs=1&pid=ImgDetMain",
        type: "Electric Sedan",
        tags: ["Electric", "Luxury", "High-Performance"]
      },
      {
        id: 2,
        title: "Ford F-150",
        description: "The Ford F-150 is a bestselling pickup truck known for its ruggedness, versatility, and powerful towing capabilities.",
        manufacturer: "Ford Motor Company",
        imgURL: "https://th.bing.com/th/id/R.0ff62825cf7fb1466faf8d22540dc9c8?rik=qpvp1J8yflcMRQ&pid=ImgRaw&r=0",
        type: "Pickup Truck",
        tags: ["Rugged", "Versatile", "Towing"]
      },
      {
        id: 3,
        title: "Honda Accord",
        description: "The Honda Accord is a reliable and well-rounded midsize sedan, known for its comfort and fuel efficiency.",
        manufacturer: "Honda",
        imgURL: "https://th.bing.com/th/id/R.2c5d1f46b5d5f0b25cb31c3f7ed90c1e?rik=B8jU2JOL9V5MOg&pid=ImgRaw&r=0",
        type: "Sedan",
        tags: ["Reliable", "Fuel Efficient", "Comfortable"]
      },
      {
        id: 4,
        title: "Chevrolet Silverado",
        description: "The Chevrolet Silverado is a powerful and durable full-size pickup truck, known for its towing capacity and off-road capabilities.",
        manufacturer: "Chevrolet",
        imgURL: "",
        type: "SUV",
        tags: ["Powerful", "Durable", "Towing"]
      },
      {
        id: 5,
        title: "Nissan Leaf",
        description: "The Nissan Leaf is an affordable and popular electric hatchback, known for its eco-friendly design and compact size.",
        manufacturer: "Nissan",
        imgURL: "https://th.bing.com/th/id/R.3f832fb04c6a724f63194841ed2c9e00?rik=dPp0aAvmWGJrVw&pid=ImgRaw&r=0",
        type: "Electric Hatchback",
        tags: ["Electric", "Affordable", "Compact"]
      },
      {
        id: 6,
        title: "Jeep Wrangler",
        description: "The Jeep Wrangler is a rugged and iconic off-road SUV, known for its adventurous spirit and open-air driving experience.",
        manufacturer: "Jeep",
        imgURL: "https://th.bing.com/th/id/R.772198e7bcdd2c75007e70848e61b1c5?rik=%2b3E7%2fghu2HLyYg&pid=ImgRaw&r=0",
        type: "SUV",
        tags: ["Rugged", "Iconic", "Off-Road"]
      }
    ];
  }
 
}