import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreDataModule } from '@fem-production/core-data';
import { CoreStateModule } from '@fem-production/core-state';
import { MaterialModule } from '@fem-production/material';
import { UiToolbarModule } from '@fem-production/ui-toolbar';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';

import { WidgetDetailsComponent } from './widgets/widget-details/widget-details.component';
import { WidgetListComponent } from './widgets/widget-list/widget-list.component';
import { WidgetsComponent } from './widgets/widgets.component';

@NgModule({
  declarations: [AppComponent, WidgetsComponent, WidgetDetailsComponent, WidgetListComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    RoutingModule,
    UiToolbarModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
