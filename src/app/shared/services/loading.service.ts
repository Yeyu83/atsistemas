import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingState$ = new BehaviorSubject<boolean>(false);

  public isLoading$: Observable<boolean> = this.loadingState$.asObservable();

  public getLoadingState(): Observable<any> {
    return this.loadingState$.asObservable();
  }

  public setLoadingState(isLoading: boolean): void {
    this.loadingState$.next(isLoading);
  }
}
