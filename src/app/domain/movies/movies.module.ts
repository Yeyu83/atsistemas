import { TranslateModule } from '@ngx-translate/core';
import { MoviesRoutingModule } from '@domain/movies/movies-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from '@domain/movies/movies.component';

@NgModule({
  declarations: [
    MoviesComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    TranslateModule,
  ],
})
export class MoviesModule { }
