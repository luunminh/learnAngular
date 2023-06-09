import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../task.model';

@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent implements OnInit {
    title: string | undefined;
    desc: string | undefined;
    status: string | undefined;

    constructor(@Inject(MAT_DIALOG_DATA) private data: Task | null) {}

    ngOnInit(): void {
        if (this.data) {
            const { title, description, status } = this.data;
            this.title = title;
            this.desc = description;
            this.status = status;
        }
    }
}
