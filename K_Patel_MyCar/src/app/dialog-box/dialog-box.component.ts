import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-dialog-box',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.scss'
})
export class DialogBoxComponent {


  newContent: Content = {
    id : null,
    title: '',
    description: '',
    manufacturer: '',
    type: '',
    imgURL: '',
    tags: [] as string[]
  };

  tagsString: string = '';
  @Output() contentAdded = new EventEmitter<Content>();

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private carService: CarService) {}

  onCancelClick(): void {
    this.dialogRef.close();
   
  }

  onAddClick(): void {
    this.newContent.tags = this.tagsString.split(',');

    this.carService.addContent(this.newContent).subscribe((newContentWithId) => {
      this.contentAdded.emit(newContentWithId); 
    });
    this.dialogRef.close();
    this.clearFields();
  }

  clearFields() {
    this.newContent = {
      id: null,
      title: '',
      description: '',
      manufacturer: '',
      imgURL: '',
      type: '',
      tags: []
    };
    this.tagsString = '';
  }
}