import { Component, OnInit } from '@angular/core';
import { Movie } from '@models/interfaces/movie.interface';
import { MoviesService } from '@shared/services/movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  public movies$: Observable<Movie[]> | undefined;

  constructor(
    private readonly moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.movies$ = this.moviesService.getMovies();
  }
}
