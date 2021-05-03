import { Injectable } from '@angular/core';

import { Widget } from '@fem-production/api-interfaces';
import * as WidgetsSelectors from './widgets.selectors';
import * as WidgetsActions from './widgets.actions';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';

import { filter } from 'rxjs/operators';

@Injectable()
export class WidgetsFacade {
  loaded$ = this.store.pipe(select(WidgetsSelectors.getWidgetsLoaded));
  allWidget$ = this.store.pipe(select(WidgetsSelectors.getAllWidgets));
  selectedWidgets$ = this.store.pipe(select(WidgetsSelectors.getSelectedWidget));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
      action.type === WidgetsActions.createWidget({} as any).type ||
      action.type === WidgetsActions.updateWidget({} as any).type ||
      action.type === WidgetsActions.deleteWidget({} as any).type
    )
  )

  constructor(private store: Store, private actions$: ActionsSubject) { }

  selectWidget(selectedId: string) {
    this.dispatch(WidgetsActions.selectWidget({ selectedId }));
  }

  loadWidgets() {
    this.dispatch(WidgetsActions.loadWidgets());
  }

  loadWidget(widgetId: string) {
    this.dispatch(WidgetsActions.loadWidget({ widgetId }));
  }

  saveWidget(widget: Widget) {
    widget.id ? this.updateWidget(widget) : this.createWidget(widget);
  }

  createWidget(widget: Widget) {
    this.dispatch(WidgetsActions.createWidget({ widget }));
  }

  updateWidget(widget: Widget) {
    this.dispatch(WidgetsActions.updateWidget({ widget }));
  }

  deleteWidget(widget: Widget) {
    this.dispatch(WidgetsActions.deleteWidget({ widget }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
