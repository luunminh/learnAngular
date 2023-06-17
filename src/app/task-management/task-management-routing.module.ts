import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanDeactivate } from '@angular/router';
import { TaskManagementComponent } from './task-management.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { TaskAddComponent } from './components/tasks/task-add/task-add.component';
import { CanLeaveAddGuard } from './components/tasks/task-add/can-leave-add.guard';
const taskManagementRoutes: Routes = [
  {
    path: '',
    component: TaskManagementComponent,
    children: [
      { path: 'calendar-view', component: CalendarViewComponent },
      { path: 'add', component: TaskAddComponent, canDeactivate: [CanLeaveAddGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(taskManagementRoutes)],
  exports: [RouterModule],
})
export class TaskManagementRoutingModule {}
