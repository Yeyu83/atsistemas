import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './icon-button.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    IconButtonComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [
    IconButtonComponent,
  ]
})
export class IconButtonModule { }
