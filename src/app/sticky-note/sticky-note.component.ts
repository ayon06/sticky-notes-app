import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Card } from '../app.models';
import { FocusService } from '../services/focus.service';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-sticky-note',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StickyNoteComponent implements OnInit {
  @Input() card: Card = null;
  @Output() closeNote = new EventEmitter<any>();
  editTitle = false;
  editDescription = false;
  editDueDate = false;

  constructor(private focusService: FocusService) { }

  ngOnInit() {

  }
  close() {
    this.closeNote.emit(true);
  }
  editNoteTitle() {
    this.editTitle = true;
    this.focusService.moveFocusTo('#card' + this.card.noteId + 'Title');
  }
  onTitleModelChange(value) {
    if (value === '') {
      this.card.title = 'New Note';
    }
  }
  onDescriptionModelChange(value) {
    if (value === '') {
      this.card.description = 'Edit Description';
    }
  }
}
