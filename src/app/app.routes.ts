import {Routes} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {TodoPageComponent} from './todo-page/todo-page.component';

export const routes: Routes = [
  {path: 'page-one', component: LandingPageComponent},
  {path: 'todo', component: TodoPageComponent},
  {path: '', component: LandingPageComponent},
];
