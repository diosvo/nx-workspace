import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as WidgetsActions from './widgets.actions';
import { WidgetsEntity } from './widgets.models';

export const WIDGETS_FEATURE_KEY = 'widgets';

export interface WidgetsState extends EntityState<WidgetsEntity> {
  selectedId?: string | number; // which Widgets record has been selected
  loaded: boolean; // has the Widgets list been loaded
  error?: string | null; // last known error (if any)
}

export interface WidgetsPartialState {
  readonly [WIDGETS_FEATURE_KEY]: WidgetsState;
}

export const widgetsAdapter: EntityAdapter<WidgetsEntity> = createEntityAdapter<WidgetsEntity>();

export const initialState: WidgetsState = widgetsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const onFailure = (state, { error }) => ({
  ...state,
  error,
})

const widgetsReducer = createReducer(
  initialState,
  on(WidgetsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  // Select

  on(WidgetsActions.selectWidget, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),

  // Reset
  on(WidgetsActions.resetSelectedWidget, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),

  on(WidgetsActions.resetWidgets, (state) => widgetsAdapter.removeAll(state)),

  // Load widgets
  on(WidgetsActions.loadWidgets, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  on(WidgetsActions.loadWidgetsSuccess, (state, { widgets }) =>
    widgetsAdapter.setAll(widgets, { ...state, loaded: true })
  ),

  on(WidgetsActions.loadWidgetsFailure, onFailure),

  // Load widget
  on(WidgetsActions.loadWidget, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),

  on(WidgetsActions.loadWidgetSuccess, (state, { widget }) =>
    widgetsAdapter.upsertOne(widget, { ...state, loaded: true })
  ),

  on(WidgetsActions.loadWidgetFailure, onFailure),

  // Add
  on(WidgetsActions.createWidget, (state, { widget }) =>
    widgetsAdapter.addOne(widget, { ...state, loaded: true })
  ),

  on(WidgetsActions.createWidgetFailure, onFailure),

  // Update
  on(WidgetsActions.updateWidget, (state, { widget }) =>
    widgetsAdapter.updateOne({ id: widget.id, changes: widget }, { ...state, loaded: true })
  ),

  on(WidgetsActions.updateWidgetFailure, onFailure),

  // Delete
  on(WidgetsActions.deleteWidget, (state, { widget }) =>
    widgetsAdapter.removeOne(widget.id, { ...state, loaded: true })
  ),

  on(WidgetsActions.deleteWidgetFailure, onFailure),
);

export function reducer(state: WidgetsState | undefined, action: Action) {
  return widgetsReducer(state, action);
}
