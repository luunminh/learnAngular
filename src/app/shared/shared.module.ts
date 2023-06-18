import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [MatProgressSpinnerModule],
  exports: [LoadingSpinnerComponent],
})
export class SharedModule {}
