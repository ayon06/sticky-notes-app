import { Component, ViewEncapsulation } from '@angular/core';
import { Card, Section } from './app.models';
import { AppService } from './app.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private appService: AppService) {

  }
  sections: Section[] = [
    { id: 'To Do', cols: 1, rows: 2, color: 'lightblue', notesCollections: [] },
    { id: 'In Progress', cols: 2, rows: 1, color: 'lightpink', notesCollections: [] },
    { id: 'Done', cols: 1, rows: 2, color: 'lightgreen', notesCollections: [] },
    { id: 'Failed', cols: 2, rows: 1, color: '#ff5b5b', notesCollections: [] },
  ];

  addNote(section: Section) {
    const index = section.notesCollections.length;
    section.notesCollections[index] = [];
    section.notesCollections[index][0] = new Card(this.appService.getNewCardId(), section.id, index, 0);
    console.log('new card: ', section.notesCollections[index][0]);
  }

  removeNote(id: number) {
    for (let sectionIndex = 0; sectionIndex < this.sections.length; sectionIndex++) {
      const section = this.sections[sectionIndex];
      for (let collectionIndex = 0; collectionIndex < this.sections[sectionIndex].notesCollections.length; collectionIndex++) {
        const collection = section.notesCollections[collectionIndex];
        const index = collection.findIndex((note) => note.noteId === id);
        if (index >= 0) {
          collection.splice(collection.findIndex((note) => note.noteId === id));
          if (!collection.length) {
            section.notesCollections.splice(collectionIndex, 1);
          }
          return;
        }
      }
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
