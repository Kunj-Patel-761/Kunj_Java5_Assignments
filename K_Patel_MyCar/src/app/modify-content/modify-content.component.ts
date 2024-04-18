import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { CarService} from '../car.service';
import { Content } from '../helper-files/content-interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, MatFormFieldModule, MatButtonModule, MatInputModule],
  templateUrl: './modify-content.component.html',
  styleUrl: './modify-content.component.scss'
})
export class ModifyContentComponent {
  newContent: Content = {
    id: null,
    title: '',
    description: '',
    manufacturer: '',
    imgURL: '',
    type: '',
    tags: [] as string[]
  };
  tagsString: string = '';

  @Output() contentAdded = new EventEmitter<Content>();

  constructor(private carService: CarService, public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '50%',
      data: { }
    });
    console.log("Opened");
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.carService.addContent(this.newContent).subscribe((newContentWithId) => {
          this.contentAdded.emit(newContentWithId); 

        });
      }
    });
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
