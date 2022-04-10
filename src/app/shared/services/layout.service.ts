import { layoutElements, LayoutElementsEnum, LayoutElementState, LayoutElementType } from '@models/constants/layout-types.constant';
import { Injectable } from '@angular/core';
import { LayoutTypesEnum } from '@models/enums/layout-types.enum';
import { RoutesEnum } from '@models/enums/routes.enum';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private readonly LAYOUTS = new Map<RoutesEnum, LayoutTypesEnum>([
    [RoutesEnum.Home, LayoutTypesEnum.List],
    [RoutesEnum.MoviesList, LayoutTypesEnum.List],
    [RoutesEnum.MoviesDetail, LayoutTypesEnum.Detail],
    [RoutesEnum.MoviesNew, LayoutTypesEnum.New],
    [RoutesEnum.CompaniesList, LayoutTypesEnum.List],
    [RoutesEnum.ActorsList, LayoutTypesEnum.List],
  ]);

  public getLayoutElementByRoute(
    layoutElement: LayoutElementsEnum, route: string
  ): LayoutElementState | undefined {
    return layoutElements
      .get(layoutElement)?.find(item => item.type === this.getLayoutType(this.getRouteKey(route)))?.content;
  }

  private getRouteKey(route: string): RoutesEnum | undefined {
    return Object.values(RoutesEnum).find(item => route.includes(item));
  }

  private getLayoutType(routesEnumKey: RoutesEnum | undefined): LayoutTypesEnum | undefined {
    return this.LAYOUTS.get(routesEnumKey as RoutesEnum);
  }
}
