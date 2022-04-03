import { MovieCardComponent } from '@app/widgets/movie-card/movie-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    MovieCardComponent,
  ],
})
export class MovieCardModule { }
