import { TaskService } from './../task.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditComponent } from '../task-edit/task-edit.component';
import { TaskDeleteComponent } from '../task-delete/task-delete.component';
@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
    @Input() task: Task | undefined;
    dateFormat: string | null = null;

    constructor(private dialog: MatDialog) {}

    openEditDialog() {
        this.dialog.open(TaskEditComponent, {
            data: {
                task: this.task,
            },
        });
    }

    openDeleteDialog() {
        if (this.task)
            this.dialog.open(TaskDeleteComponent, {
                data: { id: this.task.id },
            });
    }

    ngOnInit(): void {
        if (this.task) {
            const date = new Date(this.task?.createAt * 1000);
            this.dateFormat = new DatePipe('en-US').transform(
                date,
                'dd/MM/yyyy'
            );
        }
    }
}
