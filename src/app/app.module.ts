import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ModalLogComponent } from './modal/components/modal-log/modal-log.component';
import { CarLogComponent } from './modal/components/car-log/car-log.component';
import { DriverLogComponent } from './modal/components/driver-log/driver-log.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ModalLogComponent,
    CarLogComponent,
    DriverLogComponent,
  ],
  imports: [BrowserModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
