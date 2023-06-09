import { Component } from '@angular/core';
import { Task } from '../task.model';
import { Dialog } from '@angular/cdk/dialog';
import { TaskEditComponent } from '../task-edit/task-edit.component';
@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
    tasks: Task[] = [
        {
            title: 'Learn Angular',
            description:
                'First App Tutorial - Angular Homes gets you started with Angular The First App tutorial guides you through building an Angular app by taking you step by step through the fundamentals of building an application in Angular.',
            status: 'doing',
            createAt: 1677054779,
        },
        {
            title: 'Learn ReactJS',
            description:
                'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
            status: 'finished',
            createAt: 1677054779,
        },
    ];

    constructor(private dialog: Dialog) {}

    openAddTaskDialog() {
        this.dialog.open(TaskEditComponent);
    }
}
