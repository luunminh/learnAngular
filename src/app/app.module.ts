import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskManagementModule } from './task-management/task-management.module';
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,

    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
