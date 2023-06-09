import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Task } from '../task.model';
import { Dialog } from '@angular/cdk/dialog';
import { TaskEditComponent } from '../task-edit/task-edit.component';
import { TaskService } from '../task.service';
@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
    status = 'all';
    filteredTasks: Task[] = [];
    finishedTasksTotal: number = 0;
    constructor(private dialog: Dialog, private taskService: TaskService) {}

    ngOnInit(): void {
        this.onChangeStatus();
    }

    onChangeStatus() {
        this.taskService.onFilterTasks(this.status);
        this.filteredTasks = this.taskService.getTasks();
        this.finishedTasksTotal = this.filteredTasks.filter(
            (task) => task.status === 'finished'
        ).length;
    }

    openAddTaskDialog() {
        this.dialog.open(TaskEditComponent);
    }
}
