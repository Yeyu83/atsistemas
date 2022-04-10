import { Router, RoutesRecognized } from '@angular/router';
import { LayoutService } from '@shared/services/layout.service';
import { filter, map, Observable } from 'rxjs';
import { LayoutElementsEnum } from '@models/constants/layout-types.constant';

export class LayoutElement<T> {
  public content$: Observable<T>;

  constructor(
    protected readonly router: Router,
    protected readonly layoutService: LayoutService,
    protected layoutElement: LayoutElementsEnum,
  ) {
    this.content$ = this.router.events
      .pipe(
        filter(event => event instanceof RoutesRecognized),
        map(event => this.layoutService
          .getLayoutElementByRoute(this.layoutElement, (event as any).urlAfterRedirects)),
      ) as unknown as Observable<T>;
  }
}
