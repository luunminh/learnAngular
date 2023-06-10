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
    filterType = 'title';
    filteredTasks: Task[] = [];
    finishedTasksTotal: number = 0;
    constructor(private dialog: Dialog, private taskService: TaskService) {}

    ngOnInit(): void {
        this.onChangeStatus();
        this.taskService.deletedProductEvent.subscribe((id) => {
            this.filteredTasks = this.filteredTasks.filter(
                (task) => task.id !== id
            );
        });
        this.taskService.updatedProductEvent.subscribe((id) => {
            const updatedTask = this.taskService.getTaskById(id);
            if (updatedTask)
                this.filteredTasks = this.filteredTasks.map((task) => {
                    if (task.id === id) {
                        task = updatedTask;
                    }
                    return task;
                });
        });
    }

    onChangeStatus() {
        this.taskService.onFilterTasks(this.status, this.filterType);
        this.filteredTasks = this.taskService.getTasks();
        this.finishedTasksTotal = this.filteredTasks.filter(
            (task) => task.status === 'finished'
        ).length;
    }

    openAddTaskDialog() {
        this.dialog.open(TaskEditComponent, {
            data: { task: null, isEdit: false },
        });
    }
}
