import { Injectable } from '@angular/core';
import { Task } from './task.model';
@Injectable({ providedIn: 'root' })
export class TaskService {
    tasks: Task[] = [
        {
            id: 1,
            title: 'Learn Angular',
            description:
                'First App Tutorial - Angular Homes gets you started with Angular The First App tutorial guides you through building an Angular app by taking you step by step through the fundamentals of building an application in Angular.',
            status: 'doing',
            createAt: 1677054779,
        },
        {
            id: 2,
            title: 'Learn ReactJS',
            description:
                'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
            status: 'finished',
            createAt: 1677054779,
        },
        {
            id: 3,
            title: 'Learn NodeJS',
            description:
                'Node lets you build user interfaces out of individual pieces called components. Create your own Node components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
            status: 'doing',
            createAt: 1677054779,
        },
    ];
    filteredTasks: Task[] = [];

    getTasks() {
        return this.filteredTasks.slice();
    }

    onAddTask(newTask: Task) {
        this.tasks = [...this.tasks, newTask];
        this.onFilterTasks();
    }

    onEditTask(task: Task) {
        this.tasks = this.tasks.map((curTask) => {
            if (curTask.id === task.id) {
                curTask = task;
            }
            return curTask;
        });
        this.onFilterTasks();
    }

    onDeleteTask(id: number) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.onFilterTasks();
        console.log(this.filteredTasks);
    }

    onFilterTasks(status: string = 'all') {
        switch (status) {
            case 'all':
                this.filteredTasks = [...this.tasks];
                break;
            default:
                this.filteredTasks = this.tasks.filter(
                    (task) => task.status === status
                );
                break;
        }
    }
}
