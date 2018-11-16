import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PortalModule } from '@angular/cdk/portal';

import { AppComponent } from './app.component';

import { ViewModules } from './__core/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PortalModule,
    ...ViewModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
