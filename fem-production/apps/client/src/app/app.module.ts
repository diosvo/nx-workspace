import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreDataModule } from '@fem-production/core-data';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreDataModule,
    HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
