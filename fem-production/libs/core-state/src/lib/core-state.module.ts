import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreDataModule } from '@fem-production/core-data';
import { WidgetsFacade } from './widgets/widgets.facade';

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule
  ],
  providers: [WidgetsFacade],
})
export class CoreStateModule { }
