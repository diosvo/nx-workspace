import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { MaterialModule } from '@fem-production/material';

@NgModule({
  imports: [MaterialModule, CommonModule],
  declarations: [
    ToolbarComponent
  ],
  exports: [ToolbarComponent]
})
export class UiToolbarModule { }
