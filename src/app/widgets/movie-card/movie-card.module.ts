import { MovieCardGenrePipe } from '@app/pipes/movie-card-genre.pipe';
import { MovieCardComponent } from '@app/widgets/movie-card/movie-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    MovieCardComponent,
    MovieCardGenrePipe,
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
