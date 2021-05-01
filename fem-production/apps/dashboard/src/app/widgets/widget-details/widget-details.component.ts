import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from '@fem-production/api-interfaces';

@Component({
  selector: 'widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.scss']
})
export class WidgetDetailsComponent {
  @Input() widget: Widget;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
