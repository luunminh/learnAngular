import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { TaskManagementRoutingModule } from './task-management-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
import { TaskAddComponent } from './components/tasks/task-add/task-add.component';
import { TaskDetailComponent } from './components/tasks/task-detail/task-detail.component';
import { TaskEditComponent } from './components/tasks/task-edit/task-edit.component';
import { TaskDeleteComponent } from './components/tasks/task-delete/task-delete.component';
import { TaskService } from './services/task.service';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { TaskManagementComponent } from './task-management.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { DataStorageService } from '../shared/data-storage.service';
@NgModule({
  declarations: [
    TaskManagementComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskEditComponent,
    TaskDeleteComponent,
    TaskAddComponent,
    CalendarViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TaskManagementRoutingModule,
    MatButtonModule,
    FlexLayoutModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    DatePipe,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    DragDropModule,
    FullCalendarModule,
    HttpClientModule,
  ],
  providers: [TaskService, { provide: MAT_DIALOG_DATA, useValue: { hasBackdrop: true } }],
  exports: [],
  bootstrap: [TaskManagementComponent],
})
export class TaskManagementModule {}
