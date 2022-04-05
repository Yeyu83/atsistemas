import { Injectable } from '@angular/core';
import { LAYOUT_TYPES } from '@models/constants/layout-types.constant';
import { LayoutTypesEnum } from '@models/enums/layout-types.enum';
import { RoutesEnum } from '@models/enums/routes.enum';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private routeLayouts = new Map<RoutesEnum, LayoutTypesEnum>([
    [RoutesEnum.Home, LayoutTypesEnum.List],
    [RoutesEnum.MoviesList, LayoutTypesEnum.List],
    [RoutesEnum.MoviesDetail, LayoutTypesEnum.Detail],
    [RoutesEnum.MoviesNew, LayoutTypesEnum.New],
    [RoutesEnum.CompaniesList, LayoutTypesEnum.List],
    [RoutesEnum.ActorsList, LayoutTypesEnum.List],
  ]);

  public getLayoutByRoute(route: string): any {
    const layoutTypeKey = this.getLayoutType(this.getRouteKey(route))
    return LAYOUT_TYPES.find(item => item.type === layoutTypeKey)?.layout
  }

  private getRouteKey(route: string): RoutesEnum | undefined {
    return Object.values(RoutesEnum).find(item => route.includes(item));
  }

  private getLayoutType(routesEnumKey: RoutesEnum | undefined): LayoutTypesEnum | undefined {
    return this.routeLayouts.get(routesEnumKey as RoutesEnum);
  }
}

