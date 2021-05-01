import { Component } from '@angular/core';

@Component({
  selector: 'fem-production-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/widgets', icon: 'view_list', title: 'Widgets' },
  ];
}
