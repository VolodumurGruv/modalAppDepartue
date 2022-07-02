import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ModalLogComponent } from './modal/components/modal-log/modal-log.component';
import { CarLogComponent } from './modal/components/car-log/car-log.component';
import { DriverLogComponent } from './modal/components/driver-log/driver-log.component';
import { CommonModule } from '@angular/common';
import { DepatueComponent } from './modal/components/depatue/depatue.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ModalLogComponent,
    CarLogComponent,
    DriverLogComponent,
    DepatueComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
