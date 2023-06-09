import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { MatSelectModule } from '@angular/material/select';
import { TaskDeleteComponent } from './tasks/task-delete/task-delete.component';
import { TaskService } from './tasks/task.service';
@NgModule({
    declarations: [
        AppComponent,
        TaskListComponent,
        TaskDetailComponent,
        TaskEditComponent,
        TaskDeleteComponent,
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
    ],
    providers: [TaskService],
    bootstrap: [AppComponent],
})
export class AppModule {}
