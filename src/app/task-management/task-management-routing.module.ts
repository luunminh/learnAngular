import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagementComponent } from './task-management.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { TaskAddComponent } from './components/tasks/task-add/task-add.component';
const taskManagementRoutes: Routes = [
    {
        path: '',
        component: TaskManagementComponent,
        children: [
            { path: 'calendar-view', component: CalendarViewComponent },
            { path: 'add', component: TaskAddComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(taskManagementRoutes)],
    exports: [RouterModule],
})
export class TaskManagementRoutingModule {}
