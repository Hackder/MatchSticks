import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StickComponent } from './components/stick/stick.component';

@NgModule({
  declarations: [AppComponent, StickComponent],
  imports: [BrowserModule, BrowserAnimationsModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
