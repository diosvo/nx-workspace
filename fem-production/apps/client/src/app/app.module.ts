import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreDataModule } from '@fem-production/core-data';
import { MaterialModule } from '@fem-production/material';
import { UiToolbarModule } from '@fem-production/ui-toolbar';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreDataModule,
    HttpClientModule,
    MaterialModule,
    UiToolbarModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
