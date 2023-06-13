import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { TaskService } from '../../services/task.service';
@Component({
    selector: 'app-calendar-view',
    templateUrl: './calendar-view.component.html',
    styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent implements OnInit {
    calendarOptions: CalendarOptions;
    @Output() backToHomePage = new EventEmitter<any>();

    constructor(private taskService: TaskService) {}

    ngOnInit(): void {
        this.calendarOptions = {
            initialView: 'dayGridMonth',
            plugins: [dayGridPlugin],
            events: this.taskService.transformToEvent(),
            eventColor: '#ff4081',
        };
    }

    onBackToHomePage() {
        this.backToHomePage.emit();
    }
}
