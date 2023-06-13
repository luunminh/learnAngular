import { TaskService } from '../../../services/task.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-task-delete',
    templateUrl: './task-delete.component.html',
    styleUrls: ['./task-delete.component.scss'],
})
export class TaskDeleteComponent implements OnInit {
    id: number | undefined;
    constructor(
        @Inject(MAT_DIALOG_DATA) private data: any,
        private taskService: TaskService
    ) {}

    ngOnInit(): void {
        this.id = this.data.id;
    }

    onDeleteTask() {
        if (this.id) {
            this.taskService.onDeleteTask(this.id);
            this.taskService.deletedProductEvent.next(this.id);
        }
    }
}
