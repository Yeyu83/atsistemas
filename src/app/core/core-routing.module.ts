import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const notFoundRoute = {
  path: '**',
  loadChildren: () => import('@domain/not-found/not-found.module').then((m) => m.NotFoundModule),
};

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('@domain/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'movies',
    loadChildren: () => import('@domain/movies/movies.module').then((m) => m.MoviesModule),
  },
  {
    path: 'companies',
    loadChildren: () => import('@domain/companies/companies.module').then((m) => m.CompaniesModule),
  },
  {
    path: 'actors',
    loadChildren: () => import('@domain/actors/actors.module').then((m) => m.ActorsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot([...routes, notFoundRoute])
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
