import { Dialog } from '@angular/cdk/dialog';
import { Component, Output } from '@angular/core';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor() {}

    isOpenAddTask: boolean = false;
    isOpenCalendarView = false;

    onChangeAddTask() {
        this.isOpenAddTask = !this.isOpenAddTask
    }

    onChangeCalendarView() {
        this.isOpenCalendarView = !this.isOpenCalendarView
    }
}
