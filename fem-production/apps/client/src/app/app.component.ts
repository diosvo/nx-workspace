import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem-production/api-interfaces';
import { WidgetsService } from '@fem-production/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'fem-production-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  widgets$: Observable<Widget[]>;

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit(): void {
    this.widgets$ = this.widgetsService.all();
  }
}
