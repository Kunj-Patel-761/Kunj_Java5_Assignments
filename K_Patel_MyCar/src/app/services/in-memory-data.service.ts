import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { contentArray  } from '../helper-files/ContentDb';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    // setting it to the value of our array of content
    const content : Content[] = contentArray;
    return {content};
    }
    getId(contents: Content[]): number {
      return contents.length > 0 ? Math.max(...contents.map(content => content.id || 0)) + 1 : 2000;
    }
}