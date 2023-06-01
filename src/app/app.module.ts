import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ActiveAccountComponent } from './active-account/active-account.component';
import { InactiveAccountComponent } from './inactive-account/inactive-account.component';
@NgModule({
    declarations: [AppComponent, ActiveAccountComponent, InactiveAccountComponent],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
