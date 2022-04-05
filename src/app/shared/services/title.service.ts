import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private title$ = new BehaviorSubject<string>('')

  public getTitle(): Observable<string> {
    return this.title$.asObservable();
  }

  public setTitle(title: string): void {
    return this.title$.next(title);
  }
}
