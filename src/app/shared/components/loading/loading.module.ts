import { LoadingComponent } from '@shared/components/loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    LoadingComponent,
  ]
})
export class LoadingModule { }
