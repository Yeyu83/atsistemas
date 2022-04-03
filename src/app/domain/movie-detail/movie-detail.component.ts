import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '@shared/services/movies.service';
import { Movie } from '@models/interfaces/movie.interface';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  public movie$: Observable<Movie | undefined> | undefined;

  constructor(
    private readonly moviesService: MoviesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.movie$ = this.route.params
      .pipe(switchMap((params) => this.moviesService.getMovieById(params['id'])));
  }
}
