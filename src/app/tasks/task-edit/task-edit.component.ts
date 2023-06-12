import { Task } from './../task.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent implements OnInit {
    taskForm: FormGroup | undefined;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: { task: Task },
        private taskService: TaskService,
        public dialogRef: MatDialogRef<TaskEditComponent>
    ) {}

    ngOnInit(): void {
        let title = '';
        let desc = '';
        let status = '';
        if (this.data.task) {
            title = this.data.task.title;
            desc = this.data.task.description;
            status = this.data.task.status;
        }

        this.taskForm = new FormGroup({
            title: new FormControl(title, [
                Validators.required,
                Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
            ]),
            desc: new FormControl(desc, [
                Validators.required,
                Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
            ]),
            status: new FormControl(status, [Validators.required]),
        });
    }

    get title() {
        if (this.taskForm) return this.taskForm.get('title');
        else return null;
    }

    get desc() {
        if (this.taskForm) return this.taskForm.get('desc');
        else return null;
    }

    onSubmit() {
        if (this.taskForm) {
            const id = this.data.task.id;
            const newTask = {
                title: this.taskForm.value['title'],
                description: this.taskForm.value['desc'],
                status: this.taskForm.value['status'],
            };
            this.taskService.onEditTask(id, newTask);
            this.taskService.updatedProductEvent.next(id);
            this.dialogRef.close();
        } else {
        }
    }
}
