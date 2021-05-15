import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem-production/api-interfaces';
import { WidgetsService } from '@fem-production/core-data';

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
  selectedWidget: Widget;

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit(): void {
    this.reset();
  }

  reset(): void {
    this.load();
    this.select(null);
  }

  resetForm(): void {
    this.select(emptyWidget);
  }

  select(widget: Widget): void {
    this.selectedWidget = widget;
  }

  load(): void {
    this.widgetsService
      .all()
      .subscribe({
        next: (response: Array<Widget>) => this.widgets = response
      })
  }

  save(widget: Widget): void {
    widget.id ? this.update(widget) : this.create(widget);
  }

  create(widget: Widget): void {
    this.widgetsService.create(widget).subscribe((_) => this.reset());
  }

  update(widget: Widget): void {
    this.widgetsService.update(widget).subscribe((_) => this.reset());
  }

  delete(widget: Widget): void {
    this.widgetsService.delete(widget).subscribe((_) => this.reset());
  }
}
