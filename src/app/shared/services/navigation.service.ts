import { Injectable } from '@angular/core';
import { Event, Router, RoutesRecognized } from '@angular/router';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(
    private router: Router
  ) { }

  public onRoutesRecognized(): Observable<Event> {
    return this.router.events.pipe(filter(e => e instanceof RoutesRecognized))
  }
}
