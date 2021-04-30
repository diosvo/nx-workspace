import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem-production/api-interfaces';

const mockWidgets: Array<Widget> = [
  { id: '1', title: 'Widget 01', description: 'Pending' },
  { id: '2', title: 'Widget 02', description: 'Pending' },
  { id: '3', title: 'Widget 03', description: 'Pending' }
]

const emptyWidget: Widget = {
  id: null,
  title: '',
  description: ''
};

@Component({
  selector: 'fem-production-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  widgets: Array<Widget>;
  selectedWidgets: Widget;

  constructor() {
  }

  ngOnInit(): void {
    this.reset();
  }

  reset(): void {
    this.loadWidgets();
    this.selectedWidgets = null;
  }

  resetForm(): void {
    this.selectedWidgets = emptyWidget;
  }

  selectWidget(widget: Widget): void {
    this.selectedWidgets = widget;
  }

  loadWidgets(): void {
    this.widgets = mockWidgets;
  }

  saveWidget(widget: Widget): void {
    widget.id ? this.updateWidget(widget) : this.createWidget(widget);
  }

  createWidget(widget: Widget): void {
    const newWidget = Object.assign({}, widget, { id: this.getRandomID() });
    this.widgets = [...this.widgets, newWidget];
    this.resetForm();
  }

  updateWidget(widget: Widget): void {
    this.widgets = this.widgets.map(item => {
      return widget.id === item.id ? widget : item;
    });
    this.resetForm();
  }

  deleteWidget(widget: Widget): void {
    this.widgets = this.widgets.filter(item => widget.id !== item.id);
    this.resetForm();
  }

  private getRandomID() {
    return Math.random().toString(36).substring(7);
  }
}
