import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  createForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  onSubmit() {
    this.widget = this.createForm.value;
    this.saved.emit();
  }

  onClose() {
    this.cancelled.emit();
  }
}
