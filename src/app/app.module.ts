import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StreekbierenModule } from './streekbieren/streekbieren.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StreekbierenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
