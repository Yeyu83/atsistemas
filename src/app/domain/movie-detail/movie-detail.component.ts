import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '@shared/services/movies.service';
import { Movie } from '@models/interfaces/movie.interface';
import { Observable, switchMap, tap } from 'rxjs';
import { TitleService } from '@shared/services/title.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  public movie$!: Observable<Movie | undefined>;

  constructor(
    private readonly moviesService: MoviesService,
    private readonly route: ActivatedRoute,
    private readonly titleService: TitleService,
  ) { }

  ngOnInit() {
    this.movie$ = this.route.params
      .pipe(
        switchMap(params => this.moviesService.getMovieById(params['id'])),
        tap(movie => movie && this.titleService.setTitle(this.getMovieTitle(movie)))
      );
  }

  private getMovieTitle(movie: Movie): string {
    return `${ movie.title } (${ movie.year })`;
  }
}
