import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  declarations: [],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ]
})
export class AppMaterialModule {}
