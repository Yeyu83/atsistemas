import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '@models/interfaces/film.interface';
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

  public getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.MOVIES_API_URL);
  }

  public getFilmById(id: number): Observable<Film | undefined> {
    return this.http.get<Film[]>(this.MOVIES_API_URL)
      .pipe(map((movies: Film[]) => movies.find((movie: Film) => movie.id === Number(id))));
  }
}
