import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'widgets',
    component: WidgetsComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
