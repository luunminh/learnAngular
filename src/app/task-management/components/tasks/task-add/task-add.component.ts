import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../../services/task.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-task-add',
    templateUrl: './task-add.component.html',
    styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent implements OnInit {
    @Output() closeAddTask = new EventEmitter<any>();
    taskForm: FormGroup | undefined;

    constructor(private taskService: TaskService, private route: Router) {}

    onCloseAddTask() {
        this.taskService.isOpenDashBoard.next(true);
        this.route.navigate(['../task-management']);
    }

    ngOnInit(): void {
        this.taskForm = new FormGroup({
            title: new FormControl('', [
                Validators.required,
                Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
            ]),
            desc: new FormControl('', [
                Validators.required,
                Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/),
            ]),
            status: new FormControl('doing', [Validators.required]),
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

    async onSubmit() {
        if (this.taskForm) {
            const currentTasks = this.taskService.getTasks();
            const id = currentTasks[currentTasks.length - 1].id + 1;
            const newTask = await {
                id,
                title: this.taskForm.value['title'],
                description: this.taskForm.value['desc'],
                status: this.taskForm.value['status'],
                createAt: Math.floor(new Date().getTime() / 1000),
            };
            this.taskService.onAddTask(newTask);
            this.taskService.addedProductEvent.next(newTask);
            this.onCloseAddTask();
        } else {
        }
    }
}
