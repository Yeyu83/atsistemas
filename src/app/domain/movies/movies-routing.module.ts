import { MoviesComponent } from '@domain/movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'all',
    component: MoviesComponent,
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('@domain/movie-detail/movie-detail.module').then((m) => m.MovieDetailModule),
  },
];

const redirectRoutes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full',
  },
  {
    path: 'detail',
    redirectTo: 'all',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild([...redirectRoutes, ...routes])],
  exports: [RouterModule],
})
export class MoviesRoutingModule { }
