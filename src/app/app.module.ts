import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TaskStorageService} from './task-storage.service';
import {TaskListComponent} from './task-list/task-list.component';
import { CloseQuestionComponent } from './close-question/close-question.component';
import {TaskCreateComponent} from './task-create/task-create.component';
import {TaskEditComponent} from './task-edit/task-edit.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {TaskComponent} from './task/task.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {TaskDeleteComponent} from './task-delete/task-delete.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskCreateComponent,
    CloseQuestionComponent,
    TaskComponent,
    TaskEditComponent,
    TaskDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    RouterModule,
    AppRoutingModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [TaskStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
