import { Component } from '@angular/core';
import { Widget } from '@fem-production/api-interfaces';
import { WidgetsService } from '@fem-production/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'fem-production-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  widgets$: Observable<Widget[]>;

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit(): void {
    this.loadWidgets();
  }

  loadWidgets(): void {
    this.widgets$ = this.widgetsService.all();
  }
}
