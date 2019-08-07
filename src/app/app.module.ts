import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { StickyNoteComponent } from './sticky-note/sticky-note.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppService } from './app.service';
import { FocusService } from './services/focus.service';
import { FormsModule } from '@angular/forms';
import { ContentEditbaleDirective } from './directives/editable-content.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    StickyNoteComponent,
    ContentEditbaleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    DragDropModule
  ],
  providers: [AppService, FocusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
