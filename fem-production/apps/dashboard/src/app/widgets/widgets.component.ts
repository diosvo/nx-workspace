import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem-production/api-interfaces';
import { WidgetsService } from '@fem-production/core-data';
import { Observable, Subject } from 'rxjs';

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
  allWidgets = new Subject<Widget[]>();
  selectedWidget = new Subject<Widget>();
  mutations = new Subject();

  allWidgets$ = this.allWidgets.asObservable();
  selectedWidget$ = this.selectedWidget.asObservable();
  mutations$ = this.mutations.asObservable();

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit(): void {
    this.load();
    this.reset();
  }

  reset(): void {
    this.load();
    this.mutations.next(true);
  }

  select(widget: Widget): void {
    this.selectedWidget.next(widget);
  }

  load(): void {
    this.widgetsService
      .all()
      .subscribe((widgets: Widget[]) => this.allWidgets.next(widgets));
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
