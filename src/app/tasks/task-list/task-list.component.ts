import {
    Component,
    OnChanges,
    OnInit,
    SimpleChanges,
    Output,
    EventEmitter,
} from '@angular/core';
import { Task } from '../task.model';
import { Dialog } from '@angular/cdk/dialog';
import { TaskService } from '../task.service';
import { TaskAddComponent } from '../task-add/task-add.component';
import {
    CdkDragDrop,
    CdkDropList,
    CdkDrag,
    moveItemInArray,
} from '@angular/cdk/drag-drop';
@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
    @Output('onChangeAddTask') isOpenAddTask = new EventEmitter<any>();
    @Output('onChangeCalendarView') isOpenCalendarView =
        new EventEmitter<any>();
    status = 'all';
    filterType = 'title';
    filteredTasks: Task[] = [];
    finishedTasksTotal: number = 0;
    constructor(private dialog: Dialog, private taskService: TaskService) {}

    ngOnInit(): void {
        this.onChangeStatus();

        this.taskService.addedProductEvent.subscribe((task) => {
            this.filteredTasks = [...this.filteredTasks, task];
        });

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

    onOpenAddTask() {
        this.isOpenAddTask.emit();
    }

    onOpenCalendarView() {
        this.isOpenCalendarView.emit()
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(
            this.filteredTasks,
            event.previousIndex,
            event.currentIndex
        );
    }
}
