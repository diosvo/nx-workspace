import { Component } from '@angular/core';
import { Widget } from '@fem-production/api-interfaces';

@Component({
  selector: 'fem-production-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  widgets: Array<Widget> = [
    { id: '1', title: 'Widget 01', description: 'Pending' },
    { id: '2', title: 'Widget 02', description: 'Pending' },
    { id: '3', title: 'Widget 03', description: 'Pending' }
  ]

  constructor() { }

}
