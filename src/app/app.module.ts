import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomAttributeDirective } from './directive/custom-attribute.directive';
import { CustomNgIfDirective } from './directive/custom-ngIf.directive';
import { FlexModule } from '@angular/flex-layout';
@NgModule({
    declarations: [AppComponent, CustomAttributeDirective, CustomNgIfDirective],
    imports: [BrowserModule, AppRoutingModule, FlexModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
