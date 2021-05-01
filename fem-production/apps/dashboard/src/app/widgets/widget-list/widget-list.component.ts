import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from '@fem-production/api-interfaces';

@Component({
  selector: 'widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.scss']
})
export class WidgetListComponent {
  @Input() widgets: Array<Widget>;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
