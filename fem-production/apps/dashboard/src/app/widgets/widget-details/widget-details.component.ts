import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from '@fem-production/api-interfaces';

@Component({
  selector: 'widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.scss']
})
export class WidgetDetailsComponent {
  currentWidget: Widget;
  originalTitle = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set widget(value: Widget) {
    if (value) this.originalTitle = value.title;
    this.currentWidget = { ...value };
  };
}
