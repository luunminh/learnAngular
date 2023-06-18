import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../model/task.model';
import { TaskService } from '../../../services/task.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  providers: [], //global > module > component services
})
export class TaskListComponent implements OnInit {
  @Output('onChangeAddTask') isOpenAddTask = new EventEmitter<any>();
  @Output('onChangeCalendarView') isOpenCalendarView = new EventEmitter<any>();
  status = 'all';
  filterType = 'title';
  filteredTasks: Task[] = [];
  finishedTasksTotal: number = 0;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.setTasks();

    this.taskService.taskChanged.subscribe(tasks => {
      this.filteredTasks = tasks;
    });

    this.onChangeStatus();

    this.taskService.addedProductEvent.subscribe(task => {
      this.filteredTasks = [...this.filteredTasks, task];
    });

    this.taskService.updatedProductEvent.subscribe(id => {
      const updatedTask = this.taskService.getTaskById(id);
      if (updatedTask)
        this.filteredTasks = this.filteredTasks.map(task => {
          if (task.id === id) {
            task = updatedTask;
          }
          return task;
        });
    });

    this.taskService.deletedProductEvent.subscribe(id => {
      this.filteredTasks = this.filteredTasks.filter(task => task.id !== id);
    });
  }

  onChangeStatus() {
    this.filteredTasks = this.taskService.onFilterTasks(this.status, this.filterType);
    this.finishedTasksTotal = this.filteredTasks.filter(task => task.status === 'finished').length;
  }

  onOpenAddTask() {
    this.isOpenAddTask.emit();
  }

  onOpenCalendarView() {
    this.isOpenCalendarView.emit();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.filteredTasks, event.previousIndex, event.currentIndex);
  }
}
