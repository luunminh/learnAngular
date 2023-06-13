import { Event } from '../model/event.model';
import { Injectable } from '@angular/core';
import { Status, Task } from '../model/task.model';
import { Subject } from 'rxjs-compat';
import { SnackbarService } from './snackbar.service';

@Injectable({ providedIn: 'root' })
export class TaskService {
    tasks: Task[] = [
        {
            id: 1,
            title: 'Learn Angular',
            description:
                'First App Tutorial - Angular Homes gets you started with Angular The First App tutorial guides you through building an Angular app by taking you step by step through the fundamentals of building an application in Angular.',
            status: Status.doing,
            createAt: 1677054779,
        },
        {
            id: 2,
            title: 'Learn ReactJS',
            description:
                'Lib React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
            status: Status.finished,
            createAt: 1677054779,
        },
        {
            id: 3,
            title: 'Learn NodeJS',
            description:
                'Node lets you build user interfaces out of individual pieces called components. Create your own Node components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
            status: Status.doing,
            createAt: 1686507641,
        },
    ];
    addedProductEvent = new Subject<Task>();
    updatedProductEvent = new Subject<number>();
    deletedProductEvent = new Subject<number>();

    constructor(private snackbarService: SnackbarService) {}

    getTasks() {
        return this.tasks.slice();
    }

    getTaskById(id: number) {
        return this.tasks.find((task) => task.id === id);
    }

    onAddTask(newTask: Task) {
        this.tasks = [...this.tasks, newTask];
        this.onFilterTasks();
        this.snackbarService.onOpenSnackBar(
            'Added a new task !!!',
            'Close',
            2000
        );
    }

    onEditTask(
        id: number,
        task: { title: string; description: string; status: Status }
    ) {
        this.tasks = this.tasks.map((curTask) => {
            if (curTask.id === id) {
                curTask = {
                    ...curTask,
                    title: task.title,
                    description: task.description,
                    status: task.status,
                };
            }
            return curTask;
        });
        this.onFilterTasks();
        this.snackbarService.onOpenSnackBar(
            'Updated your task !!!',
            'Close',
            2000
        );
    }

    onDeleteTask(id: number) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.onFilterTasks();
        this.snackbarService.onOpenSnackBar(
            'Deleted successful!',
            'Close',
            2000
        );
    }

    //should be return a filtered array and remove the property filtered arr
    onFilterTasks(status: string | Status = 'all', filterType = 'title') {
        let filteredTasks = this.tasks.slice();
        switch (status) {
            case 'all':
                filteredTasks = [...this.tasks];
                break;
            default:
                filteredTasks = this.tasks.filter(
                    (task) => task.status === status
                );
                break;
        }
        switch (filterType) {
            case 'title':
                filteredTasks.sort((a, b) => {
                    const titleA = a.title.toUpperCase();
                    const titleB = b.title.toUpperCase();

                    if (titleA < titleB) {
                        return -1;
                    }
                    if (titleA > titleB) {
                        return 1;
                    }

                    return 0;
                });
                break;
            case 'description':
                filteredTasks.sort((a, b) => {
                    const descA = a.description.toUpperCase();
                    const descB = b.description.toUpperCase();

                    if (descA < descB) {
                        return -1;
                    }
                    if (descA > descB) {
                        return 1;
                    }
                    return 0;
                });
                break;
        }
        return filteredTasks;
    }

    transformToEvent() {
        let result: Event[] = [];
        result = this.tasks.map((task) => {
            return {
                title: task.title,
                date: new Date(task.createAt * 1000).toISOString().slice(0, 10),
            };
        });

        return result;
    }
}
