import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomAttributeDirective } from './directive/custom-attribute.directive';
import { CustomNgIfDirective } from './directive/custom-ngIf.directive';
import { FlexModule } from '@angular/flex-layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductService } from './products/product.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
    declarations: [
        AppComponent,
        CustomAttributeDirective,
        CustomNgIfDirective,
        HeaderComponent,
        ProductsComponent,
        ProductListComponent,
        ProductItemComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatSlideToggleModule,
        FlexModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule
    ],
    providers: [ProductService],
    bootstrap: [AppComponent],
})
export class AppModule {}
