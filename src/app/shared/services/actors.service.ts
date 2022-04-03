import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '@models/interfaces/actor.interface';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  private readonly ACTORS_API_URL = `${environment.api.url}/${environment.api.endpoints.movies}`;

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.ACTORS_API_URL);
  }
}
