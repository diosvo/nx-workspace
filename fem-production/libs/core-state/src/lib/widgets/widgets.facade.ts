import { Injectable } from '@angular/core';

import { Widget } from '@fem-production/api-interfaces';
import { Subject } from 'rxjs';

@Injectable()
export class WidgetsFacade {
  private allWidgets = new Subject<Widget[]>();
  private selectedWidget = new Subject<Widget>();
  private mutations = new Subject();

  allWidgets$ = this.allWidgets.asObservable();
  selectedWidget$ = this.selectedWidget.asObservable();
  mutations$ = this.mutations.asObservable();
}
