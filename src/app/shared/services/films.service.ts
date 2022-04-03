import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '@models/interfaces/movie.interface';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private readonly MOVIES_API_URL = `${environment.api.url}/${environment.api.endpoints.movies}`;

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getFilms(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.MOVIES_API_URL);
  }

  public getFilmById(id: number): Observable<Movie | undefined> {
    return this.http.get<Movie[]>(this.MOVIES_API_URL)
      .pipe(map((movies: Movie[]) => movies.find((movie: Movie) => movie.id === Number(id))));
  }
}
