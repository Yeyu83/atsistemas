import { MovieDetailComponent } from './movie-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesDetailRoutingModule } from './movie-detail-routing.module';

@NgModule({
  declarations: [
    MovieDetailComponent,
  ],
  imports: [
    CommonModule,
    MoviesDetailRoutingModule,
  ],
  exports: [
    MovieDetailComponent,
  ]
})
export class MovieDetailModule { }
