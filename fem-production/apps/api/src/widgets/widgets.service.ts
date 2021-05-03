import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Widget } from '@fem-production/api-interfaces';

@Injectable()
export class WidgetsService {

  widgets: Array<Widget> = [
    { id: '1', title: 'Widget 01', description: 'Pending' },
    { id: '2', title: 'Widget 02', description: 'Pending' },
    { id: '3', title: 'Widget 03', description: 'Pending' },
  ];

  findAll() {
    return this.widgets;
  }

  findOne(id: string) {
    return this.widgets.find(widget => widget.id === id);
  }

  create(widget: Widget) {
    this.widgets = [
      ...this.widgets,
      Object.assign({}, widget, { id: uuid() })
    ];
    return this.widgets;
  }

  update(id: string, widget: Widget) {
    this.widgets = this.widgets.map(item => item.id === id ? widget : item)
    return this.widgets;
  }

  remove(id: string) {
    this.widgets = this.widgets.filter(item => item.id !== id);
    return this.widgets;
  }
}
