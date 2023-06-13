import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
import { TaskDetailComponent } from './components/tasks/task-detail/task-detail.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { TaskEditComponent } from './components/tasks/task-edit/task-edit.component';
import { MatSelectModule } from '@angular/material/select';
import { TaskDeleteComponent } from './components/tasks/task-delete/task-delete.component';
import { TaskService } from './services/task.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskAddComponent } from './components/tasks/task-add/task-add.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { FullCalendarModule } from '@fullcalendar/angular';
@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent,
        TaskDetailComponent,
        TaskEditComponent,
        TaskDeleteComponent,
        TaskAddComponent,
        CalendarViewComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        FlexLayoutModule,
        MatRadioModule,
        MatCardModule,
        MatIconModule,
        DatePipe,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        DragDropModule,
        FullCalendarModule,
    ],
    providers: [
        TaskService,
        { provide: MAT_DIALOG_DATA, useValue: { hasBackdrop: true } },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
