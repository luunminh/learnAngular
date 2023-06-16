import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs-compat';
import { TaskService } from './services/task.service';
@Component({
    selector: 'app-task-management',
    templateUrl: './task-management.component.html',
    styleUrls: ['./task-management.component.scss'],
})
export class TaskManagementComponent implements OnInit, OnDestroy {
    isDashBoard = true;
    openDashBoardSubscription: Subscription;
    constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.openDashBoardSubscription =
            this.taskService.isOpenDashBoard.subscribe((value) => {
                this.isDashBoard = value;
            });
    }

    onChangeAddTask() {
        this.isDashBoard = false;
        this.router.navigate(['add'], { relativeTo: this.route });
    }

    onChangeCalendarView() {
        this.isDashBoard = false;
        this.router.navigate(['calendar-view'], { relativeTo: this.route });
    }

    ngOnDestroy(): void {
        this.openDashBoardSubscription.unsubscribe();
    }
}
