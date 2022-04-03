import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
