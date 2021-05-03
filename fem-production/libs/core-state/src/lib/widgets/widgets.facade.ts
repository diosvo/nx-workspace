import { Injectable } from '@angular/core';

import { Widget } from '@fem-production/api-interfaces';
import { WidgetsService } from '@fem-production/core-data';

import { Subject, throwError } from 'rxjs';

@Injectable()
export class WidgetsFacade {
  private allWidgets = new Subject<Widget[]>();
  private selectedWidget = new Subject<Widget>();
  private mutations = new Subject();

  allWidgets$ = this.allWidgets.asObservable();
  selectedWidget$ = this.selectedWidget.asObservable();
  mutations$ = this.mutations.asObservable();

  constructor(private widgetsService: WidgetsService) { }

  selectWidget(widget: Widget) {
    this.selectedWidget.next(widget);
  }

  loadWidgets() {
    this.widgetsService
      .all()
      .subscribe({
        next: (widgets: Widget[]) => this.allWidgets.next(widgets),
        error: () => throwError('An error occurred')
      })
  }
}
