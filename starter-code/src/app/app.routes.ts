import { Routes } from '@angular/router';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';

export const routes: Routes = [
  {
    path: 'home',
    component: MyHomeComponent
  },
  {
    path: 'movie/:movieId',
    component: MyMovieComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
