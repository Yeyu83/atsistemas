import { Injectable } from '@angular/core';
import { LayoutStateTypes } from '@models/constants/layout-state-types.constant';
import { LayoutStateNames } from '@models/enums/layout-state-names.enum';
import { LayoutState } from '@models/interfaces/layout-state.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private layoutState$ = new BehaviorSubject<LayoutState | null>(null);

  public getLayoutState(): Observable<LayoutState | null> {
    return this.layoutState$.asObservable()
  }

  public setLayoutState(url: string): void {
    const layoutStateName = this.getLayoutStateNameFromUrl(url);
    const layoutState = LayoutStateTypes.get(layoutStateName);
    layoutState && this.layoutState$.next(layoutState);
  }

  private getLayoutStateNameFromUrl(url: string): any {
    const layoutStateNamesArr: string[] = Object.values(LayoutStateNames);
    const layoutStateNameMatched = (url.split('/')
      .find(segment => layoutStateNamesArr.includes(segment)) as LayoutStateNames);
    return layoutStateNameMatched;
  }
}
