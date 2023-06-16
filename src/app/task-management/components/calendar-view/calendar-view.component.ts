import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-calendar-view',
    templateUrl: './calendar-view.component.html',
    styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent implements OnInit {
    calendarOptions: CalendarOptions;
    @Output() backToHomePage = new EventEmitter<any>();

    constructor(private taskService: TaskService, private route: Router) {}

    ngOnInit(): void {
        this.calendarOptions = {
            initialView: 'dayGridMonth',
            plugins: [dayGridPlugin],
            events: this.taskService.transformToEvent(),
            eventColor: '#ff4081',
        };
    }

    onBackToHomePage() {
        this.taskService.isOpenDashBoard.next(true);
        this.route.navigate(['../task-management']);
    }
}
