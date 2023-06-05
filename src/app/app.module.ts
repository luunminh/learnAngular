import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomAttributeDirective } from './directive/custom-attribute.directive';
import { CustomNgIfDirective } from './directive/custom-ngIf.directive';
import { FlexModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
    declarations: [AppComponent, CustomAttributeDirective, CustomNgIfDirective],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatSlideToggleModule,
        FlexModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
