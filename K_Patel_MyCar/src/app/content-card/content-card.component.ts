import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "Toyota Camry",
      description: "The Toyota Camry is a popular midsize sedan known for its reliability and fuel efficiency.",
      manufacturer: "Toyota", 
      imgURL: "https://th.bing.com/th/id/OIP.7jqOtiW4Doozm6QTtggzVgHaE6?rs=1&pid=ImgDetMain",
      type: "Sedan",
      tags: ["Reliable", "Fuel Efficient", "Midsize"]
    });
    this.contentList.addContent({
      id: 1,
      title: "Tesla Model S",
      description: "The Tesla Model S is an all-electric luxury sedan known for its high-performance, long-range capabilities, and cutting-edge technology.",
      manufacturer: "Tesla, Inc.",
      imgURL: "https://th.bing.com/th/id/OIP.9Uvaied6CY0y5h6lYeKNLQHaE8?rs=1&pid=ImgDetMain",
      type: "Electric Sedan",
      tags: ["Electric", "Luxury", "High-Performance"]
    });
    this.contentList.addContent({
      id: 2,
      title: "Ford F-150",
      description: "The Ford F-150 is a bestselling pickup truck known for its ruggedness, versatility, and powerful towing capabilities.",
      manufacturer: "Ford Motor Company",
      imgURL: "https://th.bing.com/th/id/R.0ff62825cf7fb1466faf8d22540dc9c8?rik=qpvp1J8yflcMRQ&pid=ImgRaw&r=0",
      type: "Pickup Truck",
      tags: ["Rugged", "Versatile", "Towing"]
    });
  }
}


// content badli kadh movie name and all {id sivay badhu}, then commit  