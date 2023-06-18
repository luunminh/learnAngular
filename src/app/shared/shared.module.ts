import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [MatProgressSpinnerModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  exports: [LoadingSpinnerComponent, CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
