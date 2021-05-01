import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem-production/api-interfaces';
import { WidgetsService } from '@fem-production/core-data';
import { Observable } from 'rxjs';

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
  widgets$: Observable<Widget[]>;
  selectWidget: Widget;

  constructor(private widgetsService: WidgetsService) { }
  
  ngOnInit(): void {
    this.load();
    this.reset();
  }

  reset(): void {
    this.load();
    this.selectWidget = null;
  }

  resetForm(): void {
    this.selectWidget = emptyWidget;
  }

  select(widget: Widget): void {
    this.selectWidget = widget;
  }

  load(): void {
    this.widgets$ = this.widgetsService.all();
  }

  save(widget: Widget): void {
    widget.id ? this.update(widget) : this.create(widget);
  }

  create(widget: Widget): void {
    this.widgetsService.create(widget);
    this.resetForm();
  }

  update(widget: Widget): void {
    this.widgetsService.update(widget);
    this.resetForm();
  }

  delete(widget: Widget): void {
    this.widgetsService.delete(widget);
    this.resetForm();
  }
}
